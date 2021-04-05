:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomeinfodbdata'
.. highlight: bash

bioconductor-genomeinfodbdata
=============================

.. conda:recipe:: bioconductor-genomeinfodbdata
   :replaces_section_title:
   :noindex:

   Species and taxonomy ID look up tables used by GenomeInfoDb

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/GenomeInfoDbData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomeinfodbdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodbdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomeinfodbdata/meta.yaml>`_

   Files for mapping between NCBI taxonomy ID and species. Used by functions in the GenomeInfoDb package.


.. conda:package:: bioconductor-genomeinfodbdata

   |downloads_bioconductor-genomeinfodbdata| |docker_bioconductor-genomeinfodbdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-2</code>,  <code>1.2.4-1</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``1.2.4-2``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.99.0-1``,  ``0.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.76.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomeinfodbdata

   and update with::

      conda update bioconductor-genomeinfodbdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomeinfodbdata:<tag>

   (see `bioconductor-genomeinfodbdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomeinfodbdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomeinfodbdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomeinfodbdata
   :alt:   (downloads)
.. |docker_bioconductor-genomeinfodbdata| image:: https://quay.io/repository/biocontainers/bioconductor-genomeinfodbdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomeinfodbdata
.. _`bioconductor-genomeinfodbdata/tags`: https://quay.io/repository/biocontainers/bioconductor-genomeinfodbdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomeinfodbdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomeinfodbdata/README.html