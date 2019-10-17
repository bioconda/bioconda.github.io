:orphan:  .. only available via index, not via toctree

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

   :versions: 0.7.3-0, 0.7.2-1, 0.7.2-0, 0.7.0-0, 0.6.1-2, 0.6.1-0, 0.5.2-0
   
   :depends bmtagger: 
   :depends bowtie2: 
   :depends fastqc: 
   :depends python: 
   :depends samtools: 
   :depends trf: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kneaddata

   and update with::

      conda update kneaddata

   or use the docker container::

      docker pull quay.io/biocontainers/kneaddata:<tag>

   (see `kneaddata/tags`_ for valid values for ``<tag>``)


.. |downloads_kneaddata| image:: https://img.shields.io/conda/dn/bioconda/kneaddata.svg?style=flat
   :target: https://anaconda.org/bioconda/kneaddata
   :alt:   (downloads)
.. |docker_kneaddata| image:: https://quay.io/repository/biocontainers/kneaddata/status
   :target: https://quay.io/repository/biocontainers/kneaddata
.. _`kneaddata/tags`: https://quay.io/repository/biocontainers/kneaddata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kneaddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kneaddata/README.html