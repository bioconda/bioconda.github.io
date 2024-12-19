:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-genomictools.filehandler'
.. highlight: bash

r-genomictools.filehandler
==========================

.. conda:recipe:: r-genomictools.filehandler
   :replaces_section_title:
   :noindex:

   A collection of I\/O tools for handling the most commonly used genomic datafiles\, like fasta\/\-q\, bed\, gff\, gtf\, ped\/map and vcf.

   :homepage: https://CRAN.R-project.org/package=GenomicTools.fileHandler
   :license: GPL2 / GPL-2
   :recipe: /`r-genomictools.filehandler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genomictools.filehandler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genomictools.filehandler/meta.yaml>`_

   


.. conda:package:: r-genomictools.filehandler

   |downloads_r-genomictools.filehandler| |docker_r-genomictools.filehandler|

   :versions:
      
      

      ``0.1.5.9-5``,  ``0.1.5.9-4``,  ``0.1.5.9-3``,  ``0.1.5.9-2``,  ``0.1.5.9-1``,  ``0.1.5.9-0``

      

   
   :depends bioconductor-snpstats: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: ``>=1.9.6``
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

      mamba install r-genomictools.filehandler

   and update with::

      mamba update r-genomictools.filehandler

  To create a new environment, run::

      mamba create --name myenvname r-genomictools.filehandler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-genomictools.filehandler:<tag>

   (see `r-genomictools.filehandler/tags`_ for valid values for ``<tag>``)


.. |downloads_r-genomictools.filehandler| image:: https://img.shields.io/conda/dn/bioconda/r-genomictools.filehandler.svg?style=flat
   :target: https://anaconda.org/bioconda/r-genomictools.filehandler
   :alt:   (downloads)
.. |docker_r-genomictools.filehandler| image:: https://quay.io/repository/biocontainers/r-genomictools.filehandler/status
   :target: https://quay.io/repository/biocontainers/r-genomictools.filehandler
.. _`r-genomictools.filehandler/tags`: https://quay.io/repository/biocontainers/r-genomictools.filehandler?tab=tags


.. raw:: html

    <script>
        var package = "r-genomictools.filehandler";
        var versions = ["0.1.5.9","0.1.5.9","0.1.5.9","0.1.5.9","0.1.5.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-genomictools.filehandler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-genomictools.filehandler/README.html