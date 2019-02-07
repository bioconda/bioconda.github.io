.. title:: Package Recipe 'bioconductor-roar'
.. highlight: bash


bioconductor-roar
=================

.. conda:recipe:: bioconductor-roar
   :replaces_section_title:

   Identify preferential usage of APA sites\, comparing two biological conditions\, starting from known alternative sites and alignments obtained from standard RNA\-seq experiments.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/roar.html
   :license: GPL-3
   :recipe: /`bioconductor-roar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roar/meta.yaml>`_
   :links: biotools: :biotools:`roar`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-roar

   |downloads_bioconductor-roar| |docker_bioconductor-roar|

   :versions: 1.18.0, 1.16.0, 1.14.0, 1.12.0, 1.10.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-roar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roar

   and update with::

      conda update bioconductor-roar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-roar


.. |required_by_bioconductor-roar| conda:required_by:: bioconductor-roar
.. |downloads_bioconductor-roar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roar.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-roar| image:: https://quay.io/repository/biocontainers/bioconductor-roar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roar/README.html

