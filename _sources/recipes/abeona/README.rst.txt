.. title:: Package Recipe 'abeona'
.. highlight: bash


abeona
======

.. conda:recipe:: abeona
   :replaces_section_title:

   A simple transcriptome assembler based on kallisto and Cortex graphs.

   :homepage: https://github.com/winni2k/abeona
   :license: Apache / Apache Software
   :recipe: /`abeona <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abeona>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abeona/meta.yaml>`_

   


.. conda:package:: abeona

   |downloads_abeona| |docker_abeona|

   :versions: 0.42.1, 0.42.0, 0.41.1, 0.40.2, 0.40.0, 0.39.3, 0.37.2, 0.36.0, 0.31.2, 0.26.0, 0.24.0, 0.23.1, 0.23.0

   :depends: :conda:package:`bwa`  :conda:package:`cortexpy` 0.45.7 :conda:package:`kallisto` 0.44.0 :conda:package:`mccortex` 1.0 :conda:package:`nextflow` 19.01.0 :conda:package:`pandas`  :conda:package:`progressbar2`  :conda:package:`python` >=3.6,<3.7.0a0 

   :required~by: |required_by_abeona|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abeona

   and update with::

      conda update abeona

   or use the docker container::

      docker pull quay.io/repository/biocontainers/abeona


.. |required_by_abeona| conda:required_by:: abeona
.. |downloads_abeona| image:: https://img.shields.io/conda/dn/bioconda/abeona.svg?style=flat
   :alt:   (downloads)
.. |docker_abeona| image:: https://quay.io/repository/biocontainers/abeona/status
   :target: https://quay.io/repository/biocontainers/abeona







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abeona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abeona/README.html

