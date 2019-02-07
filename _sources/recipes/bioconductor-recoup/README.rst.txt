.. title:: Package Recipe 'bioconductor-recoup'
.. highlight: bash


bioconductor-recoup
===================

.. conda:recipe:: bioconductor-recoup
   :replaces_section_title:

   recoup calculates and plots signal profiles created from short sequence reads derived from Next Generation Sequencing technologies. The profiles provided are either sumarized curve profiles or heatmap profiles. Currently\, recoup supports genomic profile plots for reads derived from ChIP\-Seq and RNA\-Seq experiments. The package uses ggplot2 and ComplexHeatmap graphics facilities for curve and heatmap coverage profiles respectively.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/recoup.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-recoup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recoup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recoup/meta.yaml>`_
   :links: biotools: :biotools:`recoup`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-recoup

   |downloads_bioconductor-recoup| |docker_bioconductor-recoup|

   :versions: 1.10.0, 1.8.0, 1.6.0, 1.4.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-circlize`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr`  

   :required~by: |required_by_bioconductor-recoup|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-recoup

   and update with::

      conda update bioconductor-recoup

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-recoup


.. |required_by_bioconductor-recoup| conda:required_by:: bioconductor-recoup
.. |downloads_bioconductor-recoup| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recoup.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-recoup| image:: https://quay.io/repository/biocontainers/bioconductor-recoup/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recoup







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recoup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recoup/README.html

