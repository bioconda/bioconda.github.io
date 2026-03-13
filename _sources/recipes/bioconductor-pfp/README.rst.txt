:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pfp'
.. highlight: bash

bioconductor-pfp
================

.. conda:recipe:: bioconductor-pfp
   :replaces_section_title:
   :noindex:

   Pathway Fingerprint Framework in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PFP.html
   :license: GPL-2
   :recipe: /`bioconductor-pfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfp/meta.yaml>`_

   An implementation of the pathway fingerprint framework that introduced in paper \"Pathway Fingerprint\: a novel pathway knowledge and topology based method for biomarker discovery and characterization\". This method provides a systematic comparisons between a gene set \(such as a list of differentially expressed genes\) and well\-studied \"basic pathway networks\" \(KEGG pathways\)\, measuring the importance of pathways and genes for the gene set. The package is helpful for researchers to find the biomarkers and its function.


.. conda:package:: bioconductor-pfp

   |downloads_bioconductor-pfp| |docker_bioconductor-pfp|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-kegggraph: ``>=1.60.0,<1.61.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-plyr: 
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

    pixi global install bioconductor-pfp

to add into an existing workspace instead, run::

    pixi add bioconductor-pfp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pfp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pfp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pfp:<tag>

(see `bioconductor-pfp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pfp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pfp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pfp
   :alt:   (downloads)
.. |docker_bioconductor-pfp| image:: https://quay.io/repository/biocontainers/bioconductor-pfp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pfp
.. _`bioconductor-pfp/tags`: https://quay.io/repository/biocontainers/bioconductor-pfp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pfp";
        var versions = ["1.7.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pfp/README.html