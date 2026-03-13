:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fenr'
.. highlight: bash

bioconductor-fenr
=================

.. conda:recipe:: bioconductor-fenr
   :replaces_section_title:
   :noindex:

   Fast functional enrichment for interactive applications

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/fenr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-fenr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fenr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fenr/meta.yaml>`_

   Perform fast functional enrichment on feature lists \(like genes or proteins\) using the hypergeometric distribution. Tailored for speed\, this package is ideal for interactive platforms such as Shiny. It supports the retrieval of functional data from sources like GO\, KEGG\, Reactome\, Bioplanet and WikiPathways. By downloading and preparing data first\, it allows for rapid successive tests on various feature selections without the need for repetitive\, time\-consuming preparatory steps typical of other packages.


.. conda:package:: bioconductor-fenr

   |downloads_bioconductor-fenr| |docker_bioconductor-fenr|

   :versions:
      
      

      ``1.8.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-httr2: 
   :depends on r-progress: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-rlang: 
   :depends on r-rvest: 
   :depends on r-shiny: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-fenr

to add into an existing workspace instead, run::

    pixi add bioconductor-fenr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fenr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fenr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fenr:<tag>

(see `bioconductor-fenr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fenr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fenr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fenr
   :alt:   (downloads)
.. |docker_bioconductor-fenr| image:: https://quay.io/repository/biocontainers/bioconductor-fenr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fenr
.. _`bioconductor-fenr/tags`: https://quay.io/repository/biocontainers/bioconductor-fenr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fenr";
        var versions = ["1.8.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fenr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fenr/README.html