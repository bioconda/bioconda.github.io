:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hahmmr'
.. highlight: bash

r-hahmmr
========

.. conda:recipe:: r-hahmmr
   :replaces_section_title:
   :noindex:

   Haplotype\-aware Hidden Markov Model for RNA \(HaHMMR\) is a method for detecting copy number variations \(CNVs\) from bulk RNA\-seq data. Additional examples\, documentations\, and details on the method are available at \<https\:\/\/github.com\/kharchenkolab\/hahmmr\/\>.

   :homepage: https://CRAN.R-project.org/package=hahmmr
   :license: MIT / MIT
   :recipe: /`r-hahmmr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hahmmr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hahmmr/meta.yaml>`_

   


.. conda:package:: r-hahmmr

   |downloads_r-hahmmr| |docker_r-hahmmr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-glue: 
   :depends on r-patchwork: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-roptim: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-zoo: 

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

    pixi global install r-hahmmr

to add into an existing workspace instead, run::

    pixi add r-hahmmr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-hahmmr

Alternatively, to install into a new environment, run::

    conda create -n envname r-hahmmr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-hahmmr:<tag>

(see `r-hahmmr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-hahmmr| image:: https://img.shields.io/conda/dn/bioconda/r-hahmmr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hahmmr
   :alt:   (downloads)
.. |docker_r-hahmmr| image:: https://quay.io/repository/biocontainers/r-hahmmr/status
   :target: https://quay.io/repository/biocontainers/r-hahmmr
.. _`r-hahmmr/tags`: https://quay.io/repository/biocontainers/r-hahmmr?tab=tags


.. raw:: html

    <script>
        var package = "r-hahmmr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hahmmr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hahmmr/README.html