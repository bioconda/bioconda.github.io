:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopolish'
.. highlight: bash

nanopolish
==========

.. conda:recipe:: nanopolish
   :replaces_section_title:
   :noindex:

   Signal\-level algorithms for MinION data.

   :homepage: https://github.com/jts/nanopolish
   :license: MIT
   :recipe: /`nanopolish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolish/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`nanopolish_eventalign`

   


.. conda:package:: nanopolish

   |downloads_nanopolish| |docker_nanopolish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.2-2</code>,  <code>0.13.2-1</code>,  <code>0.13.2-0</code>,  <code>0.13.1-0</code>,  <code>0.13.0-0</code>,  <code>0.12.5-2</code>,  <code>0.12.5-1</code>,  <code>0.12.5-0</code>,  <code>0.12.4-0</code>,  </span></summary>
      

      ``0.13.2-2``,  ``0.13.2-1``,  ``0.13.2-0``,  ``0.13.1-0``,  ``0.13.0-0``,  ``0.12.5-2``,  ``0.12.5-1``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.0-0``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.9.2-5``,  ``0.9.2-4``,  ``0.9.2-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.5-4``,  ``0.8.5-3``,  ``0.8.1-3``,  ``0.7.1-3``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.6.0.dev-0``,  ``0.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bwa: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends eigen: 
   :depends hdf5: ``1.8.18``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libcurl: ``>=7.71.1,<8.0a0``
   :depends libdeflate: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends minimap2: 
   :depends ncurses: ``>=6.2,<6.3.0a0``
   :depends openmp: 
   :depends python: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanopolish

   and update with::

      conda update nanopolish

   or use the docker container::

      docker pull quay.io/biocontainers/nanopolish:<tag>

   (see `nanopolish/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopolish| image:: https://img.shields.io/conda/dn/bioconda/nanopolish.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopolish
   :alt:   (downloads)
.. |docker_nanopolish| image:: https://quay.io/repository/biocontainers/nanopolish/status
   :target: https://quay.io/repository/biocontainers/nanopolish
.. _`nanopolish/tags`: https://quay.io/repository/biocontainers/nanopolish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolish/README.html