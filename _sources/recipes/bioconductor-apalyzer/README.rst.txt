:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-apalyzer'
.. highlight: bash

bioconductor-apalyzer
=====================

.. conda:recipe:: bioconductor-apalyzer
   :replaces_section_title:
   :noindex:

   A toolkit for APA analysis using RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/APAlyzer.html
   :license: LGPL-3
   :recipe: /`bioconductor-apalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-apalyzer/meta.yaml>`_

   Perform 3\'UTR APA\, Intronic APA and gene expression analysis using RNA\-seq data.


.. conda:package:: bioconductor-apalyzer

   |downloads_bioconductor-apalyzer| |docker_bioconductor-apalyzer|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-hybridmtest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-rsubread: ``>=2.20.0,<2.21.0``
   :depends on bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-variantannotation: ``>=1.52.0,<1.53.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-repmis: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-apalyzer

to add into an existing workspace instead, run::

    pixi add bioconductor-apalyzer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-apalyzer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-apalyzer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-apalyzer:<tag>

(see `bioconductor-apalyzer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-apalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-apalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-apalyzer
   :alt:   (downloads)
.. |docker_bioconductor-apalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-apalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-apalyzer
.. _`bioconductor-apalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-apalyzer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-apalyzer";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-apalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-apalyzer/README.html