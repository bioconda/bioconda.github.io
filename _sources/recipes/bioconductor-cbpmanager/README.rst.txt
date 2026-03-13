:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbpmanager'
.. highlight: bash

bioconductor-cbpmanager
=======================

.. conda:recipe:: bioconductor-cbpmanager
   :replaces_section_title:
   :noindex:

   Generate\, manage\, and edit data and metadata files suitable for the import in cBioPortal for Cancer Genomics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cbpManager.html
   :license: AGPL-3 + file LICENSE
   :recipe: /`bioconductor-cbpmanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbpmanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbpmanager/meta.yaml>`_

   This R package provides an R Shiny application that enables the user to generate\, manage\, and edit data and metadata files suitable for the import in cBioPortal for Cancer Genomics. Create cancer studies and edit its metadata. Upload mutation data of a patient that will be concatenated to the data\_mutation\_extended.txt file of the study. Create and edit clinical patient data\, sample data\, and timeline data. Create custom timeline tracks for patients.


.. conda:package:: bioconductor-cbpmanager

   |downloads_bioconductor-cbpmanager| |docker_bioconductor-cbpmanager|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-htmltools: 
   :depends on r-jsonlite: 
   :depends on r-magrittr: 
   :depends on r-markdown: 
   :depends on r-plyr: 
   :depends on r-rapportools: 
   :depends on r-reticulate: 
   :depends on r-rintrojs: 
   :depends on r-rlang: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinycssloaders: 
   :depends on r-shinydashboard: 
   :depends on r-vroom: 

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

    pixi global install bioconductor-cbpmanager

to add into an existing workspace instead, run::

    pixi add bioconductor-cbpmanager

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cbpmanager

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cbpmanager

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cbpmanager:<tag>

(see `bioconductor-cbpmanager/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cbpmanager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbpmanager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbpmanager
   :alt:   (downloads)
.. |docker_bioconductor-cbpmanager| image:: https://quay.io/repository/biocontainers/bioconductor-cbpmanager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbpmanager
.. _`bioconductor-cbpmanager/tags`: https://quay.io/repository/biocontainers/bioconductor-cbpmanager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbpmanager";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbpmanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbpmanager/README.html