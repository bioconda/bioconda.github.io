:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qcumber'
.. highlight: bash

qcumber
=======

.. conda:recipe:: qcumber
   :replaces_section_title:

   Quality control\, quality trimming\, adapter removal and sequence content check of NGS data.

   :homepage: https://gitlab.com/RKIBioinformaticsPipelines/QCumber
   :license: LGPL3
   :recipe: /`qcumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qcumber/meta.yaml>`_

   


.. conda:package:: qcumber

   |downloads_qcumber| |docker_qcumber|

   :versions: 2.0.4-0
   
   :depends bioconductor-savr: 
   
   :depends bitstring: 
   
   :depends bowtie2: 2.3.*
   
   :depends docopt: 
   
   :depends fastqc: 0.11.*
   
   :depends jinja2: 
   
   :depends kraken: 0.10.*
   
   :depends krona: 
   
   :depends matplotlib: 2.0.*
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: 3.6.*
   
   :depends pyyaml: 3.12.*
   
   :depends r: 3.3.*
   
   :depends r-ggplot2: 2.2.*
   
   :depends r-quantreg: 
   
   :depends r-reshape2: 
   
   :depends r-stringi: 
   
   :depends samtools: 1.3.*
   
   :depends seaborn: 
   
   :depends setuptools: 
   
   :depends snakemake: 3.12.*
   
   :depends trimmomatic: 0.36.*
   
   :depends xmltodict: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qcumber

   and update with::

      conda update qcumber

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qcumber:<tag>

   (see `qcumber/tags`_ for valid values for ``<tag>``)


.. |downloads_qcumber| image:: https://img.shields.io/conda/dn/bioconda/qcumber.svg?style=flat
   :alt:   (downloads)
.. |docker_qcumber| image:: https://quay.io/repository/biocontainers/qcumber/status
   :target: https://quay.io/repository/biocontainers/qcumber
.. _`qcumber/tags`: https://quay.io/repository/biocontainers/qcumber?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qcumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qcumber/README.html