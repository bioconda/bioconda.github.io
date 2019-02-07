.. title:: Package Recipe 'bioconductor-bsgenome.tguttata.ucsc.taegut1.masked'
.. highlight: bash


bioconductor-bsgenome.tguttata.ucsc.taegut1.masked
==================================================

.. conda:recipe:: bioconductor-bsgenome.tguttata.ucsc.taegut1.masked
   :replaces_section_title:

   Full genome sequences for Taeniopygia guttata \(Zebra finch\) as provided by UCSC \(taeGut1\, Jul. 2008\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Tguttata.UCSC.taeGut1\, except that each of them has the 2 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, and \(2\) the mask of intra\-contig ambiguities \(AMB mask\). Both masks are \"active\" by default.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/BSgenome.Tguttata.UCSC.taeGut1.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.tguttata.ucsc.taegut1.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked/meta.yaml>`_

   


.. conda:package:: bioconductor-bsgenome.tguttata.ucsc.taegut1.masked

   |downloads_bioconductor-bsgenome.tguttata.ucsc.taegut1.masked| |docker_bioconductor-bsgenome.tguttata.ucsc.taegut1.masked|

   :versions: 1.3.99

   :depends: :conda:package:`bioconductor-bsgenome` >=1.50.0,<1.51.0 :conda:package:`bioconductor-bsgenome.tguttata.ucsc.taegut1` >=1.4.0,<1.5.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-bsgenome.tguttata.ucsc.taegut1.masked|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.tguttata.ucsc.taegut1.masked

   and update with::

      conda update bioconductor-bsgenome.tguttata.ucsc.taegut1.masked

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked


.. |required_by_bioconductor-bsgenome.tguttata.ucsc.taegut1.masked| conda:required_by:: bioconductor-bsgenome.tguttata.ucsc.taegut1.masked
.. |downloads_bioconductor-bsgenome.tguttata.ucsc.taegut1.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.tguttata.ucsc.taegut1.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.tguttata.ucsc.taegut1.masked/README.html

