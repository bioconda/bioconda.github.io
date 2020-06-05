:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanofilt'
.. highlight: bash

nanofilt
========

.. conda:recipe:: nanofilt
   :replaces_section_title:
   :noindex:

   Filtering and trimming of Oxford Nanopore Sequencing data

   :homepage: https://github.com/wdecoster/nanofilt
   :license: MIT / MIT License
   :recipe: /`nanofilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanofilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanofilt/meta.yaml>`_

   


.. conda:package:: nanofilt

   |downloads_nanofilt| |docker_nanofilt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.1-0</code>,  <code>1.9.2-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.9.2-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends nanoget: ``>=0.15.0``
   :depends nanomath: ``>=0.13.3``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanofilt

   and update with::

      conda update nanofilt

   or use the docker container::

      docker pull quay.io/biocontainers/nanofilt:<tag>

   (see `nanofilt/tags`_ for valid values for ``<tag>``)


.. |downloads_nanofilt| image:: https://img.shields.io/conda/dn/bioconda/nanofilt.svg?style=flat
   :target: https://anaconda.org/bioconda/nanofilt
   :alt:   (downloads)
.. |docker_nanofilt| image:: https://quay.io/repository/biocontainers/nanofilt/status
   :target: https://quay.io/repository/biocontainers/nanofilt
.. _`nanofilt/tags`: https://quay.io/repository/biocontainers/nanofilt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanofilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanofilt/README.html