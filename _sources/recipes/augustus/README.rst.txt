:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'augustus'
.. highlight: bash

augustus
========

.. conda:recipe:: augustus
   :replaces_section_title:

   AUGUSTUS is a gene prediction program for eukaryotes written by Mario Stanke and Oliver Keller. It can be used as an ab initio program\, which means it bases its prediction purely on the sequence. AUGUSTUS may also incorporate hints on the gene structure coming from extrinsic sources such as EST\, MS\/MS\, protein alignments and synthenic genomic alignments.

   :homepage: http://bioinf.uni-greifswald.de/augustus/
   :license: MIT / MIT
   :recipe: /`augustus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augustus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augustus/meta.yaml>`_
   :links: biotools: :biotools:`augustus`, doi: :doi:`10.1093/bioinformatics/btr010`

   


.. conda:package:: augustus

   |downloads_augustus| |docker_augustus|

   :versions: 3.3-4, 3.3-2, 3.3-1, 3.3-0, 3.2.3-5, 3.2.3-4, 3.2.3-3, 3.2.3-2, 3.2.3-1, 3.2.3-0, 3.2.2-3, 3.2.2-2, 3.2.2-1, 3.2.2-0, 3.1-0
   
   :depends bamtools: >=2.4.1,<2.4.2.0a0
   
   :depends boost: >=1.67.0,<1.67.1.0a0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends lp_solve: 
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-app-cpanminus: 
   
   :depends perl-dbi: 
   
   :depends perl-module-build: 
   
   :depends perl-scalar-list-utils: 
   
   :depends perl-yaml: 
   
   :depends sqlite: >=3.24.0,<4.0a0
   
   :depends suitesparse: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install augustus

   and update with::

      conda update augustus

   or use the docker container::

      docker pull quay.io/biocontainers/augustus:<tag>

   (see `augustus/tags`_ for valid values for ``<tag>``)


.. |downloads_augustus| image:: https://img.shields.io/conda/dn/bioconda/augustus.svg?style=flat
   :alt:   (downloads)
.. |docker_augustus| image:: https://quay.io/repository/biocontainers/augustus/status
   :target: https://quay.io/repository/biocontainers/augustus
.. _`augustus/tags`: https://quay.io/repository/biocontainers/augustus?tab=tags






Notes
-----
Builds with sqlite support are currently only available on Linux due to compile issues with macOS


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augustus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augustus/README.html