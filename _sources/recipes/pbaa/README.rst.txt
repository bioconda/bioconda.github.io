:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbaa'
.. highlight: bash

pbaa
====

.. conda:recipe:: pbaa
   :replaces_section_title:
   :noindex:

   PacBio tool to cluster HiFi reads and generate high quality consensus sequences

   :homepage: https://github.com/PacificBiosciences/pbAA
   :license: BSD-3-Clause-Clear
   :recipe: /`pbaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbaa/meta.yaml>`_

   


.. conda:package:: pbaa

   |downloads_pbaa| |docker_pbaa|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pbaa

   and update with::

      mamba update pbaa

  To create a new environment, run::

      mamba create --name myenvname pbaa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbaa:<tag>

   (see `pbaa/tags`_ for valid values for ``<tag>``)


.. |downloads_pbaa| image:: https://img.shields.io/conda/dn/bioconda/pbaa.svg?style=flat
   :target: https://anaconda.org/bioconda/pbaa
   :alt:   (downloads)
.. |docker_pbaa| image:: https://quay.io/repository/biocontainers/pbaa/status
   :target: https://quay.io/repository/biocontainers/pbaa
.. _`pbaa/tags`: https://quay.io/repository/biocontainers/pbaa?tab=tags


.. raw:: html

    <script>
        var package = "pbaa";
        var versions = ["1.1.0","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbaa/README.html