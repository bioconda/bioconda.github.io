:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome'
.. highlight: bash

bioconductor-bsgenome
=====================

.. conda:recipe:: bioconductor-bsgenome
   :replaces_section_title:

   Infrastructure shared by all the Biostrings\-based genome data packages.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/BSgenome.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome/meta.yaml>`_
   :links: biotools: :biotools:`bsgenome`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-bsgenome

   |downloads_bioconductor-bsgenome| |docker_bioconductor-bsgenome|

   :versions: 1.52.0-0, 1.50.0-0, 1.48.0-0, 1.46.0-0, 1.44.2-0, 1.42.0-0, 1.40.1-0, 1.38.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-biostrings: >=2.52.0,<2.53.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-rsamtools: >=2.0.0,<2.1.0
   :depends bioconductor-rtracklayer: >=1.44.0,<1.45.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-xvector: >=0.24.0,<0.25.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome

   and update with::

      conda update bioconductor-bsgenome

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome:<tag>

   (see `bioconductor-bsgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome
.. _`bioconductor-bsgenome/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome/README.html