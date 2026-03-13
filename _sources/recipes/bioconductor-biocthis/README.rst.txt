:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocthis'
.. highlight: bash

bioconductor-biocthis
=====================

.. conda:recipe:: bioconductor-biocthis
   :replaces_section_title:
   :noindex:

   Automate package and project setup for Bioconductor packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biocthis.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocthis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocthis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocthis/meta.yaml>`_

   This package expands the usethis package with the goal of helping automate the process of creating R packages for Bioconductor or making them Bioconductor\-friendly.


.. conda:package:: bioconductor-biocthis

   |downloads_bioconductor-biocthis| |docker_bioconductor-biocthis|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.3-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.10-0``,  ``1.0.0-1``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-fs: 
   :depends on r-glue: 
   :depends on r-rlang: 
   :depends on r-styler: 
   :depends on r-usethis: ``>=2.0.1``

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

    pixi global install bioconductor-biocthis

to add into an existing workspace instead, run::

    pixi add bioconductor-biocthis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biocthis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biocthis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biocthis:<tag>

(see `bioconductor-biocthis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biocthis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocthis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocthis
   :alt:   (downloads)
.. |docker_bioconductor-biocthis| image:: https://quay.io/repository/biocontainers/bioconductor-biocthis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocthis
.. _`bioconductor-biocthis/tags`: https://quay.io/repository/biocontainers/bioconductor-biocthis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocthis";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.3","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocthis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocthis/README.html