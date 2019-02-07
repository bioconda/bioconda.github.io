.. title:: Package Recipe 'bioconductor-chemminer'
.. highlight: bash


bioconductor-chemminer
======================

.. conda:recipe:: bioconductor-chemminer
   :replaces_section_title:

   ChemmineR is a cheminformatics package for analyzing drug\-like small molecule data in R. Its latest version contains functions for efficient processing of large numbers of molecules\, physicochemical\/structural property predictions\, structural similarity searching\, classification and clustering of compound libraries with a wide spectrum of algorithms. In addition\, it offers visualization functions for compound clustering results and chemical structures.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChemmineR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chemminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminer/meta.yaml>`_
   :links: biotools: :biotools:`chemminer`

   


.. conda:package:: bioconductor-chemminer

   |downloads_bioconductor-chemminer| |docker_bioconductor-chemminer|

   :versions: 3.34.1, 3.32.1, 2.30.0, 2.28.3

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-base64enc`  :conda:package:`r-bh`  :conda:package:`r-dbi`  :conda:package:`r-digest`  :conda:package:`r-dt`  :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  :conda:package:`r-png`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-rcurl`  :conda:package:`r-rjson`  :conda:package:`r-rsvg`  

   :required~by: |required_by_bioconductor-chemminer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chemminer

   and update with::

      conda update bioconductor-chemminer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chemminer


.. |required_by_bioconductor-chemminer| conda:required_by:: bioconductor-chemminer
.. |downloads_bioconductor-chemminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chemminer.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chemminer| image:: https://quay.io/repository/biocontainers/bioconductor-chemminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chemminer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chemminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chemminer/README.html

