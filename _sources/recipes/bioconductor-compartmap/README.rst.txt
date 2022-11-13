:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compartmap'
.. highlight: bash

bioconductor-compartmap
=======================

.. conda:recipe:: bioconductor-compartmap
   :replaces_section_title:
   :noindex:

   Higher\-order chromatin domain inference in single cells from scRNA\-seq and scATAC\-seq

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/compartmap.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-compartmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap/meta.yaml>`_

   Compartmap performs direct inference of higher\-order chromatin from scRNA\-seq and scATAC\-seq. This package implements a James\-Stein estimator for computing single\-cell level higher\-order chromatin domains. Further\, we utilize random matrix theory as a method to de\-noise correlation matrices to achieve a similar \"plaid\-like\" patterning as observed in Hi\-C and scHi\-C data.


.. conda:package:: bioconductor-compartmap

   |downloads_bioconductor-compartmap| |docker_bioconductor-compartmap|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``

      

   
   :depends bioconductor-biocsingular: ``>=1.14.0,<1.15.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.20.0,<1.21.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-raggedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-reshape2: 
   :depends r-rmtstat: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compartmap

   and update with::

      conda update bioconductor-compartmap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compartmap:<tag>

   (see `bioconductor-compartmap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compartmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compartmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compartmap
   :alt:   (downloads)
.. |docker_bioconductor-compartmap| image:: https://quay.io/repository/biocontainers/bioconductor-compartmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compartmap
.. _`bioconductor-compartmap/tags`: https://quay.io/repository/biocontainers/bioconductor-compartmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compartmap";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compartmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compartmap/README.html