:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilpublish'
.. highlight: bash

bioconductor-anvilpublish
=========================

.. conda:recipe:: bioconductor-anvilpublish
   :replaces_section_title:
   :noindex:

   Publish Packages and Other Resources to AnVIL Workspaces

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnVILPublish.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilpublish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilpublish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilpublish/meta.yaml>`_

   Use this package to create or update AnVIL workspaces from resources such as R \/ Bioconductor packages. The metadata about the package \(e.g.\, select information from the package DESCRIPTION file and from vignette YAML headings\) are used to populate the \'DASHBOARD\'. Vignettes are translated to python notebooks ready for evaluation in AnVIL.


.. conda:package:: bioconductor-anvilpublish

   |downloads_bioconductor-anvilpublish| |docker_bioconductor-anvilpublish|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.0-0``,  ``1.0.0-3``,  ``1.0.0-2``

      

   
   :depends on bioconductor-anvil: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-anvilgcp: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-readr: 
   :depends on r-rmarkdown: 
   :depends on r-whisker: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-anvilpublish

to add into an existing workspace instead, run::

    pixi add bioconductor-anvilpublish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-anvilpublish

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-anvilpublish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-anvilpublish:<tag>

(see `bioconductor-anvilpublish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-anvilpublish| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilpublish.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilpublish
   :alt:   (downloads)
.. |docker_bioconductor-anvilpublish| image:: https://quay.io/repository/biocontainers/bioconductor-anvilpublish/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilpublish
.. _`bioconductor-anvilpublish/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilpublish?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilpublish";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilpublish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilpublish/README.html