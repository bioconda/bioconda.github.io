:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-iseefier'
.. highlight: bash

bioconductor-iseefier
=====================

.. conda:recipe:: bioconductor-iseefier
   :replaces_section_title:
   :noindex:

   Streamlining the creation of initial states for starting an iSEE instance

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/iSEEfier.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-iseefier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseefier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-iseefier/meta.yaml>`_

   iSEEfier provides a set of functionality to quickly and intuitively create\, inspect\, and combine initial configuration objects. These can be conveniently passed in a straightforward manner to the function call to launch iSEE\(\) with the specified configuration. This package currently works seamlessly with the sets of panels provided by the iSEE and iSEEu packages\, but can be extended to accommodate the usage of any custom panel \(e.g. from iSEEde\, iSEEpathways\, or any panel developed independently by the user\).


.. conda:package:: bioconductor-iseefier

   |downloads_bioconductor-iseefier| |docker_bioconductor-iseefier|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-isee: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-iseeu: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-rlang: 
   :depends on r-visnetwork: 

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

    pixi global install bioconductor-iseefier

to add into an existing workspace instead, run::

    pixi add bioconductor-iseefier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-iseefier

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-iseefier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-iseefier:<tag>

(see `bioconductor-iseefier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-iseefier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-iseefier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-iseefier
   :alt:   (downloads)
.. |docker_bioconductor-iseefier| image:: https://quay.io/repository/biocontainers/bioconductor-iseefier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-iseefier
.. _`bioconductor-iseefier/tags`: https://quay.io/repository/biocontainers/bioconductor-iseefier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-iseefier";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-iseefier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-iseefier/README.html