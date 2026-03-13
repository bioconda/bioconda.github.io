:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytomem'
.. highlight: bash

bioconductor-cytomem
====================

.. conda:recipe:: bioconductor-cytomem
   :replaces_section_title:
   :noindex:

   Marker Enrichment Modeling \(MEM\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cytoMEM.html
   :license: GPL-3
   :recipe: /`bioconductor-cytomem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytomem/meta.yaml>`_

   MEM\, Marker Enrichment Modeling\, automatically generates and displays quantitative labels for cell populations that have been identified from single\-cell data. The input for MEM is a dataset that has pre\-clustered or pre\-gated populations with cells in rows and features in columns. Labels convey a list of measured features and the features\' levels of relative enrichment on each population. MEM can be applied to a wide variety of data types and can compare between MEM labels from flow cytometry\, mass cytometry\, single cell RNA\-seq\, and spectral flow cytometry using RMSD.


.. conda:package:: bioconductor-cytomem

   |downloads_bioconductor-cytomem| |docker_bioconductor-cytomem|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-cytomem

to add into an existing workspace instead, run::

    pixi add bioconductor-cytomem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cytomem

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cytomem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cytomem:<tag>

(see `bioconductor-cytomem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cytomem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytomem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytomem
   :alt:   (downloads)
.. |docker_bioconductor-cytomem| image:: https://quay.io/repository/biocontainers/bioconductor-cytomem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytomem
.. _`bioconductor-cytomem/tags`: https://quay.io/repository/biocontainers/bioconductor-cytomem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytomem";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytomem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytomem/README.html