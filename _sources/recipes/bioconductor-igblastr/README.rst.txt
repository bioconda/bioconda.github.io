:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-igblastr'
.. highlight: bash

bioconductor-igblastr
=====================

.. conda:recipe:: bioconductor-igblastr
   :replaces_section_title:
   :noindex:

   User\-friendly R Wrapper to IgBLAST

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/igblastr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-igblastr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igblastr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-igblastr/meta.yaml>`_

   The igblastr package provides functions to conveniently install and use a local IgBLAST installation from within R. IgBLAST is described at \<https\:\/\/pubmed.ncbi.nlm.nih.gov\/23671333\/\>. IgBLAST web interface\: \<https\:\/\/www.ncbi.nlm.nih.gov\/igblast\/\>.


.. conda:package:: bioconductor-igblastr

   |downloads_bioconductor-igblastr| |docker_bioconductor-igblastr|

   :versions:
      
      

      ``1.0.11-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-r.utils: 
   :depends on r-rvest: 
   :depends on r-tibble: 
   :depends on r-xml2: 
   :depends on r-xtable: 

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

    pixi global install bioconductor-igblastr

to add into an existing workspace instead, run::

    pixi add bioconductor-igblastr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-igblastr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-igblastr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-igblastr:<tag>

(see `bioconductor-igblastr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-igblastr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-igblastr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-igblastr
   :alt:   (downloads)
.. |docker_bioconductor-igblastr| image:: https://quay.io/repository/biocontainers/bioconductor-igblastr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-igblastr
.. _`bioconductor-igblastr/tags`: https://quay.io/repository/biocontainers/bioconductor-igblastr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-igblastr";
        var versions = ["1.0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-igblastr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-igblastr/README.html