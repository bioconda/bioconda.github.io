:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bumpymatrix'
.. highlight: bash

bioconductor-bumpymatrix
========================

.. conda:recipe:: bioconductor-bumpymatrix
   :replaces_section_title:
   :noindex:

   Bumpy Matrix of Non\-Scalar Objects

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/BumpyMatrix.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bumpymatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumpymatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bumpymatrix/meta.yaml>`_

   Implements the BumpyMatrix class and several subclasses for holding non\-scalar objects in each entry of the matrix. This is akin to a ragged array but the raggedness is in the third dimension\, much like a bumpy surface \- hence the name. Of particular interest is the BumpyDataFrameMatrix\, where each entry is a Bioconductor data frame. This allows us to naturally represent multivariate data in a format that is compatible with two\-dimensional containers like the SummarizedExperiment and MultiAssayExperiment objects.


.. conda:package:: bioconductor-bumpymatrix

   |downloads_bioconductor-bumpymatrix| |docker_bioconductor-bumpymatrix|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bumpymatrix

   and update with::

      conda update bioconductor-bumpymatrix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bumpymatrix:<tag>

   (see `bioconductor-bumpymatrix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bumpymatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bumpymatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bumpymatrix
   :alt:   (downloads)
.. |docker_bioconductor-bumpymatrix| image:: https://quay.io/repository/biocontainers/bioconductor-bumpymatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bumpymatrix
.. _`bioconductor-bumpymatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-bumpymatrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bumpymatrix";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bumpymatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bumpymatrix/README.html