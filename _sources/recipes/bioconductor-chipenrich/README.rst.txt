.. title:: Package Recipe 'bioconductor-chipenrich'
.. highlight: bash


bioconductor-chipenrich
=======================

.. conda:recipe:: bioconductor-chipenrich
   :replaces_section_title:

   ChIP\-Enrich performs gene set enrichment testing using peaks called from a ChIP\-seq experiment. The method empirically corrects for confounding factors such as the length of genes\, and the mappability of the sequence surrounding genes.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/chipenrich.html
   :license: GPL-3
   :recipe: /`bioconductor-chipenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chipenrich/meta.yaml>`_

   


.. conda:package:: bioconductor-chipenrich

   |downloads_bioconductor-chipenrich| |docker_bioconductor-chipenrich|

   :versions: 2.6.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-chipenrich.data` >=2.6.0,<2.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-org.dm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.dr.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.mm.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-org.rn.eg.db` >=3.7.0,<3.8.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-lattice`  :conda:package:`r-latticeextra`  :conda:package:`r-mgcv`  :conda:package:`r-plyr`  :conda:package:`r-rms`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-chipenrich|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chipenrich

   and update with::

      conda update bioconductor-chipenrich

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chipenrich


.. |required_by_bioconductor-chipenrich| conda:required_by:: bioconductor-chipenrich
.. |downloads_bioconductor-chipenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chipenrich.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chipenrich| image:: https://quay.io/repository/biocontainers/bioconductor-chipenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chipenrich







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chipenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chipenrich/README.html

