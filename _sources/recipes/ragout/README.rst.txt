:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ragout'
.. highlight: bash

ragout
======

.. conda:recipe:: ragout
   :replaces_section_title:
   :noindex:

   Chromosome\-level scaffolding using multiple references

   :homepage: https://github.com/fenderglass/Ragout
   :license: GPLv3
   :recipe: /`ragout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragout/meta.yaml>`_

   


.. conda:package:: ragout

   |downloads_ragout| |docker_ragout|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-2</code>,  <code>2.3-1</code>,  <code>2.3-0</code>,  <code>2.2-5</code>,  <code>2.1.1-5</code>,  <code>2.1-3</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  <code>2.0-1</code>,  </span></summary>
      

      ``2.3-2``,  ``2.3-1``,  ``2.3-0``,  ``2.2-5``,  ``2.1.1-5``,  ``2.1-3``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends decorator: ``4.3.0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends networkx: ``2.2``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends setuptools: 
   :depends sibelia: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ragout

   and update with::

      conda update ragout

   or use the docker container::

      docker pull quay.io/biocontainers/ragout:<tag>

   (see `ragout/tags`_ for valid values for ``<tag>``)


.. |downloads_ragout| image:: https://img.shields.io/conda/dn/bioconda/ragout.svg?style=flat
   :target: https://anaconda.org/bioconda/ragout
   :alt:   (downloads)
.. |docker_ragout| image:: https://quay.io/repository/biocontainers/ragout/status
   :target: https://quay.io/repository/biocontainers/ragout
.. _`ragout/tags`: https://quay.io/repository/biocontainers/ragout?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ragout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ragout/README.html