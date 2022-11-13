:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-factr'
.. highlight: bash

bioconductor-factr
==================

.. conda:recipe:: bioconductor-factr
   :replaces_section_title:
   :noindex:

   Functional Annotation of Custom Transcriptomes

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/factR.html
   :license: file LICENSE
   :recipe: /`bioconductor-factr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factr/meta.yaml>`_

   factR contain tools to process and interact with custom\-assembled transcriptomes \(GTF\). At its core\, factR constructs CDS information on custom transcripts and subsequently predicts its functional output. In addition\, factR has tools capable of plotting transcripts\, correcting chromosome and gene information and shortlisting new transcripts.


.. conda:package:: bioconductor-factr

   |downloads_bioconductor-factr| |docker_bioconductor-factr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-drawproteins: ``>=1.18.0,<1.19.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-wiggleplotr: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-crayon: 
   :depends r-data.table: ``>=1.14``
   :depends r-dplyr: ``>=1.0``
   :depends r-ggplot2: ``>=3.3``
   :depends r-pbapply: ``>=1.5``
   :depends r-purrr: ``>=0.3``
   :depends r-rcurl: ``>=1.98``
   :depends r-rlang: ``>=1.0``
   :depends r-stringr: ``>=1.4``
   :depends r-tibble: ``>=3.1``
   :depends r-tidyr: ``>=1.1``
   :depends r-xml: ``>=3.99``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-factr

   and update with::

      conda update bioconductor-factr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-factr:<tag>

   (see `bioconductor-factr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-factr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-factr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-factr
   :alt:   (downloads)
.. |docker_bioconductor-factr| image:: https://quay.io/repository/biocontainers/bioconductor-factr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-factr
.. _`bioconductor-factr/tags`: https://quay.io/repository/biocontainers/bioconductor-factr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-factr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-factr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-factr/README.html