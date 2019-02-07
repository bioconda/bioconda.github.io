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

   :versions: 1.4

   :depends: :conda:package:`bowtie2` >=2.3.0 :conda:package:`igvtools`  :conda:package:`perl` 5.22.0* :conda:package:`r-base` 3.3.1* :conda:package:`samtools` <1.3.0 

   :required~by: |required_by_damidseq_pipeline|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install damidseq_pipeline

   and update with::

      conda update damidseq_pipeline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/damidseq_pipeline


.. |required_by_damidseq_pipeline| conda:required_by:: damidseq_pipeline
.. |downloads_damidseq_pipeline| image:: https://img.shields.io/conda/dn/bioconda/damidseq_pipeline.svg?style=flat
   :alt:   (downloads)
.. |docker_damidseq_pipeline| image:: https://quay.io/repository/biocontainers/damidseq_pipeline/status
   :target: https://quay.io/repository/biocontainers/damidseq_pipeline







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damidseq_pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damidseq_pipeline/README.html

