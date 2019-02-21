:orphan:  .. only available via index, not via toctree

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

   :versions: 0.42.1-0, 0.42.0-0, 0.41.1-0, 0.40.2-0, 0.40.0-0, 0.39.3-0, 0.37.2-0, 0.36.0-2, 0.36.0-1, 0.36.0-0, 0.31.2-0, 0.26.0-0, 0.24.0-2, 0.23.1-2, 0.23.1-0, 0.23.0-1, 0.23.0-0
   
   :depends bwa: 
   
   :depends cortexpy: 0.45.7
   
   :depends kallisto: 0.44.0
   
   :depends mccortex: 1.0
   
   :depends nextflow: 19.01.0
   
   :depends pandas: 
   
   :depends progressbar2: 
   
   :depends python: >=3.6,<3.7.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abeona

   and update with::

      conda update abeona

   or use the docker container::

      docker pull quay.io/biocontainers/abeona:<tag>

   (see `abeona/tags`_ for valid values for ``<tag>``)


.. |downloads_abeona| image:: https://img.shields.io/conda/dn/bioconda/abeona.svg?style=flat
   :alt:   (downloads)
.. |docker_abeona| image:: https://quay.io/repository/biocontainers/abeona/status
   :target: https://quay.io/repository/biocontainers/abeona
.. _`abeona/tags`: https://quay.io/repository/biocontainers/abeona?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abeona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abeona/README.html