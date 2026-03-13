:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alabaster.schemas'
.. highlight: bash

bioconductor-alabaster.schemas
==============================

.. conda:recipe:: bioconductor-alabaster.schemas
   :replaces_section_title:
   :noindex:

   Schemas for the Alabaster Framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/alabaster.schemas.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-alabaster.schemas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.schemas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alabaster.schemas/meta.yaml>`_

   Stores all schemas required by various alabaster.\* packages. No computation should be performed by this package\, as that is handled by alabaster.base. We use a separate package instead of storing the schemas in alabaster.base itself\, to avoid conflating management of the schemas with code maintenence.


.. conda:package:: bioconductor-alabaster.schemas

   |downloads_bioconductor-alabaster.schemas| |docker_bioconductor-alabaster.schemas|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
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

    pixi global install bioconductor-alabaster.schemas

to add into an existing workspace instead, run::

    pixi add bioconductor-alabaster.schemas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-alabaster.schemas

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-alabaster.schemas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-alabaster.schemas:<tag>

(see `bioconductor-alabaster.schemas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-alabaster.schemas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alabaster.schemas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alabaster.schemas
   :alt:   (downloads)
.. |docker_bioconductor-alabaster.schemas| image:: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas
.. _`bioconductor-alabaster.schemas/tags`: https://quay.io/repository/biocontainers/bioconductor-alabaster.schemas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-alabaster.schemas";
        var versions = ["1.10.0","1.6.0","1.2.0","1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alabaster.schemas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alabaster.schemas/README.html