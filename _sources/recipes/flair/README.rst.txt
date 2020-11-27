:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flair'
.. highlight: bash

flair
=====

.. conda:recipe:: flair
   :replaces_section_title:
   :noindex:

   Correction\, isoform definition\, and alternative splicing analysis of noisy reads \(ONT and PacBio\).

   :homepage: https://github.com/BrooksLabUCSC/flair
   :license: BSD-3
   :recipe: /`flair <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flair>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flair/meta.yaml>`_
   :links: doi: :doi:`10.1101/410183`

   


.. conda:package:: flair

   |downloads_flair| |docker_flair|

   :versions:
      
      

      ``1.5-3``,  ``1.4-0``

      

   
   :depends bedtools: 
   :depends bioconductor-deseq2: 
   :depends bioconductor-drimseq: 
   :depends bioconductor-stager: 
   :depends intervaltree: 
   :depends kerneltree: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends ncls: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3.6``
   :depends r-ggplot2: 
   :depends r-qqman: 
   :depends rpy2: 
   :depends samtools: 
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flair

   and update with::

      conda update flair

   or use the docker container::

      docker pull quay.io/biocontainers/flair:<tag>

   (see `flair/tags`_ for valid values for ``<tag>``)


.. |downloads_flair| image:: https://img.shields.io/conda/dn/bioconda/flair.svg?style=flat
   :target: https://anaconda.org/bioconda/flair
   :alt:   (downloads)
.. |docker_flair| image:: https://quay.io/repository/biocontainers/flair/status
   :target: https://quay.io/repository/biocontainers/flair
.. _`flair/tags`: https://quay.io/repository/biocontainers/flair?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flair/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flair/README.html