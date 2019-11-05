:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylseekr'
.. highlight: bash

bioconductor-methylseekr
========================

.. conda:recipe:: bioconductor-methylseekr
   :replaces_section_title:

   This is a package for the discovery of regulatory regions from Bis\-seq data

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MethylSeekR.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-methylseekr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseekr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylseekr/meta.yaml>`_
   :links: biotools: :biotools:`methylseekr`

   


.. conda:package:: bioconductor-methylseekr

   |downloads_bioconductor-methylseekr| |docker_bioconductor-methylseekr|

   :versions: 1.26.0-0, 1.24.0-1, 1.22.0-1, 1.22.0-0, 1.20.0-0, 1.18.0-2, 1.18.0-1, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-geneplotter: >=1.64.0,<1.65.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends r-base: >=3.6,<3.7.0a0
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
   :target: https://anaconda.org/bioconda/bioconductor-methylseekr
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