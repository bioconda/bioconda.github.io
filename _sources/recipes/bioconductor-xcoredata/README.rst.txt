:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xcoredata'
.. highlight: bash

bioconductor-xcoredata
======================

.. conda:recipe:: bioconductor-xcoredata
   :replaces_section_title:
   :noindex:

   data package for xcore

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/xcoredata.html
   :license: GPL-2
   :recipe: /`bioconductor-xcoredata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcoredata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcoredata/meta.yaml>`_

   Provides data to use with xcore package.


.. conda:package:: bioconductor-xcoredata

   |downloads_bioconductor-xcoredata| |docker_bioconductor-xcoredata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
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

    pixi global install bioconductor-xcoredata

to add into an existing workspace instead, run::

    pixi add bioconductor-xcoredata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-xcoredata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-xcoredata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-xcoredata:<tag>

(see `bioconductor-xcoredata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-xcoredata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcoredata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xcoredata
   :alt:   (downloads)
.. |docker_bioconductor-xcoredata| image:: https://quay.io/repository/biocontainers/bioconductor-xcoredata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcoredata
.. _`bioconductor-xcoredata/tags`: https://quay.io/repository/biocontainers/bioconductor-xcoredata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xcoredata";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcoredata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcoredata/README.html