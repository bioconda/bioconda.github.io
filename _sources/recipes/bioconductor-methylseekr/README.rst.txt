:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylseekr'
.. highlight: bash

bioconductor-methylseekr
========================

.. conda:recipe:: bioconductor-methylseekr
   :replaces_section_title:

   This is a package for the discovery of regulatory regions from Bis\-seq data

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MethylSeekR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-methylseekr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseekr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseekr/meta.yaml>`_
   :links: biotools: :biotools:`methylseekr`

   


.. conda:package:: bioconductor-methylseekr

   |downloads_bioconductor-methylseekr| |docker_bioconductor-methylseekr|

   :versions: 1.22.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-2, 1.18.0-1, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-bsgenome: >=1.50.0,<1.51.0
   
   :depends bioconductor-geneplotter: >=1.60.0,<1.61.0
   
   :depends bioconductor-genomicranges: >=1.34.0,<1.35.0
   
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   
   :depends bioconductor-rtracklayer: >=1.42.0,<1.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-mhsmm: >=0.4.4
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylseekr

   and update with::

      conda update bioconductor-methylseekr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylseekr:<tag>

   (see `bioconductor-methylseekr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylseekr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylseekr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methylseekr| image:: https://quay.io/repository/biocontainers/bioconductor-methylseekr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylseekr
.. _`bioconductor-methylseekr/tags`: https://quay.io/repository/biocontainers/bioconductor-methylseekr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylseekr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylseekr/README.html