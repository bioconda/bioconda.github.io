:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-csdr'
.. highlight: bash

bioconductor-csdr
=================

.. conda:recipe:: bioconductor-csdr
   :replaces_section_title:
   :noindex:

   Differential gene co\-expression

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/csdR.html
   :license: GPL-3
   :recipe: /`bioconductor-csdr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csdr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-csdr/meta.yaml>`_

   This package contains functionality to run differential gene co\-expression across two different conditions. The algorithm is inspired by Voigt et al. 2017 and finds Conserved\, Specific and Differentiated genes \(hence the name CSD\). This package include efficient and variance calculation by bootstrapping and Welford\'s algorithm.


.. conda:package:: bioconductor-csdr

   |downloads_bioconductor-csdr| |docker_bioconductor-csdr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-glue: 
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :depends r-rhpcblasctl: 
   :depends r-wgcna: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-csdr

   and update with::

      conda update bioconductor-csdr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-csdr:<tag>

   (see `bioconductor-csdr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-csdr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-csdr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-csdr
   :alt:   (downloads)
.. |docker_bioconductor-csdr| image:: https://quay.io/repository/biocontainers/bioconductor-csdr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-csdr
.. _`bioconductor-csdr/tags`: https://quay.io/repository/biocontainers/bioconductor-csdr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-csdr";
        var versions = ["1.4.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-csdr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-csdr/README.html