:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muleadata'
.. highlight: bash

bioconductor-muleadata
======================

.. conda:recipe:: bioconductor-muleadata
   :replaces_section_title:
   :noindex:

   Genes Sets for Functional Enrichment Analysis with the \'mulea\' R Package

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/muleaData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-muleadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muleadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muleadata/meta.yaml>`_

   ExperimentHubData package for the \'mulea\' comprehensive overrepresentation and functional enrichment analyser R package. Here we provide ontologies \(gene sets\) in a data.frame for 27 different organisms\, ranging from Escherichia coli to human\, all acquired from publicly available data sources. Each ontology is provided with multiple gene and protein identifiers. Please see the NEWS file for a list of changes in each version.


.. conda:package:: bioconductor-muleadata

   |downloads_bioconductor-muleadata| |docker_bioconductor-muleadata|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
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

    pixi global install bioconductor-muleadata

to add into an existing workspace instead, run::

    pixi add bioconductor-muleadata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-muleadata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-muleadata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-muleadata:<tag>

(see `bioconductor-muleadata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-muleadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muleadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muleadata
   :alt:   (downloads)
.. |docker_bioconductor-muleadata| image:: https://quay.io/repository/biocontainers/bioconductor-muleadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muleadata
.. _`bioconductor-muleadata/tags`: https://quay.io/repository/biocontainers/bioconductor-muleadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-muleadata";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muleadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muleadata/README.html