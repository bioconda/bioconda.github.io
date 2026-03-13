:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrimport'
.. highlight: bash

bioconductor-gdrimport
======================

.. conda:recipe:: bioconductor-gdrimport
   :replaces_section_title:
   :noindex:

   Package for handling the import of dose\-response data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gDRimport.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrimport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrimport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrimport/meta.yaml>`_

   The package is a part of the gDR suite. It helps to prepare raw drug response data for downstream processing. It mainly contains helper functions for importing\/loading\/validating dose\-response data provided in different file formats.


.. conda:package:: bioconductor-gdrimport

   |downloads_bioconductor-gdrimport| |docker_bioconductor-gdrimport|

   :versions:
      
      

      ``1.8.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-bumpymatrix: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-coregx: ``>=2.14.0,<2.15.0``
   :depends on bioconductor-gdrutils: ``>=1.8.0,<1.9.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-pharmacogx: ``>=3.14.0,<3.15.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-data.table: 
   :depends on r-futile.logger: 
   :depends on r-magrittr: 
   :depends on r-openxlsx: 
   :depends on r-readxl: 
   :depends on r-rio: 
   :depends on r-stringi: 
   :depends on r-tibble: 
   :depends on r-xml: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-gdrimport

to add into an existing workspace instead, run::

    pixi add bioconductor-gdrimport

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gdrimport

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gdrimport

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gdrimport:<tag>

(see `bioconductor-gdrimport/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gdrimport| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrimport.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrimport
   :alt:   (downloads)
.. |docker_bioconductor-gdrimport| image:: https://quay.io/repository/biocontainers/bioconductor-gdrimport/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrimport
.. _`bioconductor-gdrimport/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrimport?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrimport";
        var versions = ["1.8.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrimport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrimport/README.html