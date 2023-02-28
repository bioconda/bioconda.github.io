:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked'
.. highlight: bash

bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked
=================================================

.. conda:recipe:: bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked
   :replaces_section_title:
   :noindex:

   Full masked genome sequences for Sus scrofa \(UCSC version susScr3\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/BSgenome.Sscrofa.UCSC.susScr3.masked.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked/meta.yaml>`_

   Full genome sequences for Sus scrofa \(Pig\) as provided by UCSC \(susScr3\, Aug. 2011\) and stored in Biostrings objects. The sequences are the same as in BSgenome.Sscrofa.UCSC.susScr3\, except that each of them has the 4 following masks on top\: \(1\) the mask of assembly gaps \(AGAPS mask\)\, \(2\) the mask of intra\-contig ambiguities \(AMB mask\)\, \(3\) the mask of repeats from RepeatMasker \(RM mask\)\, and \(4\) the mask of repeats from Tandem Repeats Finder \(TRF mask\). Only the AGAPS and AMB masks are \"active\" by default.


.. conda:package:: bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked

   |downloads_bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked| |docker_bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.99-11</code>,  <code>1.3.99-10</code>,  <code>1.3.99-9</code>,  <code>1.3.99-8</code>,  <code>1.3.99-7</code>,  <code>1.3.99-6</code>,  <code>1.3.99-5</code>,  <code>1.3.99-4</code>,  <code>1.3.99-3</code>,  </span></summary>
      

      ``1.3.99-11``,  ``1.3.99-10``,  ``1.3.99-9``,  ``1.3.99-8``,  ``1.3.99-7``,  ``1.3.99-6``,  ``1.3.99-5``,  ``1.3.99-4``,  ``1.3.99-3``,  ``1.3.99-1``,  ``1.3.99-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-bsgenome.sscrofa.ucsc.susscr3: ``>=1.4.0,<1.5.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked

   and update with::

      conda update bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked:<tag>

   (see `bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked
.. _`bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked";
        var versions = ["1.3.99","1.3.99","1.3.99","1.3.99","1.3.99"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.sscrofa.ucsc.susscr3.masked/README.html