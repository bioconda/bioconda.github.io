.. title:: Package Recipe 'bioconductor-mmdiff2'
.. highlight: bash


bioconductor-mmdiff2
====================

.. conda:recipe:: bioconductor-mmdiff2
   :replaces_section_title:

   This package detects statistically significant differences between read enrichment profiles in different ChIP\-Seq samples. To take advantage of shape differences it uses Kernel methods \(Maximum Mean Discrepancy\, MMD\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MMDiff2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mmdiff2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiff2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mmdiff2/meta.yaml>`_
   :links: biotools: :biotools:`mmdiff2`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-mmdiff2

   |downloads_bioconductor-mmdiff2| |docker_bioconductor-mmdiff2|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-locfit`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-shiny`  

   :required~by: |required_by_bioconductor-mmdiff2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mmdiff2

   and update with::

      conda update bioconductor-mmdiff2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mmdiff2


.. |required_by_bioconductor-mmdiff2| conda:required_by:: bioconductor-mmdiff2
.. |downloads_bioconductor-mmdiff2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mmdiff2.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mmdiff2| image:: https://quay.io/repository/biocontainers/bioconductor-mmdiff2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mmdiff2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mmdiff2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mmdiff2/README.html

