:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtsv'
.. highlight: bash

mtsv
====

.. conda:recipe:: mtsv
   :replaces_section_title:
   :noindex:

   MTSv is a suite of metagenomic binning and analysis tools.

   :homepage: https://github.com/FofanovLab/MTSv
   :license: MIT / MIT
   :recipe: /`mtsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtsv/meta.yaml>`_

   


.. conda:package:: mtsv

   |downloads_mtsv| |docker_mtsv|

   :versions:
      
      

      ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends biopython: 
   :depends bwa: 
   :depends click: 
   :depends concoct: 
   :depends ete3: 
   :depends gsl: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends megahit: 
   :depends mtsv-tools: 
   :depends numpy: 
   :depends pandas: ``>=0.20.3``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends pyyaml: 
   :depends samtools: 
   :depends scipy: 
   :depends six: 
   :depends snakemake: ``>=4.1.0``
   :depends wgfast: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mtsv

   and update with::

      conda update mtsv

   or use the docker container::

      docker pull quay.io/biocontainers/mtsv:<tag>

   (see `mtsv/tags`_ for valid values for ``<tag>``)


.. |downloads_mtsv| image:: https://img.shields.io/conda/dn/bioconda/mtsv.svg?style=flat
   :target: https://anaconda.org/bioconda/mtsv
   :alt:   (downloads)
.. |docker_mtsv| image:: https://quay.io/repository/biocontainers/mtsv/status
   :target: https://quay.io/repository/biocontainers/mtsv
.. _`mtsv/tags`: https://quay.io/repository/biocontainers/mtsv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtsv/README.html