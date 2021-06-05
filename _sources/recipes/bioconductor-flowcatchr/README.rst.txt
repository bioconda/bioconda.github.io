:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowcatchr'
.. highlight: bash

bioconductor-flowcatchr
=======================

.. conda:recipe:: bioconductor-flowcatchr
   :replaces_section_title:
   :noindex:

   Tools to analyze in vivo microscopy imaging data focused on tracking flowing blood cells

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/flowcatchR.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-flowcatchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcatchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowcatchr/meta.yaml>`_

   flowcatchR is a set of tools to analyze in vivo microscopy imaging data\, focused on tracking flowing blood cells. It guides the steps from segmentation to calculation of features\, filtering out particles not of interest\, providing also a set of utilities to help checking the quality of the performed operations \(e.g. how good the segmentation was\). It allows investigating the issue of tracking flowing cells such as in blood vessels\, to categorize the particles in flowing\, rolling and adherent. This classification is applied in the study of phenomena such as hemostasis and study of thrombosis development. Moreover\, flowcatchR presents an integrated workflow solution\, based on the integration with a Shiny App and Jupyter notebooks\, which is delivered alongside the package\, and can enable fully reproducible bioimage analysis in the R environment.


.. conda:package:: bioconductor-flowcatchr

   |downloads_bioconductor-flowcatchr| |docker_bioconductor-flowcatchr|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-ebimage: ``>=4.34.0,<4.35.0``
   :depends imagemagick: 
   :depends r-abind: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-colorramps: 
   :depends r-plotly: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowcatchr

   and update with::

      conda update bioconductor-flowcatchr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowcatchr:<tag>

   (see `bioconductor-flowcatchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowcatchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowcatchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowcatchr
   :alt:   (downloads)
.. |docker_bioconductor-flowcatchr| image:: https://quay.io/repository/biocontainers/bioconductor-flowcatchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowcatchr
.. _`bioconductor-flowcatchr/tags`: https://quay.io/repository/biocontainers/bioconductor-flowcatchr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowcatchr/README.html