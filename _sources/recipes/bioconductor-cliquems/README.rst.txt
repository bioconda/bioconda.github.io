:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cliquems'
.. highlight: bash

bioconductor-cliquems
=====================

.. conda:recipe:: bioconductor-cliquems
   :replaces_section_title:
   :noindex:

   Annotation of Isotopes\, Adducts and Fragmentation Adducts for in\-Source LC\/MS Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cliqueMS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cliquems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliquems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cliquems/meta.yaml>`_

   Annotates data from liquid chromatography coupled to mass spectrometry \(LC\/MS\) metabolomics experiments. Based on a network algorithm \(O.Senan\, A. Aguilar\- Mogas\, M. Navarro\, O. Yanes\, R.Guimerà and M. Sales\-Pardo\, Bioinformatics\, 35\(20\)\, 2019\)\, \'CliqueMS\' builds a weighted similarity network where nodes are features and edges are weighted according to the similarity of this features. Then it searches for the most plausible division of the similarity network into cliques \(fully connected components\). Finally it annotates metabolites within each clique\, obtaining for each annotated metabolite the neutral mass and their features\, corresponding to isotopes\, ionization adducts and fragmentation adducts of that metabolite.


.. conda:package:: bioconductor-cliquems

   |downloads_bioconductor-cliquems| |docker_bioconductor-cliquems|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0a0``
   :depends on bioconductor-xcms: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-xcms: ``>=4.8.0,<4.9.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: 
   :depends on r-coop: 
   :depends on r-igraph: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: ``>=0.12.15``
   :depends on r-rcpparmadillo: 
   :depends on r-slam: 

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

    pixi global install bioconductor-cliquems

to add into an existing workspace instead, run::

    pixi add bioconductor-cliquems

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cliquems

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cliquems

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cliquems:<tag>

(see `bioconductor-cliquems/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cliquems| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cliquems.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cliquems
   :alt:   (downloads)
.. |docker_bioconductor-cliquems| image:: https://quay.io/repository/biocontainers/bioconductor-cliquems/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cliquems
.. _`bioconductor-cliquems/tags`: https://quay.io/repository/biocontainers/bioconductor-cliquems?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cliquems";
        var versions = ["1.24.0","1.20.0","1.16.0","1.13.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cliquems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cliquems/README.html