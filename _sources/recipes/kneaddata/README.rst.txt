.. title:: Package Recipe 'kneaddata'
.. highlight: bash


kneaddata
=========

.. conda:recipe:: kneaddata
   :replaces_section_title:

   KneadData is a tool designed to perform quality control on metagenomic and metatranscriptomic sequencing data\, especially data from microbiome experiments.

   :homepage: http://huttenhower.sph.harvard.edu/kneaddata
   :license: MIT / MIT
   :recipe: /`kneaddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kneaddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kneaddata/meta.yaml>`_

   


.. conda:package:: kneaddata

   |downloads_kneaddata| |docker_kneaddata|

   :versions: 0.7.2, 0.7.0, 0.6.1, 0.5.2

   :depends: :conda:package:`bmtagger`  :conda:package:`bowtie2`  :conda:package:`fastqc`  :conda:package:`python`  :conda:package:`samtools`  :conda:package:`trf`  :conda:package:`trimmomatic`  

   :required~by: |required_by_kneaddata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kneaddata

   and update with::

      conda update kneaddata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kneaddata


.. |required_by_kneaddata| conda:required_by:: kneaddata
.. |downloads_kneaddata| image:: https://img.shields.io/conda/dn/bioconda/kneaddata.svg?style=flat
   :alt:   (downloads)
.. |docker_kneaddata| image:: https://quay.io/repository/biocontainers/kneaddata/status
   :target: https://quay.io/repository/biocontainers/kneaddata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kneaddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kneaddata/README.html

