:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fitcons.ucsc.hg19'
.. highlight: bash

bioconductor-fitcons.ucsc.hg19
==============================

.. conda:recipe:: bioconductor-fitcons.ucsc.hg19
   :replaces_section_title:

   Store UCSC fitCons fitness consequences scores version 1.01 for the human genome \(hg19\).

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/fitCons.UCSC.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fitcons.ucsc.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fitcons.ucsc.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fitcons.ucsc.hg19/meta.yaml>`_

   


.. conda:package:: bioconductor-fitcons.ucsc.hg19

   |downloads_bioconductor-fitcons.ucsc.hg19| |docker_bioconductor-fitcons.ucsc.hg19|

   :versions: 3.7.1-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-genomicscores: >=1.6.0,<1.7.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fitcons.ucsc.hg19

   and update with::

      conda update bioconductor-fitcons.ucsc.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fitcons.ucsc.hg19:<tag>

   (see `bioconductor-fitcons.ucsc.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fitcons.ucsc.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fitcons.ucsc.hg19.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fitcons.ucsc.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-fitcons.ucsc.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fitcons.ucsc.hg19
.. _`bioconductor-fitcons.ucsc.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-fitcons.ucsc.hg19?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fitcons.ucsc.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fitcons.ucsc.hg19/README.html