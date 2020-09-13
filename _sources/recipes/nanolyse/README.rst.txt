:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanolyse'
.. highlight: bash

nanolyse
========

.. conda:recipe:: nanolyse
   :replaces_section_title:
   :noindex:

   Removing lambda DNA control reads from fastq dataset

   :homepage: https://github.com/wdecoster/NanoLyse
   :license: MIT / MIT
   :recipe: /`nanolyse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanolyse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanolyse/meta.yaml>`_

   


.. conda:package:: nanolyse

   |downloads_nanolyse| |docker_nanolyse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.1-0``,  ``0.4.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends mappy: ``>=2.2``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanolyse

   and update with::

      conda update nanolyse

   or use the docker container::

      docker pull quay.io/biocontainers/nanolyse:<tag>

   (see `nanolyse/tags`_ for valid values for ``<tag>``)


.. |downloads_nanolyse| image:: https://img.shields.io/conda/dn/bioconda/nanolyse.svg?style=flat
   :target: https://anaconda.org/bioconda/nanolyse
   :alt:   (downloads)
.. |docker_nanolyse| image:: https://quay.io/repository/biocontainers/nanolyse/status
   :target: https://quay.io/repository/biocontainers/nanolyse
.. _`nanolyse/tags`: https://quay.io/repository/biocontainers/nanolyse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanolyse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanolyse/README.html