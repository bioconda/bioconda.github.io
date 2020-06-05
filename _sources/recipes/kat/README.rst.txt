:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kat'
.. highlight: bash

kat
===

.. conda:recipe:: kat
   :replaces_section_title:
   :noindex:

   KAT is a suite of tools that analyse jellyfish hashes or sequence files \(fasta or fastq\) using kmer counts

   :homepage: https://github.com/TGAC/KAT
   :license: GPL3
   :recipe: /`kat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kat/meta.yaml>`_
   :links: biotools: :biotools:`KAT`

   


.. conda:package:: kat

   |downloads_kat| |docker_kat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.2-0</code>,  <code>2.4.1-3</code>,  <code>2.4.1-2</code>,  <code>2.4.1-1</code>,  <code>2.4.0-3</code>,  <code>2.4.0-2</code>,  <code>2.4.0-1</code>,  <code>2.3.4-1</code>,  <code>2.3.4-0</code>,  </span></summary>
      

      ``2.4.2-0``,  ``2.4.1-3``,  ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.0.8-4``,  ``2.0.8-3``,  ``2.0.8-2``,  ``2.0.8-1``,  ``2.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends matplotlib: 
   :depends numpy: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends scipy: 
   :depends tabulate: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kat

   and update with::

      conda update kat

   or use the docker container::

      docker pull quay.io/biocontainers/kat:<tag>

   (see `kat/tags`_ for valid values for ``<tag>``)


.. |downloads_kat| image:: https://img.shields.io/conda/dn/bioconda/kat.svg?style=flat
   :target: https://anaconda.org/bioconda/kat
   :alt:   (downloads)
.. |docker_kat| image:: https://quay.io/repository/biocontainers/kat/status
   :target: https://quay.io/repository/biocontainers/kat
.. _`kat/tags`: https://quay.io/repository/biocontainers/kat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kat/README.html