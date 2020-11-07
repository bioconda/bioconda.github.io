:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylseqdata'
.. highlight: bash

bioconductor-methylseqdata
==========================

.. conda:recipe:: bioconductor-methylseqdata
   :replaces_section_title:
   :noindex:

   Collection of Public DNA Methylation Sequencing Datasets

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/MethylSeqData.html
   :license: CC0
   :recipe: /`bioconductor-methylseqdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseqdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseqdata/meta.yaml>`_

   Base\-level \(i.e. cytosine\-level\) counts for a collection of public bisulfite\-seq datasets \(e.g.\, WGBS and RRBS\)\, provided as SummarizedExperiment objects with sample\- and base\-level metadata.


.. conda:package:: bioconductor-methylseqdata

   |downloads_bioconductor-methylseqdata| |docker_bioconductor-methylseqdata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-hdf5array: ``>=1.18.0,<1.19.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rhdf5: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylseqdata

   and update with::

      conda update bioconductor-methylseqdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylseqdata:<tag>

   (see `bioconductor-methylseqdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylseqdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylseqdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylseqdata
   :alt:   (downloads)
.. |docker_bioconductor-methylseqdata| image:: https://quay.io/repository/biocontainers/bioconductor-methylseqdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylseqdata
.. _`bioconductor-methylseqdata/tags`: https://quay.io/repository/biocontainers/bioconductor-methylseqdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylseqdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylseqdata/README.html