:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlseq'
.. highlight: bash

bioconductor-rlseq
==================

.. conda:recipe:: bioconductor-rlseq
   :replaces_section_title:
   :noindex:

   RLSeq\: An analysis package for R\-loop mapping data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RLSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlseq/meta.yaml>`_

   RLSeq is a toolkit for analyzing and evaluating R\-loop mapping datasets. RLSeq serves two primary purposes\: \(1\) to facilitate the evaluation of dataset quality\, and \(2\) to enable R\-loop analysis in the context of publicly\-available data sets from RLBase. The package is intended to provide a simple pipeline\, called with the \`RLSeq\(\)\` function\, which performs all main analyses. Individual functions are also accessible and provide custom analysis capabilities. Finally an HTML report is generated with \`report\(\)\`.


.. conda:package:: bioconductor-rlseq

   |downloads_bioconductor-rlseq| |docker_bioconductor-rlseq|

   :versions:
      
      

      ``1.4.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-complexheatmap: ``>=2.14.0,<2.15.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-regioner: ``>=1.30.0,<1.31.0``
   :depends bioconductor-rlhub: ``>=1.4.0,<1.5.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-aws.s3: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-callr: 
   :depends r-caretensemble: 
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-ggprism: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-valr: 
   :depends r-venndiagram: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rlseq

   and update with::

      conda update bioconductor-rlseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rlseq:<tag>

   (see `bioconductor-rlseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rlseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlseq
   :alt:   (downloads)
.. |docker_bioconductor-rlseq| image:: https://quay.io/repository/biocontainers/bioconductor-rlseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlseq
.. _`bioconductor-rlseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rlseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlseq";
        var versions = ["1.4.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlseq/README.html