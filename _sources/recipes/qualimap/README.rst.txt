:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qualimap'
.. highlight: bash

qualimap
========

.. conda:recipe:: qualimap
   :replaces_section_title:
   :noindex:

   Quality control of alignment sequencing data and its derivatives like feature counts

   :homepage: http://qualimap.bioinfo.cipf.es/
   :license: GPLv2
   :recipe: /`qualimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualimap/meta.yaml>`_
   :links: biotools: :biotools:`qualimap`

   


.. conda:package:: qualimap

   |downloads_qualimap| |docker_qualimap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.2d-2</code>,  <code>2.2.2d-1</code>,  <code>2.2.2d-0</code>,  <code>2.2.2c-1</code>,  <code>2.2.2c-0</code>,  <code>2.2.2b-1</code>,  <code>2.2.2b-0</code>,  <code>2.2.2a-3</code>,  <code>2.2.2a-2</code>,  </span></summary>
      

      ``2.2.2d-2``,  ``2.2.2d-1``,  ``2.2.2d-0``,  ``2.2.2c-1``,  ``2.2.2c-0``,  ``2.2.2b-1``,  ``2.2.2b-0``,  ``2.2.2a-3``,  ``2.2.2a-2``,  ``2.2.2a-1``,  ``2.2.2a-0``,  ``2.2-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.1-1``,  ``2.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-noiseq: 
   :depends bioconductor-rsamtools: 
   :depends bioconductor-rtracklayer: 
   :depends fonts-conda-ecosystem: 
   :depends openjdk: 
   :depends r-optparse: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qualimap

   and update with::

      conda update qualimap

   or use the docker container::

      docker pull quay.io/biocontainers/qualimap:<tag>

   (see `qualimap/tags`_ for valid values for ``<tag>``)


.. |downloads_qualimap| image:: https://img.shields.io/conda/dn/bioconda/qualimap.svg?style=flat
   :target: https://anaconda.org/bioconda/qualimap
   :alt:   (downloads)
.. |docker_qualimap| image:: https://quay.io/repository/biocontainers/qualimap/status
   :target: https://quay.io/repository/biocontainers/qualimap
.. _`qualimap/tags`: https://quay.io/repository/biocontainers/qualimap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qualimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qualimap/README.html