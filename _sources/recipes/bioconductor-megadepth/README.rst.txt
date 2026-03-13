:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-megadepth'
.. highlight: bash

bioconductor-megadepth
======================

.. conda:recipe:: bioconductor-megadepth
   :replaces_section_title:
   :noindex:

   megadepth\: BigWig and BAM related utilities

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/megadepth.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-megadepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-megadepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-megadepth/meta.yaml>`_

   This package provides an R interface to Megadepth by Christopher Wilks available at https\:\/\/github.com\/ChristopherWilks\/megadepth. It is particularly useful for computing the coverage of a set of genomic regions across bigWig or BAM files. With this package\, you can build base\-pair coverage matrices for regions or annotations of your choice from BigWig files. Megadepth was used to create the raw files provided by https\:\/\/bioconductor.org\/packages\/recount3.


.. conda:package:: bioconductor-megadepth

   |downloads_bioconductor-megadepth| |docker_bioconductor-megadepth|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``,  ``1.0.0-1``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cmdfun: 
   :depends on r-dplyr: 
   :depends on r-fs: 
   :depends on r-magrittr: 
   :depends on r-readr: 
   :depends on r-xfun: 

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

    pixi global install bioconductor-megadepth

to add into an existing workspace instead, run::

    pixi add bioconductor-megadepth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-megadepth

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-megadepth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-megadepth:<tag>

(see `bioconductor-megadepth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-megadepth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-megadepth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-megadepth
   :alt:   (downloads)
.. |docker_bioconductor-megadepth| image:: https://quay.io/repository/biocontainers/bioconductor-megadepth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-megadepth
.. _`bioconductor-megadepth/tags`: https://quay.io/repository/biocontainers/bioconductor-megadepth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-megadepth";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-megadepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-megadepth/README.html