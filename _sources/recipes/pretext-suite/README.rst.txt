:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretext-suite'
.. highlight: bash

pretext-suite
=============

.. conda:recipe:: pretext-suite
   :replaces_section_title:
   :noindex:

   Meta\-package for Pretext Hi\-C contact map tools.

   :homepage: https://github.com/wtsi-hpag/
   :license: MIT / MIT
   :recipe: /`pretext-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretext-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretext-suite/meta.yaml>`_

   A collection of the Pretext Hi\-C genome contact map tools. Developed by the High\-Performance Assembly Group\, Wellcome Sanger Institute\, UK.



.. conda:package:: pretext-suite

   |downloads_pretext-suite| |docker_pretext-suite|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends pretextgraph: 
   :depends pretextmap: 
   :depends pretextsnapshot: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pretext-suite

   and update with::

      mamba update pretext-suite

  To create a new environment, run::

      mamba create --name myenvname pretext-suite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pretext-suite:<tag>

   (see `pretext-suite/tags`_ for valid values for ``<tag>``)


.. |downloads_pretext-suite| image:: https://img.shields.io/conda/dn/bioconda/pretext-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/pretext-suite
   :alt:   (downloads)
.. |docker_pretext-suite| image:: https://quay.io/repository/biocontainers/pretext-suite/status
   :target: https://quay.io/repository/biocontainers/pretext-suite
.. _`pretext-suite/tags`: https://quay.io/repository/biocontainers/pretext-suite?tab=tags


.. raw:: html

    <script>
        var package = "pretext-suite";
        var versions = ["0.0.2","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretext-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretext-suite/README.html