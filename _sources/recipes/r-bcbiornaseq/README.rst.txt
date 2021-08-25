:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bcbiornaseq'
.. highlight: bash

r-bcbiornaseq
=============

.. conda:recipe:: r-bcbiornaseq
   :replaces_section_title:
   :noindex:

   R package for bcbio RNA\-seq analysis.

   :homepage: https://r.acidgenomics.com/packages/bcbiornaseq/
   :developer docs: https://github.com/hbc/bcbioRNASeq
   :license: GPL / AGPL-3.0
   :recipe: /`r-bcbiornaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bcbiornaseq/meta.yaml>`_

   


.. conda:package:: r-bcbiornaseq

   |downloads_r-bcbiornaseq| |docker_r-bcbiornaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.42-0</code>,  <code>0.3.41-0</code>,  <code>0.3.40-1</code>,  <code>0.3.40-0</code>,  <code>0.3.39-0</code>,  <code>0.3.37-0</code>,  <code>0.3.36-0</code>,  <code>0.3.34-0</code>,  <code>0.3.33-1</code>,  </span></summary>
      

      ``0.3.42-0``,  ``0.3.41-0``,  ``0.3.40-1``,  ``0.3.40-0``,  ``0.3.39-0``,  ``0.3.37-0``,  ``0.3.36-0``,  ``0.3.34-0``,  ``0.3.33-1``,  ``0.3.33-0``,  ``0.3.32-0``,  ``0.3.31-0``,  ``0.3.30-0``,  ``0.3.29-0``,  ``0.3.28-0``,  ``0.3.27-0``,  ``0.3.26-0``,  ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.4-0``,  ``0.2.4a-0``,  ``0.2.3a-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocstyle: ``>=2.18``
   :depends bioconductor-clusterprofiler: ``>=3.18``
   :depends bioconductor-degreport: ``>=1.26``
   :depends bioconductor-deseq2: ``>=1.30``
   :depends bioconductor-dose: ``>=3.16``
   :depends bioconductor-edger: ``>=3.32``
   :depends bioconductor-enrichplot: ``>=1.10``
   :depends bioconductor-ensdb.hsapiens.v75: ``>=2.99``
   :depends bioconductor-org.hs.eg.db: ``>=3.12``
   :depends bioconductor-org.mm.eg.db: ``>=3.12``
   :depends bioconductor-pathview: ``>=1.30``
   :depends bioconductor-rhdf5: ``>=2.34``
   :depends bioconductor-tximport: ``>=1.18``
   :depends bioconductor-vsn: ``>=3.58``
   :depends r-acidgenerics: ``>=0.5.18``
   :depends r-acidgsea: ``>=0.6.4``
   :depends r-acidplots: ``>=0.3.7``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-basejump: ``>=0.14.19``
   :depends r-bcbiobase: ``>=0.6.21``
   :depends r-deseqanalysis: ``>=0.4.2``
   :depends r-ggnewscale: ``>=0.4.5``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-goalie: ``>=0.5.2``
   :depends r-hexbin: ``>=1.28``
   :depends r-knitr: ``>=1.33``
   :depends r-rmarkdown: ``>=2.9``
   :depends r-viridis: ``>=0.6.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-bcbiornaseq

   and update with::

      conda update r-bcbiornaseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-bcbiornaseq:<tag>

   (see `r-bcbiornaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-bcbiornaseq| image:: https://img.shields.io/conda/dn/bioconda/r-bcbiornaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bcbiornaseq
   :alt:   (downloads)
.. |docker_r-bcbiornaseq| image:: https://quay.io/repository/biocontainers/r-bcbiornaseq/status
   :target: https://quay.io/repository/biocontainers/r-bcbiornaseq
.. _`r-bcbiornaseq/tags`: https://quay.io/repository/biocontainers/r-bcbiornaseq?tab=tags


.. raw:: html

    <script>
        var package = "r-bcbiornaseq";
        var versions = ["0.3.42","0.3.41","0.3.40","0.3.40","0.3.39"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bcbiornaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bcbiornaseq/README.html