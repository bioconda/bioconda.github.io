:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked'
.. highlight: bash

bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
==================================================

.. conda:recipe:: bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
   :replaces_section_title:

   Full masked genome sequences for Macaca mulatta \(UCSC version rheMac2\)

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/BSgenome.Mmulatta.UCSC.rheMac2.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/meta.yaml>`_

   Full genome sequences for Macaca mulatta \(Rhesus\) as provided by UCSC \(rheMac2\, Jan. 2006\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Mmulatta.UCSC.rheMac2\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.  NOTE\: In most assemblies available at UCSC\, Tandem Repeats Finder repeats were filtered to retain only the repeats with period \<\= 12.  However\, the filtering was omitted for this assembly\, so the TRF masks contain all Tandem Repeats Finder results.


.. conda:package:: bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked

   |downloads_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked| |docker_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked|

   :versions: 1.3.99-4, 1.3.99-3, 1.3.99-0
   
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-bsgenome.mmulatta.ucsc.rhemac2: >=1.4.0,<1.5.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked

   and update with::

      conda update bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked:<tag>

   (see `bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked
.. _`bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac2.masked/README.html