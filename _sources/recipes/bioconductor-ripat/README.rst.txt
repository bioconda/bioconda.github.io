:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ripat'
.. highlight: bash

bioconductor-ripat
==================

.. conda:recipe:: bioconductor-ripat
   :replaces_section_title:
   :noindex:

   Retroviral Integration Pattern Analysis Tool \(RIPAT\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RIPAT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ripat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ripat/meta.yaml>`_

   RIPAT is developed as an R package for retroviral integration sites annotation and distribution analysis. RIPAT needs local alignment results from BLAST and BLAT. Specific input format is depicted in RIPAT manual. RIPAT provides RV integration pattern analysis result as forms of R objects\, excel file with multiple sheets and plots.


.. conda:package:: bioconductor-ripat

   |downloads_bioconductor-ripat| |docker_bioconductor-ripat|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-karyoploter: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-regioner: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: ``>=3.1.0``
   :depends on r-openxlsx: ``>=4.1.4``
   :depends on r-plyr: ``>=1.8.4``
   :depends on r-stringr: ``>=1.3.1``

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

    pixi global install bioconductor-ripat

to add into an existing workspace instead, run::

    pixi add bioconductor-ripat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ripat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ripat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ripat:<tag>

(see `bioconductor-ripat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ripat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ripat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ripat
   :alt:   (downloads)
.. |docker_bioconductor-ripat| image:: https://quay.io/repository/biocontainers/bioconductor-ripat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ripat
.. _`bioconductor-ripat/tags`: https://quay.io/repository/biocontainers/bioconductor-ripat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ripat";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ripat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ripat/README.html