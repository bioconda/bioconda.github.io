.. title:: Package Recipe 'bioconductor-deconrnaseq'
.. highlight: bash


bioconductor-deconrnaseq
========================

.. conda:recipe:: bioconductor-deconrnaseq
   :replaces_section_title:

   DeconSeq is an R package for deconvolution of heterogeneous tissues based on mRNA\-Seq data. It modeled expression levels from heterogeneous cell populations in mRNA\-Seq as the weighted average of expression from different constituting cell types and predicted cell type proportions of single expression profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/DeconRNASeq.html
   :license: GPL-2
   :recipe: /`bioconductor-deconrnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconrnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deconrnaseq/meta.yaml>`_

   


.. conda:package:: bioconductor-deconrnaseq

   |downloads_bioconductor-deconrnaseq| |docker_bioconductor-deconrnaseq|

   :versions: 1.24.0

   :depends: :conda:package:`bioconductor-pcamethods` >=1.74.0,<1.75.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-limsolve`  

   :required~by: |required_by_bioconductor-deconrnaseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deconrnaseq

   and update with::

      conda update bioconductor-deconrnaseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-deconrnaseq


.. |required_by_bioconductor-deconrnaseq| conda:required_by:: bioconductor-deconrnaseq
.. |downloads_bioconductor-deconrnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deconrnaseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-deconrnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-deconrnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deconrnaseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deconrnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deconrnaseq/README.html

