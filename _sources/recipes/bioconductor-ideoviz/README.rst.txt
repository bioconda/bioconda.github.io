.. title:: Package Recipe 'bioconductor-ideoviz'
.. highlight: bash


bioconductor-ideoviz
====================

.. conda:recipe:: bioconductor-ideoviz
   :replaces_section_title:

   Plots data associated with arbitrary genomic intervals along chromosomal ideogram.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IdeoViz.html
   :license: GPL-2
   :recipe: /`bioconductor-ideoviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideoviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideoviz/meta.yaml>`_
   :links: biotools: :biotools:`ideoviz`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-ideoviz

   |downloads_bioconductor-ideoviz| |docker_bioconductor-ideoviz|

   :versions: 1.18.0, 1.16.0, 1.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-ideoviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ideoviz

   and update with::

      conda update bioconductor-ideoviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ideoviz


.. |required_by_bioconductor-ideoviz| conda:required_by:: bioconductor-ideoviz
.. |downloads_bioconductor-ideoviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ideoviz.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ideoviz| image:: https://quay.io/repository/biocontainers/bioconductor-ideoviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ideoviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ideoviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ideoviz/README.html

