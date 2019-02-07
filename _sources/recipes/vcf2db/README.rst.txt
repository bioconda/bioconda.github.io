.. title:: Package Recipe 'vcf2db'
.. highlight: bash


vcf2db
======

.. conda:recipe:: vcf2db
   :replaces_section_title:

   Create a gemini\-compatible database from a VCF

   :homepage: https://github.com/quinlan-lab/vcf2db
   :license: MIT
   :recipe: /`vcf2db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2db/meta.yaml>`_

   


.. conda:package:: vcf2db

   |downloads_vcf2db| |docker_vcf2db|

   :versions: 2018.10.26, 2018.05.23, 2018.01.23, 2017.12.11, 2017.11.15, 2017.10.11, 2017.09.14, 2017.04.12, 2017.03.01, 2017.02.25, 2017.02.24, 2017.01.10, 2016.12.09, 2016.11.08, 2016.04.29

   :depends: :conda:package:`cyvcf2`  :conda:package:`geneimpacts` >0.2.0 :conda:package:`nomkl`  :conda:package:`numpy`  :conda:package:`peddy` >=0.2.9 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-snappy`  :conda:package:`snappy` >=1.1.7,<1.1.8.0a0 :conda:package:`sqlalchemy`  

   :required~by: |required_by_vcf2db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2db

   and update with::

      conda update vcf2db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vcf2db


.. |required_by_vcf2db| conda:required_by:: vcf2db
.. |downloads_vcf2db| image:: https://img.shields.io/conda/dn/bioconda/vcf2db.svg?style=flat
   :alt:   (downloads)
.. |docker_vcf2db| image:: https://quay.io/repository/biocontainers/vcf2db/status
   :target: https://quay.io/repository/biocontainers/vcf2db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2db/README.html

