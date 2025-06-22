:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-gene-utils'
.. highlight: bash

hmftools-gene-utils
===================

.. conda:recipe:: hmftools-gene-utils
   :replaces_section_title:
   :noindex:

   Routines to generate resources files from Ensembl for use by many of the HMF applications

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/gene-utils
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-gene-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gene-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gene-utils/meta.yaml>`_

   


.. conda:package:: hmftools-gene-utils

   |downloads_hmftools-gene-utils| |docker_hmftools-gene-utils|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends openjdk: ``>=8,<=21``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hmftools-gene-utils

   and update with::

      mamba update hmftools-gene-utils

  To create a new environment, run::

      mamba create --name myenvname hmftools-gene-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hmftools-gene-utils:<tag>

   (see `hmftools-gene-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_hmftools-gene-utils| image:: https://img.shields.io/conda/dn/bioconda/hmftools-gene-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-gene-utils
   :alt:   (downloads)
.. |docker_hmftools-gene-utils| image:: https://quay.io/repository/biocontainers/hmftools-gene-utils/status
   :target: https://quay.io/repository/biocontainers/hmftools-gene-utils
.. _`hmftools-gene-utils/tags`: https://quay.io/repository/biocontainers/hmftools-gene-utils?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-gene-utils";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-gene-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-gene-utils/README.html