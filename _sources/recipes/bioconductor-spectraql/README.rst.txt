:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spectraql'
.. highlight: bash

bioconductor-spectraql
======================

.. conda:recipe:: bioconductor-spectraql
   :replaces_section_title:
   :noindex:

   MassQL support for Spectra

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpectraQL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spectraql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraql/meta.yaml>`_

   The Mass Spec Query Language \(MassQL\) is a domain\-specific language enabling to express a query and retrieve mass spectrometry \(MS\) data in a more natural and understandable way for MS users. It is inspired by SQL and is by design programming language agnostic. The SpectraQL package adds support for the MassQL query language to R\, in particular to MS data represented by Spectra objects. Users can thus apply MassQL expressions to analyze and retrieve specific data from Spectra objects.


.. conda:package:: bioconductor-spectraql

   |downloads_bioconductor-spectraql| |docker_bioconductor-spectraql|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-spectraql

to add into an existing workspace instead, run::

    pixi add bioconductor-spectraql

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spectraql

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spectraql

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spectraql:<tag>

(see `bioconductor-spectraql/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spectraql| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spectraql.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spectraql
   :alt:   (downloads)
.. |docker_bioconductor-spectraql| image:: https://quay.io/repository/biocontainers/bioconductor-spectraql/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spectraql
.. _`bioconductor-spectraql/tags`: https://quay.io/repository/biocontainers/bioconductor-spectraql?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spectraql";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spectraql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spectraql/README.html