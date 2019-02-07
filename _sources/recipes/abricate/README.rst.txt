.. title:: Package Recipe 'abricate'
.. highlight: bash


abricate
========

.. conda:recipe:: abricate
   :replaces_section_title:

   Mass screening of contigs for antibiotic resistance genes

   :homepage: https://github.com/tseemann/abricate
   :license: GPL2
   :recipe: /`abricate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abricate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abricate/meta.yaml>`_

   


.. conda:package:: abricate

   |downloads_abricate| |docker_abricate|

   :versions: 0.8.10, 0.8.7, 0.8, 0.7, 0.5, 0.4, 0.3, 0.2

   :depends: :conda:package:`blast` >=2.7 :conda:package:`emboss`  :conda:package:`entrez-direct`  :conda:package:`perl-bioperl` >=1.7 :conda:package:`perl-file-slurp`  :conda:package:`perl-json`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-lwp-simple`  :conda:package:`perl-text-csv`  :conda:package:`unzip`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_abricate|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abricate

   and update with::

      conda update abricate

   or use the docker container::

      docker pull quay.io/repository/biocontainers/abricate


.. |required_by_abricate| conda:required_by:: abricate
.. |downloads_abricate| image:: https://img.shields.io/conda/dn/bioconda/abricate.svg?style=flat
   :alt:   (downloads)
.. |docker_abricate| image:: https://quay.io/repository/biocontainers/abricate/status
   :target: https://quay.io/repository/biocontainers/abricate







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abricate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abricate/README.html

