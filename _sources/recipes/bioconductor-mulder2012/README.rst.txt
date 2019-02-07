.. title:: Package Recipe 'bioconductor-mulder2012'
.. highlight: bash


bioconductor-mulder2012
=======================

.. conda:recipe:: bioconductor-mulder2012
   :replaces_section_title:

   This package provides functions to reproduce results and figures in Mulder K. et. al. published in Nature Cell Biology 2012 and Wang X. et. al. published in PLoS Computational Biology 2012.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/Mulder2012.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mulder2012 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mulder2012>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mulder2012/meta.yaml>`_

   


.. conda:package:: bioconductor-mulder2012

   |downloads_bioconductor-mulder2012| |docker_bioconductor-mulder2012|

   :versions: 0.22.0

   :depends: :conda:package:`bioconductor-htsanalyzer` >=2.34.0,<2.35.0 :conda:package:`bioconductor-kegg.db` >=3.2.0,<3.3.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-panr` >=1.28.0,<1.29.0 :conda:package:`bioconductor-reder` >=1.30.0,<1.31.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-igraph`  :conda:package:`r-mass`  :conda:package:`r-pvclust`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mulder2012|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mulder2012

   and update with::

      conda update bioconductor-mulder2012

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mulder2012


.. |required_by_bioconductor-mulder2012| conda:required_by:: bioconductor-mulder2012
.. |downloads_bioconductor-mulder2012| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mulder2012.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mulder2012| image:: https://quay.io/repository/biocontainers/bioconductor-mulder2012/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mulder2012







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mulder2012/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mulder2012/README.html

