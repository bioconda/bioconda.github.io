:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-healthycontrolspresencechecker'
.. highlight: bash

bioconductor-healthycontrolspresencechecker
===========================================

.. conda:recipe:: bioconductor-healthycontrolspresencechecker
   :replaces_section_title:
   :noindex:

   Dowloads A Gene Expression Dataset From GEO And Checks If It Contains Data Of Healthy Controls Or Not

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/healthyControlsPresenceChecker.html
   :license: GPL-3
   :recipe: /`bioconductor-healthycontrolspresencechecker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthycontrolspresencechecker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-healthycontrolspresencechecker/meta.yaml>`_

   A function that reads in the GEO accession code of a gene expression dataset\, retrieves its data from GEO\, and checks if data of healthy controls are present in the dataset. It returns true if healthy controls data are found\, and false otherwise. GEO\: Gene Expression Omnibus. ID\: identifier code. The GEO datasets are downloaded from the URL \<https\:\/\/ftp.ncbi.nlm.nih.gov\/geo\/series\/\>.


.. conda:package:: bioconductor-healthycontrolspresencechecker

   |downloads_bioconductor-healthycontrolspresencechecker| |docker_bioconductor-healthycontrolspresencechecker|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-geoquery: ``>=2.78.0,<2.79.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-geneexpressionfromgeo: 
   :depends on r-magrittr: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-healthycontrolspresencechecker

to add into an existing workspace instead, run::

    pixi add bioconductor-healthycontrolspresencechecker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-healthycontrolspresencechecker

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-healthycontrolspresencechecker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-healthycontrolspresencechecker:<tag>

(see `bioconductor-healthycontrolspresencechecker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-healthycontrolspresencechecker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-healthycontrolspresencechecker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-healthycontrolspresencechecker
   :alt:   (downloads)
.. |docker_bioconductor-healthycontrolspresencechecker| image:: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker
.. _`bioconductor-healthycontrolspresencechecker/tags`: https://quay.io/repository/biocontainers/bioconductor-healthycontrolspresencechecker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-healthycontrolspresencechecker";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-healthycontrolspresencechecker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-healthycontrolspresencechecker/README.html