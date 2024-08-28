:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fastqstatsandsubsample'
.. highlight: bash

ucsc-fastqstatsandsubsample
===========================

.. conda:recipe:: ucsc-fastqstatsandsubsample
   :replaces_section_title:
   :noindex:

   Go through a fastq file doing sanity checks and collecting stats

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fastqstatsandsubsample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fastqstatsandsubsample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fastqstatsandsubsample/meta.yaml>`_

   


.. conda:package:: ucsc-fastqstatsandsubsample

   |downloads_ucsc-fastqstatsandsubsample| |docker_ucsc-fastqstatsandsubsample|

   :versions:
      
      

      ``469-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libopenssl-static: 
   :depends libpng: ``>=1.6.43,<1.7.0a0``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends zlib: 
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

      mamba install ucsc-fastqstatsandsubsample

   and update with::

      mamba update ucsc-fastqstatsandsubsample

  To create a new environment, run::

      mamba create --name myenvname ucsc-fastqstatsandsubsample

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-fastqstatsandsubsample:<tag>

   (see `ucsc-fastqstatsandsubsample/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fastqstatsandsubsample| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fastqstatsandsubsample.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fastqstatsandsubsample
   :alt:   (downloads)
.. |docker_ucsc-fastqstatsandsubsample| image:: https://quay.io/repository/biocontainers/ucsc-fastqstatsandsubsample/status
   :target: https://quay.io/repository/biocontainers/ucsc-fastqstatsandsubsample
.. _`ucsc-fastqstatsandsubsample/tags`: https://quay.io/repository/biocontainers/ucsc-fastqstatsandsubsample?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-fastqstatsandsubsample";
        var versions = ["469","377","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fastqstatsandsubsample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fastqstatsandsubsample/README.html