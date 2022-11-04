:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-infinityflow'
.. highlight: bash

bioconductor-infinityflow
=========================

.. conda:recipe:: bioconductor-infinityflow
   :replaces_section_title:
   :noindex:

   Augmenting Massively Parallel Cytometry Experiments Using Multivariate Non\-Linear Regressions

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/infinityFlow.html
   :license: GPL-3
   :recipe: /`bioconductor-infinityflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-infinityflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-infinityflow/meta.yaml>`_

   Pipeline to analyze and merge data files produced by BioLegend\'s LEGENDScreen or BD Human Cell Surface Marker Screening Panel \(BD Lyoplates\).


.. conda:package:: bioconductor-infinityflow

   |downloads_bioconductor-infinityflow| |docker_bioconductor-infinityflow|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-flowcore: ``>=2.10.0,<2.11.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-generics: 
   :depends r-gtools: 
   :depends r-matlab: 
   :depends r-pbapply: 
   :depends r-png: 
   :depends r-raster: 
   :depends r-uwot: 
   :depends r-xgboost: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-infinityflow

   and update with::

      conda update bioconductor-infinityflow

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-infinityflow:<tag>

   (see `bioconductor-infinityflow/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-infinityflow| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-infinityflow.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-infinityflow
   :alt:   (downloads)
.. |docker_bioconductor-infinityflow| image:: https://quay.io/repository/biocontainers/bioconductor-infinityflow/status
   :target: https://quay.io/repository/biocontainers/bioconductor-infinityflow
.. _`bioconductor-infinityflow/tags`: https://quay.io/repository/biocontainers/bioconductor-infinityflow?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-infinityflow";
        var versions = ["1.8.0","1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-infinityflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-infinityflow/README.html