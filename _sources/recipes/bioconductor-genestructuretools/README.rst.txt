:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genestructuretools'
.. highlight: bash

bioconductor-genestructuretools
===============================

.. conda:recipe:: bioconductor-genestructuretools
   :replaces_section_title:
   :noindex:

   Tools for spliced gene structure manipulation and analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeneStructureTools.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-genestructuretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genestructuretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genestructuretools/meta.yaml>`_

   GeneStructureTools can be used to create in silico alternative splicing events\, and analyse potential effects this has on functional gene products.


.. conda:package:: bioconductor-genestructuretools

   |downloads_bioconductor-genestructuretools| |docker_bioconductor-genestructuretools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome.mmusculus.ucsc.mm10: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-gviz: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-plyr: 
   :depends on r-stringdist: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-genestructuretools

to add into an existing workspace instead, run::

    pixi add bioconductor-genestructuretools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genestructuretools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genestructuretools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genestructuretools:<tag>

(see `bioconductor-genestructuretools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genestructuretools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genestructuretools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genestructuretools
   :alt:   (downloads)
.. |docker_bioconductor-genestructuretools| image:: https://quay.io/repository/biocontainers/bioconductor-genestructuretools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genestructuretools
.. _`bioconductor-genestructuretools/tags`: https://quay.io/repository/biocontainers/bioconductor-genestructuretools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genestructuretools";
        var versions = ["1.30.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genestructuretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genestructuretools/README.html