:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dunovo'
.. highlight: bash

dunovo
======

.. conda:recipe:: dunovo
   :replaces_section_title:
   :noindex:

   Du Novo\: A pipeline for processing duplex sequencing data.

   :homepage: https://github.com/galaxyproject/dunovo
   :license: GPLv2
   :recipe: /`dunovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dunovo/meta.yaml>`_

   


.. conda:package:: dunovo

   |downloads_dunovo| |docker_dunovo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.15-3</code>,  <code>2.15-2</code>,  <code>2.15-1</code>,  <code>2.15-0</code>,  <code>2.14-0</code>,  <code>2.0.12-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  <code>2.0.6-0</code>,  </span></summary>
      

      ``2.15-3``,  ``2.15-2``,  ``2.15-1``,  ``2.15-0``,  ``2.14-0``,  ``2.0.12-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.6-0``,  ``0.8.1-0``,  ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.1-0``,  ``0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie: ``>=1.1.2``
   :depends gawk: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends mafft: ``7.221.*``
   :depends networkx: ``<2.0``
   :depends paste: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dunovo

   and update with::

      conda update dunovo

   or use the docker container::

      docker pull quay.io/biocontainers/dunovo:<tag>

   (see `dunovo/tags`_ for valid values for ``<tag>``)


.. |downloads_dunovo| image:: https://img.shields.io/conda/dn/bioconda/dunovo.svg?style=flat
   :target: https://anaconda.org/bioconda/dunovo
   :alt:   (downloads)
.. |docker_dunovo| image:: https://quay.io/repository/biocontainers/dunovo/status
   :target: https://quay.io/repository/biocontainers/dunovo
.. _`dunovo/tags`: https://quay.io/repository/biocontainers/dunovo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dunovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dunovo/README.html