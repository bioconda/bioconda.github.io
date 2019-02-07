.. title:: Package Recipe 'bioconductor-cytodx'
.. highlight: bash


bioconductor-cytodx
===================

.. conda:recipe:: bioconductor-cytodx
   :replaces_section_title:

   This package provides functions that predict clinical outcomes using single cell data \(such as flow cytometry data\, RNA single cell sequencing data\) without the requirement of cell gating or clustering.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CytoDx.html
   :license: GPL-2
   :recipe: /`bioconductor-cytodx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytodx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytodx/meta.yaml>`_

   


.. conda:package:: bioconductor-cytodx

   |downloads_bioconductor-cytodx| |docker_bioconductor-cytodx|

   :versions: 1.2.1

   :depends: :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-doparallel`  :conda:package:`r-dplyr`  :conda:package:`r-glmnet`  :conda:package:`r-rpart`  :conda:package:`r-rpart.plot`  

   :required~by: |required_by_bioconductor-cytodx|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cytodx

   and update with::

      conda update bioconductor-cytodx

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cytodx


.. |required_by_bioconductor-cytodx| conda:required_by:: bioconductor-cytodx
.. |downloads_bioconductor-cytodx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytodx.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cytodx| image:: https://quay.io/repository/biocontainers/bioconductor-cytodx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytodx







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytodx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytodx/README.html

