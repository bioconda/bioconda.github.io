:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cyvcf2'
.. highlight: bash

cyvcf2
======

.. conda:recipe:: cyvcf2
   :replaces_section_title:
   :noindex:

   A cython wrapper around htslib built for fast parsing of Variant Call Format \(VCF\) files

   :homepage: https://github.com/brentp/cyvcf2
   :license: MIT
   :recipe: /`cyvcf2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2/meta.yaml>`_

   


.. conda:package:: cyvcf2

   |downloads_cyvcf2| |docker_cyvcf2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.20.9-0</code>,  <code>0.20.8-0</code>,  <code>0.20.7-0</code>,  <code>0.20.6-0</code>,  <code>0.20.5-0</code>,  <code>0.20.4-1</code>,  <code>0.20.4-0</code>,  <code>0.20.3-0</code>,  <code>0.20.1-1</code>,  </span></summary>
      

      ``0.20.9-0``,  ``0.20.8-0``,  ``0.20.7-0``,  ``0.20.6-0``,  ``0.20.5-0``,  ``0.20.4-1``,  ``0.20.4-0``,  ``0.20.3-0``,  ``0.20.1-1``,  ``0.20.1-0``,  ``0.20.0-1``,  ``0.20.0-0``,  ``0.11.7-0``,  ``0.11.6-0``,  ``0.11.5-1``,  ``0.11.5-0``,  ``0.11.4-0``,  ``0.11.2-0``,  ``0.10.10-0``,  ``0.10.8-2``,  ``0.10.8-1``,  ``0.10.8-0``,  ``0.10.0-0``,  ``0.8.4-4``,  ``0.8.4-3``,  ``0.8.4-2``,  ``0.8.4-1``,  ``0.8.4-0``,  ``0.8.0-0``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.6.6a-0``,  ``0.6.5-0``,  ``0.5.5-0``,  ``0.5.3-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.8-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends coloredlogs: 
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libcurl: ``>=7.71.1,<8.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends numpy: 
   :depends openssl: ``>=1.1.1h,<1.1.2a``
   :depends pathlib2: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cyvcf2

   and update with::

      conda update cyvcf2

   or use the docker container::

      docker pull quay.io/biocontainers/cyvcf2:<tag>

   (see `cyvcf2/tags`_ for valid values for ``<tag>``)


.. |downloads_cyvcf2| image:: https://img.shields.io/conda/dn/bioconda/cyvcf2.svg?style=flat
   :target: https://anaconda.org/bioconda/cyvcf2
   :alt:   (downloads)
.. |docker_cyvcf2| image:: https://quay.io/repository/biocontainers/cyvcf2/status
   :target: https://quay.io/repository/biocontainers/cyvcf2
.. _`cyvcf2/tags`: https://quay.io/repository/biocontainers/cyvcf2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyvcf2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyvcf2/README.html