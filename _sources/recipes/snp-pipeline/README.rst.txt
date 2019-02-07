.. title:: Package Recipe 'snp-pipeline'
.. highlight: bash


snp-pipeline
============

.. conda:recipe:: snp-pipeline
   :replaces_section_title:

   Script and functions for SNP matrix construction

   :homepage: https://github.com/CFSAN-Biostatistics/snp-pipeline
   :license: BSD License
   :recipe: /`snp-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snp-pipeline/meta.yaml>`_

   


.. conda:package:: snp-pipeline

   |downloads_snp-pipeline| |docker_snp-pipeline|

   :versions: 2.0.2, 1.0.1, 0.7.0, 0.5.0

   :depends: :conda:package:`biopython`  :conda:package:`psutil`  :conda:package:`python`  :conda:package:`pyvcf` >=0.6.7 :conda:package:`setuptools`  

   :required~by: |required_by_snp-pipeline|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snp-pipeline

   and update with::

      conda update snp-pipeline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/snp-pipeline


.. |required_by_snp-pipeline| conda:required_by:: snp-pipeline
.. |downloads_snp-pipeline| image:: https://img.shields.io/conda/dn/bioconda/snp-pipeline.svg?style=flat
   :alt:   (downloads)
.. |docker_snp-pipeline| image:: https://quay.io/repository/biocontainers/snp-pipeline/status
   :target: https://quay.io/repository/biocontainers/snp-pipeline







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snp-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snp-pipeline/README.html

