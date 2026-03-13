:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geotcgadata'
.. highlight: bash

bioconductor-geotcgadata
========================

.. conda:recipe:: bioconductor-geotcgadata
   :replaces_section_title:
   :noindex:

   Processing Various Types of Data on GEO and TCGA

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeoTcgaData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geotcgadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geotcgadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geotcgadata/meta.yaml>`_

   Gene Expression Omnibus\(GEO\) and The Cancer Genome Atlas \(TCGA\) provide us with a wealth of data\, such as RNA\-seq\, DNA Methylation\, SNP and Copy number variation data. It\'s easy to download data from TCGA using the gdc tool\, but processing these data into a format suitable for bioinformatics analysis requires more work. This R package was developed to handle these data.


.. conda:package:: bioconductor-geotcgadata

   |downloads_bioconductor-geotcgadata| |docker_bioconductor-geotcgadata|

   :versions:
      
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``

      

   
   :depends on bioconductor-cqn: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-topconfects: ``>=1.26.0,<1.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-plyr: 

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

    pixi global install bioconductor-geotcgadata

to add into an existing workspace instead, run::

    pixi add bioconductor-geotcgadata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-geotcgadata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-geotcgadata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-geotcgadata:<tag>

(see `bioconductor-geotcgadata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-geotcgadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geotcgadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geotcgadata
   :alt:   (downloads)
.. |docker_bioconductor-geotcgadata| image:: https://quay.io/repository/biocontainers/bioconductor-geotcgadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geotcgadata
.. _`bioconductor-geotcgadata/tags`: https://quay.io/repository/biocontainers/bioconductor-geotcgadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geotcgadata";
        var versions = ["2.10.0","2.6.0","2.2.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geotcgadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geotcgadata/README.html