.. title:: Package Recipe 'bioconductor-affyhgu133aexpr'
.. highlight: bash


bioconductor-affyhgu133aexpr
============================

.. conda:recipe:: bioconductor-affyhgu133aexpr
   :replaces_section_title:

   Contains pre\-built human \(GPL96\) database of gene expression profiles. The gene expression data was downloaded from NCBI GEO\, preprocessed and normalized consistently. The biological context of each sample was recorded and manually verified based on the sample description in GEO.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/Affyhgu133aExpr.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-affyhgu133aexpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyhgu133aexpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyhgu133aexpr/meta.yaml>`_

   


.. conda:package:: bioconductor-affyhgu133aexpr

   |downloads_bioconductor-affyhgu133aexpr| |docker_bioconductor-affyhgu133aexpr|

   :versions: 1.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-affyhgu133aexpr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyhgu133aexpr

   and update with::

      conda update bioconductor-affyhgu133aexpr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affyhgu133aexpr


.. |required_by_bioconductor-affyhgu133aexpr| conda:required_by:: bioconductor-affyhgu133aexpr
.. |downloads_bioconductor-affyhgu133aexpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyhgu133aexpr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affyhgu133aexpr| image:: https://quay.io/repository/biocontainers/bioconductor-affyhgu133aexpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyhgu133aexpr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyhgu133aexpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyhgu133aexpr/README.html

