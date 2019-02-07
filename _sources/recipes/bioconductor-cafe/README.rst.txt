.. title:: Package Recipe 'bioconductor-cafe'
.. highlight: bash


bioconductor-cafe
=================

.. conda:recipe:: bioconductor-cafe
   :replaces_section_title:

   Detection and visualizations of gross chromosomal aberrations using Affymetrix expression microarrays as input

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CAFE.html
   :license: GPL-3
   :recipe: /`bioconductor-cafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cafe/meta.yaml>`_

   


.. conda:package:: bioconductor-cafe

   |downloads_bioconductor-cafe| |docker_bioconductor-cafe|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biovizbase` >=1.30.0,<1.31.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-ggbio` >=1.30.0,<1.31.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-gridextra`  

   :required~by: |required_by_bioconductor-cafe|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cafe

   and update with::

      conda update bioconductor-cafe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cafe


.. |required_by_bioconductor-cafe| conda:required_by:: bioconductor-cafe
.. |downloads_bioconductor-cafe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cafe.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cafe| image:: https://quay.io/repository/biocontainers/bioconductor-cafe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cafe







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cafe/README.html

