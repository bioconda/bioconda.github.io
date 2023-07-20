:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eegc'
.. highlight: bash

bioconductor-eegc
=================

.. conda:recipe:: bioconductor-eegc
   :replaces_section_title:
   :noindex:

   Engineering Evaluation by Gene Categorization \(eegc\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/eegc.html
   :license: GPL-2
   :recipe: /`bioconductor-eegc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eegc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eegc/meta.yaml>`_

   This package has been developed to evaluate cellular engineering processes for direct differentiation of stem cells or conversion \(transdifferentiation\) of somatic cells to primary cells based on high throughput gene expression data screened either by DNA microarray or RNA sequencing. The package takes gene expression profiles as inputs from three types of samples\: \(i\) somatic or stem cells to be \(trans\)differentiated \(input of the engineering process\)\, \(ii\) induced cells to be evaluated \(output of the engineering process\) and \(iii\) target primary cells \(reference for the output\). The package performs differential gene expression analysis for each pair\-wise sample comparison to identify and evaluate the transcriptional differences among the 3 types of samples \(input\, output\, reference\). The ideal goal is to have induced and primary reference cell showing overlapping profiles\, both very different from the original cells.


.. conda:package:: bioconductor-eegc

   |downloads_bioconductor-eegc| |docker_bioconductor-eegc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-dose: ``>=3.26.0,<3.27.0``
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-igraph: 
   :depends r-pheatmap: 
   :depends r-r.utils: 
   :depends r-sna: 
   :depends r-wordcloud: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eegc

   and update with::

      conda update bioconductor-eegc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eegc:<tag>

   (see `bioconductor-eegc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eegc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eegc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eegc
   :alt:   (downloads)
.. |docker_bioconductor-eegc| image:: https://quay.io/repository/biocontainers/bioconductor-eegc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eegc
.. _`bioconductor-eegc/tags`: https://quay.io/repository/biocontainers/bioconductor-eegc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eegc";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eegc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eegc/README.html