:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medaka'
.. highlight: bash

medaka
======

.. conda:recipe:: medaka
   :replaces_section_title:
   :noindex:

   Neural network sequence error correction.

   :homepage: https://github.com/nanoporetech/medaka
   :documentation: https://nanoporetech.github.io/medaka/index.html
   
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`medaka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medaka/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`medaka_consensus`

   


.. conda:package:: medaka

   |downloads_medaka| |docker_medaka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.12.1-0``,  ``0.11.5-1``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-1``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.2-0``,  ``0.6.0-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.9``
   :depends biopython: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cffi: 
   :depends h5py: 
   :depends htslib: ``>=1.11,<1.12.0a0``
   :depends intervaltree: ``>=3.0.0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends mappy: 
   :depends minimap2: ``>=2.17``
   :depends numpy: 
   :depends ont-fast5-api: 
   :depends parasail-python: 
   :depends pysam: ``>=0.16.0.1``
   :depends pyspoa: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python-edlib: 
   :depends python_abi: ``3.6.* *_cp36m``
   :depends requests: 
   :depends samtools: ``>=1.9``
   :depends tensorflow: ``>=2.2.0``
   :depends whatshap: ``>=0.18``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install medaka

   and update with::

      conda update medaka

   or use the docker container::

      docker pull quay.io/biocontainers/medaka:<tag>

   (see `medaka/tags`_ for valid values for ``<tag>``)


.. |downloads_medaka| image:: https://img.shields.io/conda/dn/bioconda/medaka.svg?style=flat
   :target: https://anaconda.org/bioconda/medaka
   :alt:   (downloads)
.. |docker_medaka| image:: https://quay.io/repository/biocontainers/medaka/status
   :target: https://quay.io/repository/biocontainers/medaka
.. _`medaka/tags`: https://quay.io/repository/biocontainers/medaka?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medaka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medaka/README.html