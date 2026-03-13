:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexmadata'
.. highlight: bash

bioconductor-dexmadata
======================

.. conda:recipe:: bioconductor-dexmadata
   :replaces_section_title:
   :noindex:

   Data package for DExMA package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/DExMAdata.html
   :license: GPL-2
   :recipe: /`bioconductor-dexmadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexmadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexmadata/meta.yaml>`_

   Data objects needed to allSameID\(\) function of DExMA package. There are also some objects that are necessary to be able to apply the examples of the DExMA package\, which illustrate package functionality.


.. conda:package:: bioconductor-dexmadata

   |downloads_bioconductor-dexmadata| |docker_bioconductor-dexmadata|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
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

    pixi global install bioconductor-dexmadata

to add into an existing workspace instead, run::

    pixi add bioconductor-dexmadata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dexmadata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dexmadata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dexmadata:<tag>

(see `bioconductor-dexmadata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dexmadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexmadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexmadata
   :alt:   (downloads)
.. |docker_bioconductor-dexmadata| image:: https://quay.io/repository/biocontainers/bioconductor-dexmadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexmadata
.. _`bioconductor-dexmadata/tags`: https://quay.io/repository/biocontainers/bioconductor-dexmadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dexmadata";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexmadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexmadata/README.html