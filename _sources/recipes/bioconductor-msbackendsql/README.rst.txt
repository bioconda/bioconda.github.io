:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendsql'
.. highlight: bash

bioconductor-msbackendsql
=========================

.. conda:recipe:: bioconductor-msbackendsql
   :replaces_section_title:
   :noindex:

   SQL\-based Mass Spectrometry Data Backend

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsBackendSql.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendsql <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendsql>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendsql/meta.yaml>`_

   SQL\-based mass spectrometry \(MS\) data backend supporting also storange and handling of very large data sets. Objects from this package are supposed to be used with the Spectra Bioconductor package. Through the MsBackendSql with its minimal memory footprint\, this package thus provides an alternative MS data representation for very large or remote MS data sets.


.. conda:package:: bioconductor-msbackendsql

   |downloads_bioconductor-msbackendsql| |docker_bioconductor-msbackendsql|

   :versions:
      
      

      ``1.10.1-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dbi: 
   :depends on r-fastmatch: 
   :depends on r-progress: 
   :depends on r-stringi: 

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

    pixi global install bioconductor-msbackendsql

to add into an existing workspace instead, run::

    pixi add bioconductor-msbackendsql

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msbackendsql

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msbackendsql

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msbackendsql:<tag>

(see `bioconductor-msbackendsql/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msbackendsql| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendsql.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendsql
   :alt:   (downloads)
.. |docker_bioconductor-msbackendsql| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendsql/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendsql
.. _`bioconductor-msbackendsql/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendsql?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendsql";
        var versions = ["1.10.1","1.6.0","1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendsql/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendsql/README.html