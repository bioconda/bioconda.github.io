.. title:: Package Recipe 'bioconductor-eegc'
.. highlight: bash


bioconductor-eegc
=================

.. conda:recipe:: bioconductor-eegc
   :replaces_section_title:

   This package has been developed to evaluate cellular engineering processes for direct differentiation of stem cells or conversion \(transdifferentiation\) of somatic cells to primary cells based on high throughput gene expression data screened either by DNA microarray or RNA sequencing. The package takes gene expression profiles as inputs from three types of samples\: \(i\) somatic or stem cells to be \(trans\)differentiated \(input of the engineering process\)\, \(ii\) induced cells to be evaluated \(output of the engineering process\) and \(iii\) target primary cells \(reference for the output\). The package performs differential gene expression analysis for each pair\-wise sample comparison to identify and evaluate the transcriptional differences among the 3 types of samples \(input\, output\, reference\). The ideal goal is to have induced and primary reference cell showing overlapping profiles\, both very different from the original cells.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/eegc.html
   :license: GPL-2
   :recipe: /`bioconductor-eegc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eegc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eegc/meta.yaml>`_

   


.. conda:package:: bioconductor-eegc

   |downloads_bioconductor-eegc| |docker_bioconductor-eegc|

   :versions: 1.8.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-clusterprofiler` >=3.10.0,<3.11.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-dose` >=3.8.0,<3.9.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-igraph`  :conda:package:`r-pheatmap`  :conda:package:`r-r.utils`  :conda:package:`r-sna`  :conda:package:`r-wordcloud`  

   :required~by: |required_by_bioconductor-eegc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-eegc

   and update with::

      conda update bioconductor-eegc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-eegc


.. |required_by_bioconductor-eegc| conda:required_by:: bioconductor-eegc
.. |downloads_bioconductor-eegc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eegc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-eegc| image:: https://quay.io/repository/biocontainers/bioconductor-eegc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eegc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eegc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eegc/README.html

