:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgreat'
.. highlight: bash

bioconductor-rgreat
===================

.. conda:recipe:: bioconductor-rgreat
   :replaces_section_title:
   :noindex:

   GREAT Analysis \- Functional Enrichment on Genomic Regions

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/rGREAT.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rgreat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgreat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgreat/meta.yaml>`_
   :links: biotools: :biotools:`rgreat`, doi: :doi:`10.1038/nmeth.3252`

   GREAT \(Genomic Regions Enrichment of Annotations Tool\) is a type of functional enrichment analysis directly performed on genomic regions. This package implements the GREAT algorithm \(the local GREAT analysis\)\, also it supports directly interacting with the GREAT web service \(the online GREAT analysis\). Both analysis can be viewed by a Shiny application. rGREAT by default supports more than 600 organisms and a large number of gene set collections\, as well as self\-provided gene sets and organisms from users. Additionally\, it implements a general method for dealing with background regions.


.. conda:package:: bioconductor-rgreat

   |downloads_bioconductor-rgreat| |docker_bioconductor-rgreat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.11.1-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.17.0,<3.18.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-digest: 
   :depends r-doparallel: 
   :depends r-dt: 
   :depends r-foreach: 
   :depends r-getoptlong: ``>=0.0.9``
   :depends r-globaloptions: 
   :depends r-progress: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-rjson: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rgreat

   and update with::

      conda update bioconductor-rgreat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgreat:<tag>

   (see `bioconductor-rgreat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgreat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgreat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgreat
   :alt:   (downloads)
.. |docker_bioconductor-rgreat| image:: https://quay.io/repository/biocontainers/bioconductor-rgreat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgreat
.. _`bioconductor-rgreat/tags`: https://quay.io/repository/biocontainers/bioconductor-rgreat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgreat";
        var versions = ["2.2.0","2.0.0","2.0.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgreat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgreat/README.html