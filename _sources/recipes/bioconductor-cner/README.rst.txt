.. title:: Package Recipe 'bioconductor-cner'
.. highlight: bash


bioconductor-cner
=================

.. conda:recipe:: bioconductor-cner
   :replaces_section_title:

   Large\-scale identification and advanced visualization of sets of conserved noncoding elements.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CNEr.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-cner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cner/meta.yaml>`_
   :links: biotools: :biotools:`cner`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-cner

   |downloads_bioconductor-cner| |docker_bioconductor-cner|

   :versions: 1.18.1, 1.16.1, 1.14.0, 1.12.1, 1.10.2

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-go.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-keggrest` >=1.22.0,<1.23.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-xvector` >=0.22.0,<0.23.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi` >=0.7 :conda:package:`r-ggplot2` >=2.1.0 :conda:package:`r-powerlaw` >=0.60.3 :conda:package:`r-r.utils` >=2.3.0 :conda:package:`r-readr` >=0.2.2 :conda:package:`r-reshape2` >=1.4.1 :conda:package:`r-rsqlite` >=0.11.4 

   :required~by: |required_by_bioconductor-cner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cner

   and update with::

      conda update bioconductor-cner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cner


.. |required_by_bioconductor-cner| conda:required_by:: bioconductor-cner
.. |downloads_bioconductor-cner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cner.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cner| image:: https://quay.io/repository/biocontainers/bioconductor-cner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cner/README.html

