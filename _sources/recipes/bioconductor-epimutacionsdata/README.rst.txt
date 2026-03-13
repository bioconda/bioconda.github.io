:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epimutacionsdata'
.. highlight: bash

bioconductor-epimutacionsdata
=============================

.. conda:recipe:: bioconductor-epimutacionsdata
   :replaces_section_title:
   :noindex:

   Data for epimutacions package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/epimutacionsData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-epimutacionsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacionsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimutacionsdata/meta.yaml>`_

   This package includes the data necessary to run functions and examples in epimutacions package. Collection of DNA methylation data. The package contains 2 datasets\: \(1\) Control \( GEO\: GSE104812\)\, \(GEO\: GSE97362\) case samples\; and \(2\) reference panel \(GEO\: GSE127824\). It also contains candidate regions to be epimutations in 450k methylation arrays.


.. conda:package:: bioconductor-epimutacionsdata

   |downloads_bioconductor-epimutacionsdata| |docker_bioconductor-epimutacionsdata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
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

    pixi global install bioconductor-epimutacionsdata

to add into an existing workspace instead, run::

    pixi add bioconductor-epimutacionsdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epimutacionsdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epimutacionsdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epimutacionsdata:<tag>

(see `bioconductor-epimutacionsdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epimutacionsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epimutacionsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epimutacionsdata
   :alt:   (downloads)
.. |docker_bioconductor-epimutacionsdata| image:: https://quay.io/repository/biocontainers/bioconductor-epimutacionsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epimutacionsdata
.. _`bioconductor-epimutacionsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-epimutacionsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epimutacionsdata";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epimutacionsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epimutacionsdata/README.html