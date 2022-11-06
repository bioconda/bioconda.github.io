:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-traviz'
.. highlight: bash

bioconductor-traviz
===================

.. conda:recipe:: bioconductor-traviz
   :replaces_section_title:
   :noindex:

   Trajectory functions for visualization and interpretation.

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/traviz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-traviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traviz/meta.yaml>`_

   traviz provides a suite of functions to plot trajectory related objects from Bioconductor packages. It allows plotting trajectories in reduced dimension\, as well as averge gene expression smoothers as a function of pseudotime. Asides from general utility functions\, traviz also allows plotting trajectories estimated by Slingshot\, as well as smoothers estimated by tradeSeq. Furthermore\, it allows for visualization of Slingshot trajectories using ggplot2.


.. conda:package:: bioconductor-traviz

   |downloads_bioconductor-traviz| |docker_bioconductor-traviz|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-slingshot: ``>=2.6.0,<2.7.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggplot2: 
   :depends r-mgcv: 
   :depends r-princurve: 
   :depends r-rcolorbrewer: 
   :depends r-rgl: 
   :depends r-viridis: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-traviz

   and update with::

      conda update bioconductor-traviz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-traviz:<tag>

   (see `bioconductor-traviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-traviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-traviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-traviz
   :alt:   (downloads)
.. |docker_bioconductor-traviz| image:: https://quay.io/repository/biocontainers/bioconductor-traviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-traviz
.. _`bioconductor-traviz/tags`: https://quay.io/repository/biocontainers/bioconductor-traviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-traviz";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-traviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-traviz/README.html