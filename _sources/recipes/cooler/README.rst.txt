:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cooler'
.. highlight: bash

cooler
======

.. conda:recipe:: cooler
   :replaces_section_title:

   Sparse binary format for genomic interaction matrices

   :homepage: https://github.com/mirnylab/cooler
   :license: BSD
   :recipe: /`cooler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler/meta.yaml>`_

   


.. conda:package:: cooler

   |downloads_cooler| |docker_cooler|

   :versions: 0.8.3-0, 0.8.2-1, 0.8.2-0, 0.8.1-0, 0.7.11-0, 0.7.10-1, 0.7.10-0, 0.7.9-0, 0.7.8-0, 0.7.7-0, 0.7.6-2, 0.7.6-1, 0.7.6-0, 0.7.4-0, 0.7.0-0
   
   :depends asciitree: 
   
   :depends biopython: 
   
   :depends click: 
   
   :depends cytoolz: 
   
   :depends dask: 
   
   :depends h5py: 
   
   :depends hdf5: 
   
   :depends multiprocess: 
   
   :depends numpy: 
   
   :depends pairix: 
   
   :depends pandas: 
   
   :depends pyfaidx: 
   
   :depends pysam: >0.8
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends pyyaml: 
   
   :depends scipy: 
   
   :depends six: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cooler

   and update with::

      conda update cooler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cooler:<tag>

   (see `cooler/tags`_ for valid values for ``<tag>``)


.. |downloads_cooler| image:: https://img.shields.io/conda/dn/bioconda/cooler.svg?style=flat
   :alt:   (downloads)
.. |docker_cooler| image:: https://quay.io/repository/biocontainers/cooler/status
   :target: https://quay.io/repository/biocontainers/cooler
.. _`cooler/tags`: https://quay.io/repository/biocontainers/cooler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cooler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cooler/README.html