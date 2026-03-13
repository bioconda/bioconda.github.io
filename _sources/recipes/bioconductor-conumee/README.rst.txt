:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-conumee'
.. highlight: bash

bioconductor-conumee
====================

.. conda:recipe:: bioconductor-conumee
   :replaces_section_title:
   :noindex:

   Enhanced copy\-number variation analysis using Illumina DNA methylation arrays

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/conumee.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-conumee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conumee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-conumee/meta.yaml>`_

   This package contains a set of processing and plotting methods for performing copy\-number variation \(CNV\) analysis using Illumina 450k or EPIC methylation arrays.


.. conda:package:: bioconductor-conumee

   |downloads_bioconductor-conumee| |docker_bioconductor-conumee|

   :versions:
      
      

      ``1.32.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``

      

   
   :depends on bioconductor-dnacopy: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends on bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends on bioconductor-illuminahumanmethylationepicanno.ilm10b2.hg19: ``>=0.6.0,<0.7.0``
   :depends on bioconductor-illuminahumanmethylationepicmanifest: ``>=0.3.0,<0.4.0``
   :depends on bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends on bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``

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

    pixi global install bioconductor-conumee

to add into an existing workspace instead, run::

    pixi add bioconductor-conumee

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-conumee

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-conumee

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-conumee:<tag>

(see `bioconductor-conumee/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-conumee| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-conumee.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-conumee
   :alt:   (downloads)
.. |docker_bioconductor-conumee| image:: https://quay.io/repository/biocontainers/bioconductor-conumee/status
   :target: https://quay.io/repository/biocontainers/bioconductor-conumee
.. _`bioconductor-conumee/tags`: https://quay.io/repository/biocontainers/bioconductor-conumee?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-conumee";
        var versions = ["1.32.0","1.26.0","1.24.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-conumee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-conumee/README.html