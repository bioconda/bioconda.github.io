:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cexor'
.. highlight: bash

bioconductor-cexor
==================

.. conda:recipe:: bioconductor-cexor
   :replaces_section_title:

   Strand specific peak\-pair calling in ChIP\-exo replicates. The cumulative Skellam distribution function \(package \'skellam\'\) is used to detect significant normalised count differences of opposed sign at each DNA strand \(peak\-pairs\). Irreproducible discovery rate for overlapping peak\-pairs across biological replicates is estimated using the package \'idr\'.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CexoR.html
   :license: Artistic-2.0 | GPL-2 + file LICENSE
   :recipe: /`bioconductor-cexor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cexor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cexor/meta.yaml>`_
   :links: biotools: :biotools:`cexor`, doi: :doi:`10.14806/ej.21.0.837`

   


.. conda:package:: bioconductor-cexor

   |downloads_bioconductor-cexor| |docker_bioconductor-cexor|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-0, 1.14.0-0, 1.8.0-0
   
   :depends bioconductor-genomation: >=1.14.0,<1.15.0
   :depends bioconductor-genomeinfodb: >=1.18.0,<1.19.0
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-rsamtools: >=1.34.0,<1.35.0
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-idr: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cexor

   and update with::

      conda update bioconductor-cexor

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cexor:<tag>

   (see `bioconductor-cexor/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cexor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cexor.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cexor| image:: https://quay.io/repository/biocontainers/bioconductor-cexor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cexor
.. _`bioconductor-cexor/tags`: https://quay.io/repository/biocontainers/bioconductor-cexor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cexor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cexor/README.html