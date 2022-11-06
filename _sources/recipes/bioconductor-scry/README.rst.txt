:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scry'
.. highlight: bash

bioconductor-scry
=================

.. conda:recipe:: bioconductor-scry
   :replaces_section_title:
   :noindex:

   Small\-Count Analysis Methods for High\-Dimensional Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/scry.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scry/meta.yaml>`_

   Many modern biological datasets consist of small counts that are not well fit by standard linear\-Gaussian methods such as principal component analysis. This package provides implementations of count\-based feature selection and dimension reduction algorithms. These methods can be used to facilitate unsupervised analysis of any high\-dimensional data such as single\-cell RNA\-seq.


.. conda:package:: bioconductor-scry

   |downloads_bioconductor-scry| |docker_bioconductor-scry|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocsingular: ``>=1.14.0,<1.15.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-hdf5array: ``>=1.26.0,<1.27.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-glmpca: ``>=0.2.0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scry

   and update with::

      conda update bioconductor-scry

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scry:<tag>

   (see `bioconductor-scry/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scry| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scry.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scry
   :alt:   (downloads)
.. |docker_bioconductor-scry| image:: https://quay.io/repository/biocontainers/bioconductor-scry/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scry
.. _`bioconductor-scry/tags`: https://quay.io/repository/biocontainers/bioconductor-scry?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scry";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scry/README.html