:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pengls'
.. highlight: bash

bioconductor-pengls
===================

.. conda:recipe:: bioconductor-pengls
   :replaces_section_title:
   :noindex:

   Fit Penalised Generalised Least Squares models

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/pengls.html
   :license: GPL-2
   :recipe: /`bioconductor-pengls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pengls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pengls/meta.yaml>`_

   Combine generalised least squares methodology from the nlme package for dealing with autocorrelation with penalised least squares methods from the glmnet package to deal with high dimensionality. This pengls packages glues them together through an iterative loop. The resulting method is applicable to high dimensional datasets that exhibit autocorrelation\, such as spatial or temporal data.


.. conda:package:: bioconductor-pengls

   |downloads_bioconductor-pengls| |docker_bioconductor-pengls|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glmnet: 
   :depends r-nlme: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pengls

   and update with::

      conda update bioconductor-pengls

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pengls:<tag>

   (see `bioconductor-pengls/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pengls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pengls.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pengls
   :alt:   (downloads)
.. |docker_bioconductor-pengls| image:: https://quay.io/repository/biocontainers/bioconductor-pengls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pengls
.. _`bioconductor-pengls/tags`: https://quay.io/repository/biocontainers/bioconductor-pengls?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pengls";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pengls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pengls/README.html