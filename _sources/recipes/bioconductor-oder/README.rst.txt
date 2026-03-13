:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oder'
.. highlight: bash

bioconductor-oder
=================

.. conda:recipe:: bioconductor-oder
   :replaces_section_title:
   :noindex:

   Optimising the Definition of Expressed Regions

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ODER.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-oder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oder/meta.yaml>`_

   The aim of ODER is to identify previously unannotated expressed regions \(ERs\) using RNA\-sequencing data. For this purpose\, ODER defines and optimises the definition of ERs\, then connected these ERs to genes using junction data. In this way\, ODER improves gene annotation. Gene annotation is a staple input of many bioinformatic pipelines and a more complete gene annotation can enable more accurate interpretation of disease associated variants.


.. conda:package:: bioconductor-oder

   |downloads_bioconductor-oder| |docker_bioconductor-oder|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends on bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends on bioconductor-dasper: ``>=1.9.0,<1.10.0``
   :depends on bioconductor-derfinder: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-megadepth: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 
   :depends on r-plyr: 
   :depends on r-purrr: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-oder

to add into an existing workspace instead, run::

    pixi add bioconductor-oder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-oder

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-oder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-oder:<tag>

(see `bioconductor-oder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-oder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oder
   :alt:   (downloads)
.. |docker_bioconductor-oder| image:: https://quay.io/repository/biocontainers/bioconductor-oder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oder
.. _`bioconductor-oder/tags`: https://quay.io/repository/biocontainers/bioconductor-oder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oder";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oder/README.html