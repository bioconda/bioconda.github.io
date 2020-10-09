:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svim'
.. highlight: bash

svim
====

.. conda:recipe:: svim
   :replaces_section_title:
   :noindex:

   SVIM is a structural variant caller for long reads.

   :homepage: https://github.com/eldariont/svim
   :license: GPL / GPL-3.0
   :recipe: /`svim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svim/meta.yaml>`_

   


.. conda:package:: svim

   |downloads_svim| |docker_svim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends networkx: 
   :depends ngmlr: 
   :depends numpy: 
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svim

   and update with::

      conda update svim

   or use the docker container::

      docker pull quay.io/biocontainers/svim:<tag>

   (see `svim/tags`_ for valid values for ``<tag>``)


.. |downloads_svim| image:: https://img.shields.io/conda/dn/bioconda/svim.svg?style=flat
   :target: https://anaconda.org/bioconda/svim
   :alt:   (downloads)
.. |docker_svim| image:: https://quay.io/repository/biocontainers/svim/status
   :target: https://quay.io/repository/biocontainers/svim
.. _`svim/tags`: https://quay.io/repository/biocontainers/svim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svim/README.html