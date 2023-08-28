:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vawk'
.. highlight: bash

vawk
====

.. conda:recipe:: vawk
   :replaces_section_title:
   :noindex:

   An awk\-like VCF parser

   :homepage: https://github.com/cc2qe/vawk
   :license: MIT / MIT
   :recipe: /`vawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vawk/meta.yaml>`_

   


.. conda:package:: vawk

   |downloads_vawk| |docker_vawk|

   :versions:
      
      

      ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends gawk: 
   :depends python: 
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

      mamba install vawk

   and update with::

      mamba update vawk

  To create a new environment, run::

      mamba create --name myenvname vawk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vawk:<tag>

   (see `vawk/tags`_ for valid values for ``<tag>``)


.. |downloads_vawk| image:: https://img.shields.io/conda/dn/bioconda/vawk.svg?style=flat
   :target: https://anaconda.org/bioconda/vawk
   :alt:   (downloads)
.. |docker_vawk| image:: https://quay.io/repository/biocontainers/vawk/status
   :target: https://quay.io/repository/biocontainers/vawk
.. _`vawk/tags`: https://quay.io/repository/biocontainers/vawk?tab=tags


.. raw:: html

    <script>
        var package = "vawk";
        var versions = ["0.0.2","0.0.2","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vawk/README.html