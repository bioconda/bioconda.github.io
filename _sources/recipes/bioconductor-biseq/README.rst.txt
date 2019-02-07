.. title:: Package Recipe 'bioconductor-biseq'
.. highlight: bash


bioconductor-biseq
==================

.. conda:recipe:: bioconductor-biseq
   :replaces_section_title:

   The BiSeq package provides useful classes and functions to handle and analyze targeted bisulfite sequencing \(BS\) data such as reduced\-representation bisulfite sequencing \(RRBS\) data. In particular\, it implements an algorithm to detect differentially methylated regions \(DMRs\). The package takes already aligned BS data from one or multiple samples.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/BiSeq.html
   :license: LGPL-3
   :recipe: /`bioconductor-biseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biseq/meta.yaml>`_
   :links: biotools: :biotools:`biseq`, doi: :doi:`10.1093/bib/bbv095`

   


.. conda:package:: bioconductor-biseq

   |downloads_bioconductor-biseq| |docker_bioconductor-biseq|

   :versions: 1.22.0, 1.20.0, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-globaltest` >=5.36.0,<5.37.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-betareg`  :conda:package:`r-formula`  :conda:package:`r-lokern`  

   :required~by: |required_by_bioconductor-biseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biseq

   and update with::

      conda update bioconductor-biseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-biseq


.. |required_by_bioconductor-biseq| conda:required_by:: bioconductor-biseq
.. |downloads_bioconductor-biseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biseq.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-biseq| image:: https://quay.io/repository/biocontainers/bioconductor-biseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biseq/README.html

