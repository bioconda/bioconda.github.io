:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse13015'
.. highlight: bash

bioconductor-gse13015
=====================

.. conda:recipe:: bioconductor-gse13015
   :replaces_section_title:
   :noindex:

   GEO accession data GSE13015\_GPL6106 as a SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/GSE13015.html
   :license: MIT License
   :recipe: /`bioconductor-gse13015 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse13015>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse13015/meta.yaml>`_

   Microarray expression matrix platform GPL6106 and clinical data for 67 septicemic patients and made them available as GEO accession \[GSE13015\]\(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE13015\). GSE13015 data have been parsed into a SummarizedExperiment object available in ExperimentHub. This data data could be used as an example supporting BloodGen3Module R package.


.. conda:package:: bioconductor-gse13015

   |downloads_bioconductor-gse13015| |docker_bioconductor-gse13015|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-geoquery: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-gse13015

to add into an existing workspace instead, run::

    pixi add bioconductor-gse13015

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gse13015

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gse13015

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gse13015:<tag>

(see `bioconductor-gse13015/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gse13015| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse13015.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse13015
   :alt:   (downloads)
.. |docker_bioconductor-gse13015| image:: https://quay.io/repository/biocontainers/bioconductor-gse13015/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse13015
.. _`bioconductor-gse13015/tags`: https://quay.io/repository/biocontainers/bioconductor-gse13015?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gse13015";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse13015/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse13015/README.html