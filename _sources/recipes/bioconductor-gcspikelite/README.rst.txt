:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gcspikelite'
.. highlight: bash

bioconductor-gcspikelite
========================

.. conda:recipe:: bioconductor-gcspikelite
   :replaces_section_title:
   :noindex:

   Spike\-in data for GC\/MS data and methods within flagme

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/gcspikelite.html
   :license: LGPL
   :recipe: /`bioconductor-gcspikelite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcspikelite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gcspikelite/meta.yaml>`_

   Spike\-in data for GC\/MS data and methods within flagme


.. conda:package:: bioconductor-gcspikelite

   |downloads_bioconductor-gcspikelite| |docker_bioconductor-gcspikelite|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gcspikelite

   and update with::

      conda update bioconductor-gcspikelite

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gcspikelite:<tag>

   (see `bioconductor-gcspikelite/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gcspikelite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gcspikelite.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gcspikelite
   :alt:   (downloads)
.. |docker_bioconductor-gcspikelite| image:: https://quay.io/repository/biocontainers/bioconductor-gcspikelite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gcspikelite
.. _`bioconductor-gcspikelite/tags`: https://quay.io/repository/biocontainers/bioconductor-gcspikelite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gcspikelite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gcspikelite/README.html