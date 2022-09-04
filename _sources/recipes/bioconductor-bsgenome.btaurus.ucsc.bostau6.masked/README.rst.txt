:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.btaurus.ucsc.bostau6.masked'
.. highlight: bash

bioconductor-bsgenome.btaurus.ucsc.bostau6.masked
=================================================

.. conda:recipe:: bioconductor-bsgenome.btaurus.ucsc.bostau6.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Bos taurus \(UCSC version bosTau6\)

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/BSgenome.Btaurus.UCSC.bosTau6.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.btaurus.ucsc.bostau6.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked/meta.yaml>`_

   Full genome sequences for Bos taurus \(Cow\) as provided by UCSC \(bosTau6\, Nov. 2009\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Btaurus.UCSC.bosTau6\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.btaurus.ucsc.bostau6.masked

   |downloads_bioconductor-bsgenome.btaurus.ucsc.bostau6.masked| |docker_bioconductor-bsgenome.btaurus.ucsc.bostau6.masked|

   :versions:
      
      

      ``1.3.99-9``,  ``1.3.99-8``,  ``1.3.99-7``,  ``1.3.99-6``,  ``1.3.99-5``,  ``1.3.99-4``,  ``1.3.99-3``,  ``1.3.99-2``,  ``1.3.99-0``

      

   
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-bsgenome.btaurus.ucsc.bostau6: ``>=1.4.0,<1.5.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.btaurus.ucsc.bostau6.masked

   and update with::

      conda update bioconductor-bsgenome.btaurus.ucsc.bostau6.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked:<tag>

   (see `bioconductor-bsgenome.btaurus.ucsc.bostau6.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.btaurus.ucsc.bostau6.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.btaurus.ucsc.bostau6.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked
.. _`bioconductor-bsgenome.btaurus.ucsc.bostau6.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.btaurus.ucsc.bostau6.masked";
        var versions = ["1.3.99","1.3.99","1.3.99","1.3.99","1.3.99"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.btaurus.ucsc.bostau6.masked/README.html