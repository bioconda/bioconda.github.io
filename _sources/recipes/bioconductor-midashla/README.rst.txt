:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-midashla'
.. highlight: bash

bioconductor-midashla
=====================

.. conda:recipe:: bioconductor-midashla
   :replaces_section_title:
   :noindex:

   R package for immunogenomics data handling and association analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/midasHLA.html
   :license: MIT + file LICENCE
   :recipe: /`bioconductor-midashla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-midashla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-midashla/meta.yaml>`_

   MiDAS is a R package for immunogenetics data transformation and statistical analysis. MiDAS accepts input data in the form of HLA alleles and KIR types\, and can transform it into biologically meaningful variables\, enabling HLA amino acid fine mapping\, analyses of HLA evolutionary divergence\, KIR gene presence\, as well as validated HLA\-KIR interactions. Further\, it allows comprehensive statistical association analysis workflows with phenotypes of diverse measurement scales. MiDAS closes a gap between the inference of immunogenetic variation and its efficient utilization to make relevant discoveries related to T cell\, Natural Killer cell\, and disease biology.


.. conda:package:: bioconductor-midashla

   |downloads_bioconductor-midashla| |docker_bioconductor-midashla|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: ``>=0.2.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-broom: ``>=0.5.1``
   :depends on r-dplyr: ``>=0.8.0.1``
   :depends on r-formattable: ``>=0.2.0.1``
   :depends on r-hardyweinberg: ``>=1.6.3``
   :depends on r-kableextra: ``>=1.1.0``
   :depends on r-knitr: ``>=1.21``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-qdaptools: ``>=1.3.3``
   :depends on r-rlang: ``>=0.3.1``
   :depends on r-stringi: ``>=1.2.4``
   :depends on r-tibble: ``>=2.0.1``

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

    pixi global install bioconductor-midashla

to add into an existing workspace instead, run::

    pixi add bioconductor-midashla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-midashla

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-midashla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-midashla:<tag>

(see `bioconductor-midashla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-midashla| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-midashla.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-midashla
   :alt:   (downloads)
.. |docker_bioconductor-midashla| image:: https://quay.io/repository/biocontainers/bioconductor-midashla/status
   :target: https://quay.io/repository/biocontainers/bioconductor-midashla
.. _`bioconductor-midashla/tags`: https://quay.io/repository/biocontainers/bioconductor-midashla?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-midashla";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-midashla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-midashla/README.html