:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbhmdb'
.. highlight: bash

bioconductor-biodbhmdb
======================

.. conda:recipe:: bioconductor-biodbhmdb
   :replaces_section_title:
   :noindex:

   biodbHmdb\, a library for connecting to the HMDB Database

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biodbHmdb.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbhmdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbhmdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbhmdb/meta.yaml>`_

   The biodbHmdb library is an extension of the biodb framework package that provides access to the HMDB Metabolites database. It allows to download the whole HMDB Metabolites database locally\, access entries and search for entries by name or description. A future version of this package will also include a search by mass and mass spectra annotation.


.. conda:package:: bioconductor-biodbhmdb

   |downloads_bioconductor-biodbhmdb| |docker_bioconductor-biodbhmdb|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biodb: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-biodb: ``>=1.14.0,<1.15.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-r6: 
   :depends on r-rcpp: 
   :depends on r-testthat: 
   :depends on r-zip: 

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

    pixi global install bioconductor-biodbhmdb

to add into an existing workspace instead, run::

    pixi add bioconductor-biodbhmdb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biodbhmdb

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biodbhmdb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biodbhmdb:<tag>

(see `bioconductor-biodbhmdb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biodbhmdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbhmdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbhmdb
   :alt:   (downloads)
.. |docker_bioconductor-biodbhmdb| image:: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb
.. _`bioconductor-biodbhmdb/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbhmdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbhmdb";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbhmdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbhmdb/README.html