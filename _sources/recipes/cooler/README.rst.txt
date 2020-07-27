:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cooler'
.. highlight: bash

cooler
======

.. conda:recipe:: cooler
   :replaces_section_title:
   :noindex:

   Sparse binary format for genomic interaction matrices

   :homepage: https://github.com/mirnylab/cooler
   :license: BSD / BSD-3-Clause
   :recipe: /`cooler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cooler/meta.yaml>`_
   :links: doi: :doi:`0.1093/bioinformatics/btz540`

   


.. conda:package:: cooler

   |downloads_cooler| |docker_cooler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.9-0</code>,  <code>0.8.8-0</code>,  <code>0.8.7-0</code>,  <code>0.8.6-0</code>,  <code>0.8.5-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  </span></summary>
      

      ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-0``,  ``0.7.6-4``,  ``0.7.6-3``,  ``0.7.6-2``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.4-0``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends asciitree: 
   :depends biopython: ``<1.77``
   :depends click: ``>7``
   :depends cytoolz: 
   :depends dask: 
   :depends h5py: ``>=2.5``
   :depends hdf5: 
   :depends multiprocess: 
   :depends numpy: ``>=1.9``
   :depends pairix: 
   :depends pandas: 
   :depends pyfaidx: 
   :depends pysam: ``>0.8``
   :depends python: 
   :depends pyyaml: 
   :depends scipy: 
   :depends simplejson: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cooler

   and update with::

      conda update cooler

   or use the docker container::

      docker pull quay.io/biocontainers/cooler:<tag>

   (see `cooler/tags`_ for valid values for ``<tag>``)


.. |downloads_cooler| image:: https://img.shields.io/conda/dn/bioconda/cooler.svg?style=flat
   :target: https://anaconda.org/bioconda/cooler
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