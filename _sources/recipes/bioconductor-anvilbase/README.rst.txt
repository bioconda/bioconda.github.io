:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilbase'
.. highlight: bash

bioconductor-anvilbase
======================

.. conda:recipe:: bioconductor-anvilbase
   :replaces_section_title:
   :noindex:

   Generic functions for interacting with the AnVIL ecosystem

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnVILBase.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilbase/meta.yaml>`_

   Provides generic functions for interacting with the AnVIL ecosystem. Packages that use either GCP or Azure in AnVIL are built on top of AnVILBase. Extension packages will provide methods for interacting with other cloud providers.


.. conda:package:: bioconductor-anvilbase

   |downloads_bioconductor-anvilbase| |docker_bioconductor-anvilbase|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-httr: 
   :depends on r-httr2: 
   :depends on r-jsonlite: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-anvilbase

to add into an existing workspace instead, run::

    pixi add bioconductor-anvilbase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-anvilbase

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-anvilbase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-anvilbase:<tag>

(see `bioconductor-anvilbase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-anvilbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilbase
   :alt:   (downloads)
.. |docker_bioconductor-anvilbase| image:: https://quay.io/repository/biocontainers/bioconductor-anvilbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilbase
.. _`bioconductor-anvilbase/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilbase";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilbase/README.html