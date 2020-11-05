:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-conumee'
.. highlight: bash

bioconductor-conumee
====================

.. conda:recipe:: bioconductor-conumee
   :replaces_section_title:
   :noindex:

   Enhanced copy\-number variation analysis using Illumina DNA methylation arrays

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/conumee.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-conumee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conumee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conumee/meta.yaml>`_

   This package contains a set of processing and plotting methods for performing copy\-number variation \(CNV\) analysis using Illumina 450k or EPIC methylation arrays.


.. conda:package:: bioconductor-conumee

   |downloads_bioconductor-conumee| |docker_bioconductor-conumee|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``

      

   
   :depends bioconductor-dnacopy: ``>=1.64.0,<1.65.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0``
   :depends bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-minfi: ``>=1.36.0,<1.37.0``
   :depends bioconductor-rtracklayer: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-conumee

   and update with::

      conda update bioconductor-conumee

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-conumee:<tag>

   (see `bioconductor-conumee/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-conumee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-conumee.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-conumee
   :alt:   (downloads)
.. |docker_bioconductor-conumee| image:: https://quay.io/repository/biocontainers/bioconductor-conumee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-conumee
.. _`bioconductor-conumee/tags`: https://quay.io/repository/biocontainers/bioconductor-conumee?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-conumee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-conumee/README.html