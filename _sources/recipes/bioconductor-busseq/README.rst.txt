:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-busseq'
.. highlight: bash

bioconductor-busseq
===================

.. conda:recipe:: bioconductor-busseq
   :replaces_section_title:
   :noindex:

   Batch Effect Correction with Unknow Subtypes for scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/BUSseq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-busseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busseq/meta.yaml>`_

   BUSseq R package fits an interpretable Bayesian hierarchical model\-\-\-the Batch Effects Correction with Unknown Subtypes for scRNA seq Data \(BUSseq\)\-\-\-to correct batch effects in the presence of unknown cell types. BUSseq is able to simultaneously correct batch effects\, clusters cell types\, and takes care of the count data nature\, the overdispersion\, the dropout events\, and the cell\-specific sequencing depth of scRNA\-seq data. After correcting the batch effects with BUSseq\, the corrected value can be used for downstream analysis as if all cells were sequenced in a single batch. BUSseq can integrate read count matrices obtained from different scRNA\-seq platforms and allow cell types to be measured in some but not all of the batches as long as the experimental design fulfills the conditions listed in our manuscript.


.. conda:package:: bioconductor-busseq

   |downloads_bioconductor-busseq| |docker_bioconductor-busseq|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gplots: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-busseq

   and update with::

      conda update bioconductor-busseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-busseq:<tag>

   (see `bioconductor-busseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-busseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-busseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-busseq
   :alt:   (downloads)
.. |docker_bioconductor-busseq| image:: https://quay.io/repository/biocontainers/bioconductor-busseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-busseq
.. _`bioconductor-busseq/tags`: https://quay.io/repository/biocontainers/bioconductor-busseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-busseq";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-busseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-busseq/README.html