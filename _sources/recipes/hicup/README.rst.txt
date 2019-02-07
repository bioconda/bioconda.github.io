.. title:: Package Recipe 'hicup'
.. highlight: bash


hicup
=====

.. conda:recipe:: hicup
   :replaces_section_title:

   A tool for mapping and performing quality control on Hi\-C data

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/hicup/
   :license: GPLv3
   :recipe: /`hicup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicup/meta.yaml>`_
   :links: biotools: :biotools:`hicup`, doi: :doi:`10.12688/f1000research.7334.1`

   


.. conda:package:: hicup

   |downloads_hicup| |docker_hicup|

   :versions: 0.6.1, 0.5.10, 0.5.9

   :depends: :conda:package:`bowtie`  :conda:package:`bowtie2`  :conda:package:`perl`  :conda:package:`r-base`  :conda:package:`samtools`  

   :required~by: |required_by_hicup|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicup

   and update with::

      conda update hicup

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hicup


.. |required_by_hicup| conda:required_by:: hicup
.. |downloads_hicup| image:: https://img.shields.io/conda/dn/bioconda/hicup.svg?style=flat
   :alt:   (downloads)
.. |docker_hicup| image:: https://quay.io/repository/biocontainers/hicup/status
   :target: https://quay.io/repository/biocontainers/hicup







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicup/README.html

