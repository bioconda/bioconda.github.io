:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-edirquery'
.. highlight: bash

bioconductor-edirquery
======================

.. conda:recipe:: bioconductor-edirquery
   :replaces_section_title:
   :noindex:

   Query the EDIR Database For Specific Gene

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EDIRquery.html
   :license: GPL-3
   :recipe: /`bioconductor-edirquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edirquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-edirquery/meta.yaml>`_

   EDIRquery provides a tool to search for genes of interest within the Exome Database of Interspersed Repeats \(EDIR\). A gene name is a required input\, and users can additionally specify repeat sequence lengths\, minimum and maximum distance between sequences\, and whether to allow a 1\-bp mismatch. Outputs include a summary of results by repeat length\, as well as a dataframe of query results. Example data provided includes a subset of the data for the gene GAA \(ENSG00000171298\). To query the full database requires providing a path to the downloaded database files as a parameter.


.. conda:package:: bioconductor-edirquery

   |downloads_bioconductor-edirquery| |docker_bioconductor-edirquery|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-readr: ``>=2.1.2``
   :depends on r-tibble: ``>=3.1.6``
   :depends on r-tictoc: ``>=1.0.1``

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

    pixi global install bioconductor-edirquery

to add into an existing workspace instead, run::

    pixi add bioconductor-edirquery

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-edirquery

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-edirquery

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-edirquery:<tag>

(see `bioconductor-edirquery/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-edirquery| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-edirquery.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-edirquery
   :alt:   (downloads)
.. |docker_bioconductor-edirquery| image:: https://quay.io/repository/biocontainers/bioconductor-edirquery/status
   :target: https://quay.io/repository/biocontainers/bioconductor-edirquery
.. _`bioconductor-edirquery/tags`: https://quay.io/repository/biocontainers/bioconductor-edirquery?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-edirquery";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-edirquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-edirquery/README.html