:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgenometracksdata'
.. highlight: bash

bioconductor-rgenometracksdata
==============================

.. conda:recipe:: bioconductor-rgenometracksdata
   :replaces_section_title:
   :noindex:

   Demonstration Data from rGenomeTracks Package

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/rGenomeTracksData.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-rgenometracksdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracksdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgenometracksdata/meta.yaml>`_

   rGenomeTracksData is a collection of data from pyGenomeTracks project. The purpose of this data is testing and demonstration of rGenomeTracks. This package include 14 sample file from different genomic and epigenomic file format.


.. conda:package:: bioconductor-rgenometracksdata

   |downloads_bioconductor-rgenometracksdata| |docker_bioconductor-rgenometracksdata|

   :versions:
      
      

      ``0.99.0-6``,  ``0.99.0-5``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-1``,  ``0.99.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
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

    pixi global install bioconductor-rgenometracksdata

to add into an existing workspace instead, run::

    pixi add bioconductor-rgenometracksdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgenometracksdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgenometracksdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgenometracksdata:<tag>

(see `bioconductor-rgenometracksdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgenometracksdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgenometracksdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgenometracksdata
   :alt:   (downloads)
.. |docker_bioconductor-rgenometracksdata| image:: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata
.. _`bioconductor-rgenometracksdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rgenometracksdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgenometracksdata";
        var versions = ["0.99.0","0.99.0","0.99.0","0.99.0","0.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgenometracksdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgenometracksdata/README.html