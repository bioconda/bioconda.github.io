:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-simplifyenrichment'
.. highlight: bash

bioconductor-simplifyenrichment
===============================

.. conda:recipe:: bioconductor-simplifyenrichment
   :replaces_section_title:
   :noindex:

   Simplify Functional Enrichment Results

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/simplifyEnrichment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-simplifyenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simplifyenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-simplifyenrichment/meta.yaml>`_

   A new clustering algorithm\, \"binary cut\"\, for clustering similarity matrices of functional terms is implemeted in this package. It also provides functions for visualizing\, summarizing and comparing the clusterings.


.. conda:package:: bioconductor-simplifyenrichment

   |downloads_bioconductor-simplifyenrichment| |docker_bioconductor-simplifyenrichment|

   :versions:
      
      

      ``2.4.1-0``,  ``2.0.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-simona: ``>=1.8.0,<1.9.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-clue: 
   :depends on r-cluster: ``>=1.14.2``
   :depends on r-colorspace: 
   :depends on r-digest: 
   :depends on r-getoptlong: 
   :depends on r-globaloptions: ``>=0.1.0``
   :depends on r-slam: 
   :depends on r-tm: 

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

    pixi global install bioconductor-simplifyenrichment

to add into an existing workspace instead, run::

    pixi add bioconductor-simplifyenrichment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-simplifyenrichment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-simplifyenrichment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-simplifyenrichment:<tag>

(see `bioconductor-simplifyenrichment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-simplifyenrichment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-simplifyenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-simplifyenrichment
   :alt:   (downloads)
.. |docker_bioconductor-simplifyenrichment| image:: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment
.. _`bioconductor-simplifyenrichment/tags`: https://quay.io/repository/biocontainers/bioconductor-simplifyenrichment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-simplifyenrichment";
        var versions = ["2.4.1","2.0.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-simplifyenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-simplifyenrichment/README.html