:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-masigpro'
.. highlight: bash

bioconductor-masigpro
=====================

.. conda:recipe:: bioconductor-masigpro
   :replaces_section_title:
   :noindex:

   Significant Gene Expression Profile Differences in Time Course Gene Expression Data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/maSigPro.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-masigpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-masigpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-masigpro/meta.yaml>`_
   :links: biotools: :biotools:`masigpro`, doi: :doi:`10.1093/bioinformatics/btu333`

   maSigPro is a regression based approach to find genes for which there are significant gene expression profile differences between experimental groups in time course microarray and RNA\-Seq experiments.


.. conda:package:: bioconductor-masigpro

   |downloads_bioconductor-masigpro| |docker_bioconductor-masigpro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.49.4-0``,  ``1.49.3-0``,  ``1.49.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-venn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-masigpro

   and update with::

      conda update bioconductor-masigpro

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-masigpro:<tag>

   (see `bioconductor-masigpro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-masigpro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-masigpro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-masigpro
   :alt:   (downloads)
.. |docker_bioconductor-masigpro| image:: https://quay.io/repository/biocontainers/bioconductor-masigpro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-masigpro
.. _`bioconductor-masigpro/tags`: https://quay.io/repository/biocontainers/bioconductor-masigpro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-masigpro";
        var versions = ["1.72.0","1.70.0","1.66.0","1.64.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-masigpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-masigpro/README.html