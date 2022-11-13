:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mbpcr'
.. highlight: bash

bioconductor-mbpcr
==================

.. conda:recipe:: bioconductor-mbpcr
   :replaces_section_title:
   :noindex:

   Bayesian Piecewise Constant Regression for DNA copy number estimation

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/mBPCR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mbpcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbpcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mbpcr/meta.yaml>`_

   It contains functions for estimating the DNA copy number profile using mBPCR with the aim of detecting regions with copy number changes.


.. conda:package:: bioconductor-mbpcr

   |downloads_bioconductor-mbpcr| |docker_bioconductor-mbpcr|

   :versions:
      
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.36.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-gwastools: ``>=1.44.0,<1.45.0``
   :depends bioconductor-oligoclasses: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mbpcr

   and update with::

      conda update bioconductor-mbpcr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mbpcr:<tag>

   (see `bioconductor-mbpcr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mbpcr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mbpcr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mbpcr
   :alt:   (downloads)
.. |docker_bioconductor-mbpcr| image:: https://quay.io/repository/biocontainers/bioconductor-mbpcr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mbpcr
.. _`bioconductor-mbpcr/tags`: https://quay.io/repository/biocontainers/bioconductor-mbpcr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mbpcr";
        var versions = ["1.52.0","1.48.0","1.46.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mbpcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mbpcr/README.html