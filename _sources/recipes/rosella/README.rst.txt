:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rosella'
.. highlight: bash

rosella
=======

.. conda:recipe:: rosella
   :replaces_section_title:
   :noindex:

   Metagenomic binning pipeline and algorithm using UMAP and HDBSCAN

   :homepage: https://github.com/rhysnewell/rosella.git
   :license: GPL3
   :recipe: /`rosella <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rosella/meta.yaml>`_

   


.. conda:package:: rosella

   |downloads_rosella| |docker_rosella|

   :versions:
      
      

      ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends biopython: 
   :depends blis: 
   :depends bwa: 
   :depends flight-genome: 
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends hdbscan: 
   :depends imageio: 
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numba: 
   :depends numpy: 
   :depends openblas: 
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends parallel: 
   :depends pkg-config: 
   :depends pynndescent: 
   :depends pysam: ``>=0.16``
   :depends python: ``>=3.8``
   :depends samtools: ``1.9.*``
   :depends scikit-bio: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends starcode: 
   :depends umap-learn: ``>=0.5``
   :depends vt: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rosella

   and update with::

      conda update rosella

   or use the docker container::

      docker pull quay.io/biocontainers/rosella:<tag>

   (see `rosella/tags`_ for valid values for ``<tag>``)


.. |downloads_rosella| image:: https://img.shields.io/conda/dn/bioconda/rosella.svg?style=flat
   :target: https://anaconda.org/bioconda/rosella
   :alt:   (downloads)
.. |docker_rosella| image:: https://quay.io/repository/biocontainers/rosella/status
   :target: https://quay.io/repository/biocontainers/rosella
.. _`rosella/tags`: https://quay.io/repository/biocontainers/rosella?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rosella/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rosella/README.html