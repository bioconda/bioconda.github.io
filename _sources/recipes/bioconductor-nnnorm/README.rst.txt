:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nnnorm'
.. highlight: bash

bioconductor-nnnorm
===================

.. conda:recipe:: bioconductor-nnnorm
   :replaces_section_title:
   :noindex:

   Spatial and intensity based normalization of cDNA microarray data based on robust neural nets

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/nnNorm.html
   :license: LGPL
   :recipe: /`bioconductor-nnnorm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnnorm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nnnorm/meta.yaml>`_
   :links: biotools: :biotools:`nnnorm`, doi: :doi:`10.1093/bioinformatics/bti397`

   This package allows to detect and correct for spatial and intensity biases with two\-channel microarray data. The normalization method implemented in this package is based on robust neural networks fitting.


.. conda:package:: bioconductor-nnnorm

   |downloads_bioconductor-nnnorm| |docker_bioconductor-nnnorm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.62.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-1</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-1</code>,  <code>2.48.0-0</code>,  </span></summary>
      

      ``2.62.0-0``,  ``2.58.0-0``,  ``2.56.0-0``,  ``2.54.0-1``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-marray: ``>=1.76.0,<1.77.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-nnet: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nnnorm

   and update with::

      conda update bioconductor-nnnorm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nnnorm:<tag>

   (see `bioconductor-nnnorm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nnnorm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nnnorm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nnnorm
   :alt:   (downloads)
.. |docker_bioconductor-nnnorm| image:: https://quay.io/repository/biocontainers/bioconductor-nnnorm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nnnorm
.. _`bioconductor-nnnorm/tags`: https://quay.io/repository/biocontainers/bioconductor-nnnorm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nnnorm";
        var versions = ["2.62.0","2.58.0","2.56.0","2.54.0","2.54.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nnnorm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nnnorm/README.html