.. title:: Package Recipe 'maker'
.. highlight: bash


maker
=====

.. conda:recipe:: maker
   :replaces_section_title:

   MAKER is a portable and easily configurable genome annotation pipeline.

   :homepage: http://www.yandell-lab.org/software/maker.html
   :license: GPL3
   :recipe: /`maker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maker/meta.yaml>`_
   :links: biotools: :biotools:`maker`

   


.. conda:package:: maker

   |downloads_maker| |docker_maker|

   :versions: 2.31.10, 2.31.9

   :depends: :conda:package:`augustus` >=3.2.3 :conda:package:`blast`  :conda:package:`exonerate`  :conda:package:`infernal`  :conda:package:`mir-prefer`  :conda:package:`openmpi`  :conda:package:`perl-bioperl`  :conda:package:`perl-bit-vector`  :conda:package:`perl-dbd-pg`  :conda:package:`perl-dbd-sqlite`  :conda:package:`perl-dbi`  :conda:package:`perl-file-which`  :conda:package:`perl-forks`  :conda:package:`perl-inline-c`  :conda:package:`perl-io-all`  :conda:package:`perl-io-prompt`  :conda:package:`perl-list-moreutils` <=0.25 :conda:package:`perl-perl-unsafe-signals`  :conda:package:`perl-perlio-gzip`  :conda:package:`postgresql`  :conda:package:`repeatmasker`  :conda:package:`snap`  :conda:package:`snoscan`  :conda:package:`trnascan-se` 1.3.1 

   :required~by: |required_by_maker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maker

   and update with::

      conda update maker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/maker


.. |required_by_maker| conda:required_by:: maker
.. |downloads_maker| image:: https://img.shields.io/conda/dn/bioconda/maker.svg?style=flat
   :alt:   (downloads)
.. |docker_maker| image:: https://quay.io/repository/biocontainers/maker/status
   :target: https://quay.io/repository/biocontainers/maker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maker/README.html

