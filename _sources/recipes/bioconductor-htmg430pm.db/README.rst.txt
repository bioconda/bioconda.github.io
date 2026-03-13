:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-htmg430pm.db'
.. highlight: bash

bioconductor-htmg430pm.db
=========================

.. conda:recipe:: bioconductor-htmg430pm.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix HT\_MG\-430\_PM Array annotation data \(chip htmg430pm\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/htmg430pm.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-htmg430pm.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430pm.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-htmg430pm.db/meta.yaml>`_

   Affymetrix Affymetrix HT\_MG\-430\_PM Array annotation data \(chip htmg430pm\) assembled using data from public repositories


.. conda:package:: bioconductor-htmg430pm.db

   |downloads_bioconductor-htmg430pm.db| |docker_bioconductor-htmg430pm.db|

   :versions:
      
      

      ``3.13.0-6``,  ``3.13.0-5``,  ``3.13.0-4``,  ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
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

    pixi global install bioconductor-htmg430pm.db

to add into an existing workspace instead, run::

    pixi add bioconductor-htmg430pm.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-htmg430pm.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-htmg430pm.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-htmg430pm.db:<tag>

(see `bioconductor-htmg430pm.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-htmg430pm.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-htmg430pm.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-htmg430pm.db
   :alt:   (downloads)
.. |docker_bioconductor-htmg430pm.db| image:: https://quay.io/repository/biocontainers/bioconductor-htmg430pm.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-htmg430pm.db
.. _`bioconductor-htmg430pm.db/tags`: https://quay.io/repository/biocontainers/bioconductor-htmg430pm.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-htmg430pm.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-htmg430pm.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-htmg430pm.db/README.html