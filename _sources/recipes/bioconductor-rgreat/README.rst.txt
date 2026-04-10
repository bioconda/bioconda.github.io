:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgreat'
.. highlight: bash

bioconductor-rgreat
===================

.. conda:recipe:: bioconductor-rgreat
   :replaces_section_title:
   :noindex:

   GREAT Analysis \- Functional Enrichment on Genomic Regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rGREAT.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rgreat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgreat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgreat/meta.yaml>`_
   :links: biotools: :biotools:`rgreat`, doi: :doi:`10.1038/nmeth.3252`

   GREAT \(Genomic Regions Enrichment of Annotations Tool\) is a type of functional enrichment analysis directly performed on genomic regions. This package implements the GREAT algorithm \(the local GREAT analysis\)\, also it supports directly interacting with the GREAT web service \(the online GREAT analysis\). Both analysis can be viewed by a Shiny application. rGREAT by default supports more than 600 organisms and a large number of gene set collections\, as well as self\-provided gene sets and organisms from users. Additionally\, it implements a general method for dealing with background regions.


.. conda:package:: bioconductor-rgreat

   |downloads_bioconductor-rgreat| |docker_bioconductor-rgreat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.2-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  </span></summary>
      

      ``2.12.2-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.11.1-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.1,<3.23.0a0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-digest: 
   :depends on r-doparallel: 
   :depends on r-dt: 
   :depends on r-foreach: 
   :depends on r-getoptlong: ``>=0.0.9``
   :depends on r-globaloptions: 
   :depends on r-progress: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: 
   :depends on r-rcurl: 
   :depends on r-rjson: 
   :depends on r-shiny: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-rgreat

to add into an existing workspace instead, run::

    pixi add bioconductor-rgreat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgreat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgreat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgreat:<tag>

(see `bioconductor-rgreat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgreat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgreat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgreat
   :alt:   (downloads)
.. |docker_bioconductor-rgreat| image:: https://quay.io/repository/biocontainers/bioconductor-rgreat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgreat
.. _`bioconductor-rgreat/tags`: https://quay.io/repository/biocontainers/bioconductor-rgreat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgreat";
        var versions = ["2.12.2","2.8.0","2.4.0","2.2.0","2.0.0"];
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