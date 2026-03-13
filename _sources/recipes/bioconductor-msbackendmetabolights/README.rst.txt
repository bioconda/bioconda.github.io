:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmetabolights'
.. highlight: bash

bioconductor-msbackendmetabolights
==================================

.. conda:recipe:: bioconductor-msbackendmetabolights
   :replaces_section_title:
   :noindex:

   Retrieve Mass Spectrometry Data from MetaboLights

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsBackendMetaboLights.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmetabolights <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmetabolights>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmetabolights/meta.yaml>`_

   MetaboLights is one of the main public repositories for storage of metabolomics experiments\, which includes analysis results as well as raw data. The MsBackendMetaboLights package provides functionality to retrieve and represent mass spectrometry \(MS\) data from MetaboLights. Data files are downloaded and cached locally avoiding repetitive downloads. MS data from metabolomics experiments can thus be directly and seamlessly integrated into R\-based analysis workflows with the Spectra and MsBackendMetaboLights package.


.. conda:package:: bioconductor-msbackendmetabolights

   |downloads_bioconductor-msbackendmetabolights| |docker_bioconductor-msbackendmetabolights|

   :versions:
      
      

      ``1.4.2-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-progress: 

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

    pixi global install bioconductor-msbackendmetabolights

to add into an existing workspace instead, run::

    pixi add bioconductor-msbackendmetabolights

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msbackendmetabolights

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msbackendmetabolights

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msbackendmetabolights:<tag>

(see `bioconductor-msbackendmetabolights/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msbackendmetabolights| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmetabolights.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmetabolights
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmetabolights| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmetabolights/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmetabolights
.. _`bioconductor-msbackendmetabolights/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmetabolights?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmetabolights";
        var versions = ["1.4.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmetabolights/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmetabolights/README.html