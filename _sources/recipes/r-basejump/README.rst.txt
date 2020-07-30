:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-basejump'
.. highlight: bash

r-basejump
==========

.. conda:recipe:: r-basejump
   :replaces_section_title:
   :noindex:

   Base functions for bioinformatics and R package development.

   :homepage: https://basejump.acidgenomics.com/
   :developer docs: https://github.com/acidgenomics/basejump
   :license: GPL-3
   :recipe: /`r-basejump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-basejump/meta.yaml>`_

   


.. conda:package:: r-basejump

   |downloads_r-basejump| |docker_r-basejump|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.9-0</code>,  <code>0.12.8-1</code>,  <code>0.12.8-0</code>,  <code>0.12.7-0</code>,  <code>0.12.6-1</code>,  <code>0.12.6-0</code>,  <code>0.12.5-1</code>,  <code>0.12.5-0</code>,  <code>0.12.4-0</code>,  </span></summary>
      

      ``0.12.9-0``,  ``0.12.8-1``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-1``,  ``0.12.6-0``,  ``0.12.5-1``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.23-0``,  ``0.11.22-0``,  ``0.11.21-0``,  ``0.11.20-1``,  ``0.11.20-0``,  ``0.11.19-0``,  ``0.11.18-0``,  ``0.11.17-0``,  ``0.11.16-0``,  ``0.11.15-0``,  ``0.11.14-0``,  ``0.11.13-0``,  ``0.11.12-0``,  ``0.11.11-0``,  ``0.11.10-0``,  ``0.11.8-0``,  ``0.11.7-0``,  ``0.11.5-0``,  ``0.10.9-1``,  ``0.10.9-0``,  ``0.9.11-0``,  ``0.9.9-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.5.9-0``,  ``0.5.3-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.48``
   :depends bioconductor-annotationhub: ``>=2.18``
   :depends bioconductor-biobase: ``>=2.46``
   :depends bioconductor-biocgenerics: ``>=0.32``
   :depends bioconductor-biocparallel: ``>=1.20``
   :depends bioconductor-biomart: ``>=2.42``
   :depends bioconductor-biostrings: ``>=2.54``
   :depends bioconductor-ensdb.hsapiens.v75: ``>=2.99``
   :depends bioconductor-ensembldb: ``>=2.10``
   :depends bioconductor-genomeinfodb: ``>=1.22``
   :depends bioconductor-genomicfeatures: ``>=1.38``
   :depends bioconductor-genomicranges: ``>=1.38``
   :depends bioconductor-iranges: ``>=2.20``
   :depends bioconductor-s4vectors: ``>=0.24``
   :depends bioconductor-singlecellexperiment: ``>=1.8``
   :depends bioconductor-summarizedexperiment: ``>=1.16``
   :depends r-acidbase: ``>=0.1.9``
   :depends r-acidgenerics: ``>=0.3.4``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cli: ``>=2.0``
   :depends r-goalie: ``>=0.4.4``
   :depends r-knitr: ``>=1.26``
   :depends r-magrittr: ``>=1.5``
   :depends r-matrix: ``>=1.2``
   :depends r-matrixstats: ``>=0.55``
   :depends r-pipette: ``>=0.4.5``
   :depends r-r.utils: ``>=2.9``
   :depends r-rcurl: ``>=1.95``
   :depends r-rmarkdown: ``>=2.0``
   :depends r-scales: ``>=1.1``
   :depends r-sessioninfo: ``>=1.1``
   :depends r-stringr: ``>=1.4``
   :depends r-syntactic: ``>=0.3.10``
   :depends r-tibble: ``>=2.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-basejump

   and update with::

      conda update r-basejump

   or use the docker container::

      docker pull quay.io/biocontainers/r-basejump:<tag>

   (see `r-basejump/tags`_ for valid values for ``<tag>``)


.. |downloads_r-basejump| image:: https://img.shields.io/conda/dn/bioconda/r-basejump.svg?style=flat
   :target: https://anaconda.org/bioconda/r-basejump
   :alt:   (downloads)
.. |docker_r-basejump| image:: https://quay.io/repository/biocontainers/r-basejump/status
   :target: https://quay.io/repository/biocontainers/r-basejump
.. _`r-basejump/tags`: https://quay.io/repository/biocontainers/r-basejump?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-basejump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-basejump/README.html