:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pneumocat'
.. highlight: bash

pneumocat
=========

.. conda:recipe:: pneumocat
   :replaces_section_title:
   :noindex:

   PneumoCaT \(Pneumococcal Capsular Typing\) uses a two\-step step approach to assign capsular type to S.pneumoniae genomic data \(Illumina\)

   :homepage: https://github.com/phe-bioinformatics/pneumocat
   :license: GPL / GPL-3.0
   :recipe: /`pneumocat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumocat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumocat/meta.yaml>`_

   


.. conda:package:: pneumocat

   |downloads_pneumocat| |docker_pneumocat|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends lxml: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
   :depends pyyaml: 
   :depends samtools: ``>1.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pneumocat

   and update with::

      conda update pneumocat

   or use the docker container::

      docker pull quay.io/biocontainers/pneumocat:<tag>

   (see `pneumocat/tags`_ for valid values for ``<tag>``)


.. |downloads_pneumocat| image:: https://img.shields.io/conda/dn/bioconda/pneumocat.svg?style=flat
   :target: https://anaconda.org/bioconda/pneumocat
   :alt:   (downloads)
.. |docker_pneumocat| image:: https://quay.io/repository/biocontainers/pneumocat/status
   :target: https://quay.io/repository/biocontainers/pneumocat
.. _`pneumocat/tags`: https://quay.io/repository/biocontainers/pneumocat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pneumocat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pneumocat/README.html