:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'damidseq_pipeline'
.. highlight: bash

damidseq_pipeline
=================

.. conda:recipe:: damidseq_pipeline
   :replaces_section_title:

   An automated pipeline for processing DamID sequencing datasets

   :homepage: https://github.com/owenjm/damidseq_pipeline
   :license: GPL-2.0
   :recipe: /`damidseq_pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damidseq_pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damidseq_pipeline/meta.yaml>`_

   


.. conda:package:: damidseq_pipeline

   |downloads_damidseq_pipeline| |docker_damidseq_pipeline|

   :versions: 1.4-2, 1.4-1, 1.4-0
   
   :depends bowtie2: >=2.3.0
   
   :depends igvtools: 
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends r-base: 
   
   :depends samtools: <1.3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install damidseq_pipeline

   and update with::

      conda update damidseq_pipeline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/damidseq_pipeline:<tag>

   (see `damidseq_pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_damidseq_pipeline| image:: https://img.shields.io/conda/dn/bioconda/damidseq_pipeline.svg?style=flat
   :alt:   (downloads)
.. |docker_damidseq_pipeline| image:: https://quay.io/repository/biocontainers/damidseq_pipeline/status
   :target: https://quay.io/repository/biocontainers/damidseq_pipeline
.. _`damidseq_pipeline/tags`: https://quay.io/repository/biocontainers/damidseq_pipeline?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damidseq_pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damidseq_pipeline/README.html