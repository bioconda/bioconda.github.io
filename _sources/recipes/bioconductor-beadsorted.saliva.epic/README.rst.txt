:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-beadsorted.saliva.epic'
.. highlight: bash

bioconductor-beadsorted.saliva.epic
===================================

.. conda:recipe:: bioconductor-beadsorted.saliva.epic
   :replaces_section_title:
   :noindex:

   Illumina EPIC data on BeadSorted child saliva cells

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/BeadSorted.Saliva.EPIC.html
   :license: GPL-3
   :recipe: /`bioconductor-beadsorted.saliva.epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadsorted.saliva.epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-beadsorted.saliva.epic/meta.yaml>`_

   Raw data objects used to estimate saliva cell proportion estimates in ewastools. The FlowSorted.Saliva.EPIC object is constructed from samples assayed by Lauren Middleton et. al. \(2021\).


.. conda:package:: bioconductor-beadsorted.saliva.epic

   |downloads_bioconductor-beadsorted.saliva.epic| |docker_bioconductor-beadsorted.saliva.epic|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0``
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

    pixi global install bioconductor-beadsorted.saliva.epic

to add into an existing workspace instead, run::

    pixi add bioconductor-beadsorted.saliva.epic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-beadsorted.saliva.epic

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-beadsorted.saliva.epic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-beadsorted.saliva.epic:<tag>

(see `bioconductor-beadsorted.saliva.epic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-beadsorted.saliva.epic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-beadsorted.saliva.epic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-beadsorted.saliva.epic
   :alt:   (downloads)
.. |docker_bioconductor-beadsorted.saliva.epic| image:: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic
.. _`bioconductor-beadsorted.saliva.epic/tags`: https://quay.io/repository/biocontainers/bioconductor-beadsorted.saliva.epic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-beadsorted.saliva.epic";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-beadsorted.saliva.epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-beadsorted.saliva.epic/README.html