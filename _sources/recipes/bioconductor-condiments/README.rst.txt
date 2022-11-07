:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-condiments'
.. highlight: bash

bioconductor-condiments
=======================

.. conda:recipe:: bioconductor-condiments
   :replaces_section_title:
   :noindex:

   Differential Topology\, Progression and Differentiation

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/condiments.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-condiments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condiments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-condiments/meta.yaml>`_

   This package encapsulate many functions to conduct a differential topology analysis. It focuses on analyzing an \'omic dataset with multiple conditions. While the package is mostly geared toward scRNASeq\, it does not place any restriction on the actual input format.


.. conda:package:: bioconductor-condiments

   |downloads_bioconductor-condiments| |docker_bioconductor-condiments|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-distinct: ``>=1.10.0,<1.11.0``
   :depends bioconductor-singlecellexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-slingshot: ``>=2.6.0,<2.7.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-trajectoryutils: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: ``>=1.0``
   :depends r-ecume: ``>=0.9.1``
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-mgcv: 
   :depends r-pbapply: 
   :depends r-rann: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-condiments

   and update with::

      conda update bioconductor-condiments

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-condiments:<tag>

   (see `bioconductor-condiments/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-condiments| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-condiments.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-condiments
   :alt:   (downloads)
.. |docker_bioconductor-condiments| image:: https://quay.io/repository/biocontainers/bioconductor-condiments/status
   :target: https://quay.io/repository/biocontainers/bioconductor-condiments
.. _`bioconductor-condiments/tags`: https://quay.io/repository/biocontainers/bioconductor-condiments?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-condiments";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-condiments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-condiments/README.html