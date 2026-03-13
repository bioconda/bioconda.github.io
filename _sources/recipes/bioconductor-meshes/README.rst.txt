:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-meshes'
.. highlight: bash

bioconductor-meshes
===================

.. conda:recipe:: bioconductor-meshes
   :replaces_section_title:
   :noindex:

   MeSH Enrichment and Semantic analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/meshes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-meshes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-meshes/meta.yaml>`_
   :links: biotools: :biotools:`meshes`, doi: :doi:`10.1038/nmeth.3252`

   MeSH \(Medical Subject Headings\) is the NLM controlled vocabulary used to manually index articles for MEDLINE\/PubMed. MeSH terms were associated by Entrez Gene ID by three methods\, gendoo\, gene2pubmed and RBBH. This association is fundamental for enrichment and semantic analyses. meshes supports enrichment analysis \(over\-representation and gene set enrichment analysis\) of gene list or whole expression profile. The semantic comparisons of MeSH terms provide quantitative ways to compute similarities between genes and gene groups. meshes implemented five methods proposed by Resnik\, Schlicker\, Jiang\, Lin and Wang respectively and supports more than 70 species.


.. conda:package:: bioconductor-meshes

   |downloads_bioconductor-meshes| |docker_bioconductor-meshes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-gosemsim: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-meshdbi: ``>=1.46.0,<1.47.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-yulab.utils: ``>=0.1.5``

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

    pixi global install bioconductor-meshes

to add into an existing workspace instead, run::

    pixi add bioconductor-meshes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-meshes

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-meshes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-meshes:<tag>

(see `bioconductor-meshes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-meshes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-meshes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-meshes
   :alt:   (downloads)
.. |docker_bioconductor-meshes| image:: https://quay.io/repository/biocontainers/bioconductor-meshes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-meshes
.. _`bioconductor-meshes/tags`: https://quay.io/repository/biocontainers/bioconductor-meshes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-meshes";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-meshes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-meshes/README.html