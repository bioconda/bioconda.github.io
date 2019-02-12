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

   :versions: 3.3, 3.2.3, 3.2.2, 3.1

   :depends: :conda:package:`bamtools` 2.4.1* :conda:package:`boost` 1.64* :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`lp_solve`  :conda:package:`perl` 5.22.0* :conda:package:`perl-app-cpanminus`  :conda:package:`perl-dbi`  :conda:package:`perl-module-build`  :conda:package:`perl-scalar-list-utils`  :conda:package:`perl-yaml`  :conda:package:`sqlite`  :conda:package:`suitesparse`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_augustus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install augustus

   and update with::

      conda update augustus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/augustus


.. |required_by_augustus| conda:required_by:: augustus
.. |downloads_augustus| image:: https://img.shields.io/conda/dn/bioconda/augustus.svg?style=flat
   :alt:   (downloads)
.. |docker_augustus| image:: https://quay.io/repository/biocontainers/augustus/status
   :target: https://quay.io/repository/biocontainers/augustus






Notes
-----
Builds with sqlite support are currently only available on Linux due to compile issues with macOS


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augustus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augustus/README.html

