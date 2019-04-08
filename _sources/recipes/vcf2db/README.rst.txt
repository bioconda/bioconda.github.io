:orphan:  .. only available via index, not via toctree

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

   :versions: 2018.10.26-0, 2018.05.23-2, 2018.05.23-0, 2018.01.23-0, 2017.12.11-0, 2017.11.15-0, 2017.10.11-0, 2017.09.14-0, 2017.04.12-0, 2017.03.01-0, 2017.02.25-0, 2017.02.24-1, 2017.02.24-0, 2017.01.10-0, 2016.12.09-1, 2016.12.09-0, 2016.11.08-0, 2016.04.29-0
   
   :depends cyvcf2: 
   :depends geneimpacts: >0.2.0
   :depends nomkl: 
   :depends numpy: 
   :depends peddy: >=0.2.9
   :depends python: >=2.7,<2.8.0a0
   :depends python-snappy: 
   :depends snappy: >=1.1.7,<1.1.8.0a0
   :depends sqlalchemy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vcf2db

   and update with::

      conda update vcf2db

   or use the docker container::

      docker pull quay.io/biocontainers/vcf2db:<tag>

   (see `vcf2db/tags`_ for valid values for ``<tag>``)


.. |downloads_vcf2db| image:: https://img.shields.io/conda/dn/bioconda/vcf2db.svg?style=flat
   :alt:   (downloads)
.. |docker_vcf2db| image:: https://quay.io/repository/biocontainers/vcf2db/status
   :target: https://quay.io/repository/biocontainers/vcf2db
.. _`vcf2db/tags`: https://quay.io/repository/biocontainers/vcf2db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2db/README.html