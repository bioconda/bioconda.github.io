:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-octad.db'
.. highlight: bash

bioconductor-octad.db
=====================

.. conda:recipe:: bioconductor-octad.db
   :replaces_section_title:
   :noindex:

   Open Cancer TherApeutic Discovery \(OCTAD\) database

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/octad.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-octad.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad.db/meta.yaml>`_

   Open Cancer TherApeutic Discovery \(OCTAD\) package implies sRGES approach for the drug discovery. The essential idea is to identify drugs that reverse the gene expression signature of a disease by tamping down over\-expressed genes and stimulating weakly expressed ones. The following package contains all required precomputed data for whole OCTAD pipeline computation.


.. conda:package:: bioconductor-octad.db

   |downloads_bioconductor-octad.db| |docker_bioconductor-octad.db|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-octad.db

to add into an existing workspace instead, run::

    pixi add bioconductor-octad.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-octad.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-octad.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-octad.db:<tag>

(see `bioconductor-octad.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-octad.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-octad.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-octad.db
   :alt:   (downloads)
.. |docker_bioconductor-octad.db| image:: https://quay.io/repository/biocontainers/bioconductor-octad.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-octad.db
.. _`bioconductor-octad.db/tags`: https://quay.io/repository/biocontainers/bioconductor-octad.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-octad.db";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-octad.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-octad.db/README.html