:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trackviewer'
.. highlight: bash

bioconductor-trackviewer
========================

.. conda:recipe:: bioconductor-trackviewer
   :replaces_section_title:
   :noindex:

   A R\/Bioconductor package with web interface for drawing elegant interactive tracks or lollipop plot to facilitate integrated analysis of multi\-omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/trackViewer.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-trackviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trackviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trackviewer/meta.yaml>`_
   :links: biotools: :biotools:`trackviewer`, doi: :doi:`10.1038/nmeth.3252`

   Visualize mapped reads along with annotation as track layers for NGS dataset such as ChIP\-seq\, RNA\-seq\, miRNA\-seq\, DNA\-seq\, SNPs and methylation data.


.. conda:package:: bioconductor-trackviewer

   |downloads_bioconductor-trackviewer| |docker_bioconductor-trackviewer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.1-0</code>,  <code>1.36.2-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.1-0``,  ``1.36.2-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.2-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.5-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.1-0``,  ``1.14.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-grimport: 
   :depends on r-htmlwidgets: 
   :depends on r-scales: 
   :depends on r-strawr: 

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

    pixi global install bioconductor-trackviewer

to add into an existing workspace instead, run::

    pixi add bioconductor-trackviewer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-trackviewer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-trackviewer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-trackviewer:<tag>

(see `bioconductor-trackviewer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-trackviewer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trackviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trackviewer
   :alt:   (downloads)
.. |docker_bioconductor-trackviewer| image:: https://quay.io/repository/biocontainers/bioconductor-trackviewer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trackviewer
.. _`bioconductor-trackviewer/tags`: https://quay.io/repository/biocontainers/bioconductor-trackviewer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trackviewer";
        var versions = ["1.46.0","1.42.0","1.38.1","1.36.2","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trackviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trackviewer/README.html