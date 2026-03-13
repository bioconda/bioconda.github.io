:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpastainr'
.. highlight: bash

bioconductor-hpastainr
======================

.. conda:recipe:: bioconductor-hpastainr
   :replaces_section_title:
   :noindex:

   Queries the Human Protein Atlas Staining Data for Multiple Proteins and Genes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/HPAStainR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hpastainr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpastainr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpastainr/meta.yaml>`_

   This package is built around the HPAStainR function. The purpose of the HPAStainR function is to query the visual staining data in the Human Protein Atlas to return a table of staining ranked cell types. The function also has multiple arguments to personalize to output as well to include cancer data\, csv readable names\, modify the confidence levels of the results and more. The other functions exist exclusively to easily acquire the data required to run HPAStainR.


.. conda:package:: bioconductor-hpastainr

   |downloads_bioconductor-hpastainr| |docker_bioconductor-hpastainr|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-1``

      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-scales: 
   :depends on r-shiny: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-hpastainr

to add into an existing workspace instead, run::

    pixi add bioconductor-hpastainr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hpastainr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hpastainr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hpastainr:<tag>

(see `bioconductor-hpastainr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hpastainr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpastainr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpastainr
   :alt:   (downloads)
.. |docker_bioconductor-hpastainr| image:: https://quay.io/repository/biocontainers/bioconductor-hpastainr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpastainr
.. _`bioconductor-hpastainr/tags`: https://quay.io/repository/biocontainers/bioconductor-hpastainr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpastainr";
        var versions = ["1.9.0","1.8.0","1.4.0","1.2.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpastainr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpastainr/README.html