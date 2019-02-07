.. title:: Package Recipe 'adam'
.. highlight: bash


adam
====

.. conda:recipe:: adam
   :replaces_section_title:

   Genomics analysis platform built on Apache Avro\, Apache Spark and Parquet

   :homepage: https://github.com/bigdatagenomics/adam
   :license: Apache 2
   :recipe: /`adam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adam/meta.yaml>`_

   


.. conda:package:: adam

   |downloads_adam| |docker_adam|

   :versions: 0.25.0, 0.24.0, 0.23.0, 0.22.0

   :depends: :conda:package:`openjdk` >=8,<9 :conda:package:`pyspark`  

   :required~by: |required_by_adam|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install adam

   and update with::

      conda update adam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/adam


.. |required_by_adam| conda:required_by:: adam
.. |downloads_adam| image:: https://img.shields.io/conda/dn/bioconda/adam.svg?style=flat
   :alt:   (downloads)
.. |docker_adam| image:: https://quay.io/repository/biocontainers/adam/status
   :target: https://quay.io/repository/biocontainers/adam







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adam/README.html

