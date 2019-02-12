:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tepid'
.. highlight: bash

tepid
=====

.. conda:recipe:: tepid
   :replaces_section_title:

   TEPID uses paired\-end illumina sequencing reads to identify novel TE variants.

   :homepage: https://github.com/ListerLab/TEPID
   :license: GPL
   :recipe: /`tepid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepid/meta.yaml>`_

   


.. conda:package:: tepid

   |downloads_tepid| |docker_tepid|

   :versions: 0.8-1, 0.8-0, 0.7-0
   
   :depends bedtools: 2.25.0
   
   :depends bowtie2: 
   
   :depends libgcc-ng: >=4.9
   
   :depends libgfortran: 1.0
   
   :depends nose: 
   
   :depends numpy: 1.9.2
   
   :depends pandas: 
   
   :depends pybedtools: 
   
   :depends pysam: <0.9,>0.8
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends samblaster: 
   
   :depends samtools: 1.2
   
   :depends yaha: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tepid

   and update with::

      conda update tepid

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tepid:<tag>

   (see `tepid/tags`_ for valid values for ``<tag>``)


.. |downloads_tepid| image:: https://img.shields.io/conda/dn/bioconda/tepid.svg?style=flat
   :alt:   (downloads)
.. |docker_tepid| image:: https://quay.io/repository/biocontainers/tepid/status
   :target: https://quay.io/repository/biocontainers/tepid
.. _`tepid/tags`: https://quay.io/repository/biocontainers/tepid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tepid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tepid/README.html