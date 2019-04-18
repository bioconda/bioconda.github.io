:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextflow'
.. highlight: bash

nextflow
========

.. conda:recipe:: nextflow
   :replaces_section_title:

   A DSL for data\-driven computational pipelines http\:\/\/nextflow.io

   :homepage: https://github.com/nextflow-io/nextflow
   :license: Apache-2.0
   :recipe: /`nextflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextflow/meta.yaml>`_

   


.. conda:package:: nextflow

   |downloads_nextflow| |docker_nextflow|

   :versions: 19.04.0-0, 19.01.0-4, 19.01.0-3, 18.10.1-3, 18.10.1-2, 18.10.1-1, 0.32.0-1, 0.31.1-1, 0.31.1-0, 0.31.0-2, 0.30.2-2, 0.30.1-0, 0.30.0-0, 0.29.1-0, 0.29.0-0, 0.28.2-0, 0.28.1-0, 0.28.0-0, 0.27.6-0, 0.27.5-0, 0.27.4-0, 0.27.2-0, 0.27.1-0, 0.27.0-0, 0.25.1-0, 0.24.2-0, 0.24.1-0, 0.23.4-0, 0.21.3-0, 0.19.3-0
   
   :depends coreutils: 
   :depends curl: >=7.64.1,<8.0a0
   :depends openjdk: >=8,<=11
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextflow

   and update with::

      conda update nextflow

   or use the docker container::

      docker pull quay.io/biocontainers/nextflow:<tag>

   (see `nextflow/tags`_ for valid values for ``<tag>``)


.. |downloads_nextflow| image:: https://img.shields.io/conda/dn/bioconda/nextflow.svg?style=flat
   :alt:   (downloads)
.. |docker_nextflow| image:: https://quay.io/repository/biocontainers/nextflow/status
   :target: https://quay.io/repository/biocontainers/nextflow
.. _`nextflow/tags`: https://quay.io/repository/biocontainers/nextflow?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextflow/README.html