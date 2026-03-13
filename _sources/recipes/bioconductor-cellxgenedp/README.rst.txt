:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellxgenedp'
.. highlight: bash

bioconductor-cellxgenedp
========================

.. conda:recipe:: bioconductor-cellxgenedp
   :replaces_section_title:
   :noindex:

   Discover and Access Single Cell Data Sets in the CELLxGENE Data Portal

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellxgenedp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellxgenedp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellxgenedp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellxgenedp/meta.yaml>`_

   The cellxgene data portal \(https\:\/\/cellxgene.cziscience.com\/\) provides a graphical user interface to collections of single\-cell sequence data processed in standard ways to \'count matrix\' summaries. The cellxgenedp package provides an alternative\, R\-based inteface\, allowind data discovery\, viewing\, and downloading.


.. conda:package:: bioconductor-cellxgenedp

   |downloads_bioconductor-cellxgenedp| |docker_bioconductor-cellxgenedp|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-curl: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-httr: 
   :depends on r-rjsoncons: 
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

    pixi global install bioconductor-cellxgenedp

to add into an existing workspace instead, run::

    pixi add bioconductor-cellxgenedp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellxgenedp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellxgenedp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellxgenedp:<tag>

(see `bioconductor-cellxgenedp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellxgenedp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellxgenedp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellxgenedp
   :alt:   (downloads)
.. |docker_bioconductor-cellxgenedp| image:: https://quay.io/repository/biocontainers/bioconductor-cellxgenedp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellxgenedp
.. _`bioconductor-cellxgenedp/tags`: https://quay.io/repository/biocontainers/bioconductor-cellxgenedp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellxgenedp";
        var versions = ["1.14.0","1.10.0","1.6.1","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellxgenedp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellxgenedp/README.html