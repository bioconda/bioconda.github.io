:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'footprint'
.. highlight: bash

footprint
=========

.. conda:recipe:: footprint
   :replaces_section_title:

   This is a pipeline to find transcription factor footprints in ATAC\-seq or DNase\-seq data.

   :homepage: https://ohlerlab.mdc-berlin.de/software/Reproducible_footprinting_139/
   :license: GPL (>= 2)
   :recipe: /`footprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/footprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/footprint/meta.yaml>`_

   


.. conda:package:: footprint

   |downloads_footprint| |docker_footprint|

   :versions: 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends bedtools: ==2.17.0
   
   :depends bioconductor-genomicranges: 
   
   :depends perl: 5.22.0*
   
   :depends r-base: 3.3.2*
   
   :depends r-gtools: 
   
   :depends r-mixtools: 
   
   :depends r-segmented: 
   
   :depends samtools: ==1.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install footprint

   and update with::

      conda update footprint

   or use the docker container::

      docker pull quay.io/repository/biocontainers/footprint:<tag>

   (see `footprint/tags`_ for valid values for ``<tag>``)


.. |downloads_footprint| image:: https://img.shields.io/conda/dn/bioconda/footprint.svg?style=flat
   :alt:   (downloads)
.. |docker_footprint| image:: https://quay.io/repository/biocontainers/footprint/status
   :target: https://quay.io/repository/biocontainers/footprint
.. _`footprint/tags`: https://quay.io/repository/biocontainers/footprint?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/footprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/footprint/README.html