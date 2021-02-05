:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mimseq'
.. highlight: bash

mimseq
======

.. conda:recipe:: mimseq
   :replaces_section_title:
   :noindex:

   Modification\-induced misincorporation tRNA sequencing.

   :homepage: https://github.com/nedialkova-lab/mim-tRNAseq
   :license: GPL3 / GPL-3.0-only
   :recipe: /`mimseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mimseq/meta.yaml>`_

   


.. conda:package:: mimseq

   |downloads_mimseq| |docker_mimseq|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2.6-0``,  ``0.2.5.6-0``,  ``0.2.5.5-1``,  ``0.2.5.5-0``,  ``0.2.5.4-0``,  ``0.2.5.3-0``

      

   
   :depends bedtools: 
   :depends bioconductor-complexheatmap: 
   :depends bioconductor-deseq2: 
   :depends biopython: 
   :depends blast: 
   :depends gmap: ``2019.02.26.*``
   :depends infernal: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pyfiglet: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends r-base: ``<3.7.0a0``
   :depends r-calibrate: 
   :depends r-devtools: 
   :depends r-dplyr: 
   :depends r-ggplot2: ``3.2.1.*``
   :depends r-gridextra: 
   :depends r-pheatmap: 
   :depends r-plyr: 
   :depends r-tidyverse: 
   :depends requests: 
   :depends samtools: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mimseq

   and update with::

      conda update mimseq

   or use the docker container::

      docker pull quay.io/biocontainers/mimseq:<tag>

   (see `mimseq/tags`_ for valid values for ``<tag>``)


.. |downloads_mimseq| image:: https://img.shields.io/conda/dn/bioconda/mimseq.svg?style=flat
   :target: https://anaconda.org/bioconda/mimseq
   :alt:   (downloads)
.. |docker_mimseq| image:: https://quay.io/repository/biocontainers/mimseq/status
   :target: https://quay.io/repository/biocontainers/mimseq
.. _`mimseq/tags`: https://quay.io/repository/biocontainers/mimseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mimseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mimseq/README.html