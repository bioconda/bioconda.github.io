.. title:: Package Recipe 'bioconductor-chipseqr'
.. highlight: bash


bioconductor-chipseqr
=====================

.. conda:recipe:: bioconductor-chipseqr
   :replaces_section_title:

   ChIPseqR identifies protein binding sites from ChIP\-seq and nucleosome positioning experiments. The model used to describe binding events was developed to locate nucleosomes but should flexible enough to handle other types of experiments as well.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ChIPseqR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-chipseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipseqr/meta.yaml>`_

   


.. conda:package:: bioconductor-chipseqr

   |downloads_bioconductor-chipseqr| |docker_bioconductor-chipseqr|

   :versions: 1.36.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-hilbertvis` >=1.40.0,<1.41.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-shortread` >=1.40.0,<1.41.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fbasics`  :conda:package:`r-timsac`  

   :required~by: |required_by_bioconductor-chipseqr|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipseqr

   and update with::

      conda update bioconductor-chipseqr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chipseqr


.. |required_by_bioconductor-chipseqr| conda:required_by:: bioconductor-chipseqr
.. |downloads_bioconductor-chipseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipseqr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chipseqr| image:: https://quay.io/repository/biocontainers/bioconductor-chipseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipseqr







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipseqr/README.html

