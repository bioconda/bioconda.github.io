:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfastx'
.. highlight: bash

pyfastx
=======

.. conda:recipe:: pyfastx
   :replaces_section_title:
   :noindex:

   pyfastx is a python module for fast random
   access to sequences from plain and gzipped
   FASTA\/Q file

   :homepage: https://github.com/lmdu/pyfastx
   :license: MIT
   :recipe: /`pyfastx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfastx/meta.yaml>`_

   


.. conda:package:: pyfastx

   |downloads_pyfastx| |docker_pyfastx|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.13-0</code>,  <code>0.6.12-0</code>,  <code>0.6.11-0</code>,  <code>0.6.10-0</code>,  <code>0.6.9-0</code>,  <code>0.6.8-0</code>,  <code>0.6.7-0</code>,  <code>0.6.6-0</code>,  <code>0.6.5-0</code>,  </span></summary>
      

      ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-0``,  ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfastx

   and update with::

      conda update pyfastx

   or use the docker container::

      docker pull quay.io/biocontainers/pyfastx:<tag>

   (see `pyfastx/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfastx| image:: https://img.shields.io/conda/dn/bioconda/pyfastx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfastx
   :alt:   (downloads)
.. |docker_pyfastx| image:: https://quay.io/repository/biocontainers/pyfastx/status
   :target: https://quay.io/repository/biocontainers/pyfastx
.. _`pyfastx/tags`: https://quay.io/repository/biocontainers/pyfastx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfastx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfastx/README.html