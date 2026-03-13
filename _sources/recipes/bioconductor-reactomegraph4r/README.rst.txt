:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomegraph4r'
.. highlight: bash

bioconductor-reactomegraph4r
============================

.. conda:recipe:: bioconductor-reactomegraph4r
   :replaces_section_title:
   :noindex:

   Interface for the Reactome Graph Database

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ReactomeGraph4R.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-reactomegraph4r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegraph4r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomegraph4r/meta.yaml>`_

   Pathways\, reactions\, and biological entities in Reactome knowledge are systematically represented as an ordered network. Instances are represented as nodes and relationships between instances as edges\; they are all stored in the Reactome Graph Database. This package serves as an interface to query the interconnected data from a local Neo4j database\, with the aim of minimizing the usage of Neo4j Cypher queries.


.. conda:package:: bioconductor-reactomegraph4r

   |downloads_bioconductor-reactomegraph4r| |docker_bioconductor-reactomegraph4r|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-reactomecontentservice4r: ``>=1.10.0,<1.11.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-getpass: 
   :depends on r-jsonlite: 
   :depends on r-magrittr: 
   :depends on r-neo4r: 
   :depends on r-purrr: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-reactomegraph4r

to add into an existing workspace instead, run::

    pixi add bioconductor-reactomegraph4r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-reactomegraph4r

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-reactomegraph4r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-reactomegraph4r:<tag>

(see `bioconductor-reactomegraph4r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-reactomegraph4r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomegraph4r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomegraph4r
   :alt:   (downloads)
.. |docker_bioconductor-reactomegraph4r| image:: https://quay.io/repository/biocontainers/bioconductor-reactomegraph4r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomegraph4r
.. _`bioconductor-reactomegraph4r/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomegraph4r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomegraph4r";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomegraph4r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomegraph4r/README.html