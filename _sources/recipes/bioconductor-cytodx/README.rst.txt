:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytodx'
.. highlight: bash

bioconductor-cytodx
===================

.. conda:recipe:: bioconductor-cytodx
   :replaces_section_title:
   :noindex:

   Robust prediction of clinical outcomes using cytometry data without cell gating

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CytoDx.html
   :license: GPL-2
   :recipe: /`bioconductor-cytodx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytodx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytodx/meta.yaml>`_

   This package provides functions that predict clinical outcomes using single cell data \(such as flow cytometry data\, RNA single cell sequencing data\) without the requirement of cell gating or clustering.


.. conda:package:: bioconductor-cytodx

   |downloads_bioconductor-cytodx| |docker_bioconductor-cytodx|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends bioconductor-flowcore: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-glmnet: 
   :depends r-rpart: 
   :depends r-rpart.plot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytodx

   and update with::

      conda update bioconductor-cytodx

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytodx:<tag>

   (see `bioconductor-cytodx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytodx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytodx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytodx
   :alt:   (downloads)
.. |docker_bioconductor-cytodx| image:: https://quay.io/repository/biocontainers/bioconductor-cytodx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytodx
.. _`bioconductor-cytodx/tags`: https://quay.io/repository/biocontainers/bioconductor-cytodx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytodx";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytodx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytodx/README.html