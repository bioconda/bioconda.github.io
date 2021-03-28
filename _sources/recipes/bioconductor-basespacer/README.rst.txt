:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basespacer'
.. highlight: bash

bioconductor-basespacer
=======================

.. conda:recipe:: bioconductor-basespacer
   :replaces_section_title:
   :noindex:

   R SDK for BaseSpace RESTful API

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/BaseSpaceR.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-basespacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basespacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basespacer/meta.yaml>`_
   :links: biotools: :biotools:`basespacer`, doi: :doi:`10.1038/nmeth.3252`

   A rich R interface to Illumina\'s BaseSpace cloud computing environment\, enabling the fast development of data analysis and visualisation tools.


.. conda:package:: bioconductor-basespacer

   |downloads_bioconductor-basespacer| |docker_bioconductor-basespacer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-basespacer

   and update with::

      conda update bioconductor-basespacer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-basespacer:<tag>

   (see `bioconductor-basespacer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-basespacer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basespacer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basespacer
   :alt:   (downloads)
.. |docker_bioconductor-basespacer| image:: https://quay.io/repository/biocontainers/bioconductor-basespacer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basespacer
.. _`bioconductor-basespacer/tags`: https://quay.io/repository/biocontainers/bioconductor-basespacer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basespacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basespacer/README.html