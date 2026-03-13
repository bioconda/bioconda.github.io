:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-octad'
.. highlight: bash

bioconductor-octad
==================

.. conda:recipe:: bioconductor-octad
   :replaces_section_title:
   :noindex:

   Open Cancer TherApeutic Discovery \(OCTAD\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/octad.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-octad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-octad/meta.yaml>`_

   OCTAD provides a platform for virtually screening compounds targeting precise cancer patient groups. The essential idea is to identify drugs that reverse the gene expression signature of disease by tamping down over\-expressed genes and stimulating weakly expressed ones. The package offers deep\-learning based reference tissue selection\, disease gene expression signature creation\, pathway enrichment analysis\, drug reversal potency scoring\, cancer cell line selection\, drug enrichment analysis and in silico hit validation. It currently covers \~20\,000 patient tissue samples covering 50 cancer types\, and expression profiles for \~12\,000 distinct compounds.


.. conda:package:: bioconductor-octad

   |downloads_bioconductor-octad| |docker_bioconductor-octad|

   :versions:
      
      

      ``1.12.0-1``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edaseq: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-gsva: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-octad.db: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-ruvseq: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-httr: 
   :depends on r-magrittr: 
   :depends on r-plotly: 
   :depends on r-qpdf: 
   :depends on r-reshape2: 
   :depends on r-rfast: 

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

    pixi global install bioconductor-octad

to add into an existing workspace instead, run::

    pixi add bioconductor-octad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-octad

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-octad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-octad:<tag>

(see `bioconductor-octad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-octad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-octad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-octad
   :alt:   (downloads)
.. |docker_bioconductor-octad| image:: https://quay.io/repository/biocontainers/bioconductor-octad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-octad
.. _`bioconductor-octad/tags`: https://quay.io/repository/biocontainers/bioconductor-octad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-octad";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-octad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-octad/README.html