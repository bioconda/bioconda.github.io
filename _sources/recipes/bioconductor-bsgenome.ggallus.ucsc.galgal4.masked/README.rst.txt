.. title:: Package Recipe 'bioconductor-bsgenome.ggallus.ucsc.galgal4.masked'
.. highlight: bash


bioconductor-bsgenome.ggallus.ucsc.galgal4.masked
=================================================

.. conda:recipe:: bioconductor-bsgenome.ggallus.ucsc.galgal4.masked
   :replaces_section_title:

   Full genome sequences for Gallus gallus \(Chicken\) as provided by UCSC \(galGal4\, Nov. 2011\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Ggallus.UCSC.galGal4\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/BSgenome.Ggallus.UCSC.galGal4.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.ggallus.ucsc.galgal4.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked/meta.yaml>`_

   


.. conda:package:: bioconductor-bsgenome.ggallus.ucsc.galgal4.masked

   |downloads_bioconductor-bsgenome.ggallus.ucsc.galgal4.masked| |docker_bioconductor-bsgenome.ggallus.ucsc.galgal4.masked|

   :versions: 1.3.99

   :depends: :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-bsgenome.ggallus.ucsc.galgal4` >=1.4.0,<1.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-bsgenome.ggallus.ucsc.galgal4.masked|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.ggallus.ucsc.galgal4.masked

   and update with::

      conda update bioconductor-bsgenome.ggallus.ucsc.galgal4.masked

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked


.. |required_by_bioconductor-bsgenome.ggallus.ucsc.galgal4.masked| conda:required_by:: bioconductor-bsgenome.ggallus.ucsc.galgal4.masked
.. |downloads_bioconductor-bsgenome.ggallus.ucsc.galgal4.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.ggallus.ucsc.galgal4.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.ggallus.ucsc.galgal4.masked/README.html

