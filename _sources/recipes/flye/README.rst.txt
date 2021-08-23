:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flye'
.. highlight: bash

flye
====

.. conda:recipe:: flye
   :replaces_section_title:
   :noindex:

   Fast and accurate de novo assembler for single molecule sequencing reads

   :homepage: https://github.com/fenderglass/Flye/
   :license: BSD-3-Clause
   :recipe: /`flye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye/meta.yaml>`_

   


.. conda:package:: flye

   |downloads_flye| |docker_flye|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9-0</code>,  <code>2.8.3-1</code>,  <code>2.8.3-0</code>,  <code>2.8.2-0</code>,  <code>2.8.1-1</code>,  <code>2.8.1-0</code>,  <code>2.8-0</code>,  <code>2.7.1-2</code>,  <code>2.7.1-1</code>,  </span></summary>
      

      ``2.9-0``,  ``2.8.3-1``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.8-0``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-0``,  ``2.3.7-0``,  ``2.3.6-3``,  ``2.3.5-3``,  ``2.3.4-2``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends setuptools: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flye

   and update with::

      conda update flye

   or use the docker container::

      docker pull quay.io/biocontainers/flye:<tag>

   (see `flye/tags`_ for valid values for ``<tag>``)


.. |downloads_flye| image:: https://img.shields.io/conda/dn/bioconda/flye.svg?style=flat
   :target: https://anaconda.org/bioconda/flye
   :alt:   (downloads)
.. |docker_flye| image:: https://quay.io/repository/biocontainers/flye/status
   :target: https://quay.io/repository/biocontainers/flye
.. _`flye/tags`: https://quay.io/repository/biocontainers/flye?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flye/README.html