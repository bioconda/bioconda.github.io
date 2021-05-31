:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aseb'
.. highlight: bash

bioconductor-aseb
=================

.. conda:recipe:: bioconductor-aseb
   :replaces_section_title:
   :noindex:

   Predict Acetylated Lysine Sites

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ASEB.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-aseb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aseb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aseb/meta.yaml>`_
   :links: biotools: :biotools:`aseb`, doi: :doi:`10.1093/nar/gks437`

   ASEB is an R package to predict lysine sites that can be acetylated by a specific KAT\-family.


.. conda:package:: bioconductor-aseb

   |downloads_bioconductor-aseb| |docker_bioconductor-aseb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aseb

   and update with::

      conda update bioconductor-aseb

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aseb:<tag>

   (see `bioconductor-aseb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aseb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aseb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aseb
   :alt:   (downloads)
.. |docker_bioconductor-aseb| image:: https://quay.io/repository/biocontainers/bioconductor-aseb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aseb
.. _`bioconductor-aseb/tags`: https://quay.io/repository/biocontainers/bioconductor-aseb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aseb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aseb/README.html