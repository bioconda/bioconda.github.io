:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mistyr'
.. highlight: bash

bioconductor-mistyr
===================

.. conda:recipe:: bioconductor-mistyr
   :replaces_section_title:
   :noindex:

   Multiview Intercellular SpaTial modeling framework

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/mistyR.html
   :license: GPL-3
   :recipe: /`bioconductor-mistyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mistyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mistyr/meta.yaml>`_

   mistyR is an implementation of the Multiview Intercellular SpaTialmodeling framework \(MISTy\). MISTy is an explainable machine learning framework for knowledge extraction and analysis of single\-cell\, highly multiplexed\, spatially resolved data. MISTy facilitates an in\-depth understanding of marker interactions by profiling the intra\- and intercellular relationships. MISTy is a flexible framework able to process a custom number of views. Each of these views can describe a different spatial context\, i.e.\, define a relationship among the observed expressions of the markers\, such as intracellular regulation or paracrine regulation\, but also\, the views can also capture cell\-type specific relationships\, capture relations between functional footprints or focus on relations between different anatomical regions. Each MISTy view is considered as a potential source of variability in the measured marker expressions. Each MISTy view is then analyzed for its contribution to the total expression of each marker and is explained in terms of the interactions with other measurements that led to the observed contribution.


.. conda:package:: bioconductor-mistyr

   |downloads_bioconductor-mistyr| |docker_bioconductor-mistyr|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-deldir: 
   :depends r-digest: 
   :depends r-distances: 
   :depends r-dplyr: 
   :depends r-filelock: 
   :depends r-furrr: ``>=0.2.0``
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-purrr: 
   :depends r-r.utils: 
   :depends r-ranger: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-rlist: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-withr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mistyr

   and update with::

      conda update bioconductor-mistyr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mistyr:<tag>

   (see `bioconductor-mistyr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mistyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mistyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mistyr
   :alt:   (downloads)
.. |docker_bioconductor-mistyr| image:: https://quay.io/repository/biocontainers/bioconductor-mistyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mistyr
.. _`bioconductor-mistyr/tags`: https://quay.io/repository/biocontainers/bioconductor-mistyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mistyr";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mistyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mistyr/README.html