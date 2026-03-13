:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-garnett'
.. highlight: bash

r-garnett
=========

.. conda:recipe:: r-garnett
   :replaces_section_title:
   :noindex:

   Bioconda\-installable version of Garnett cell classification tool.

   :homepage: https://cole-trapnell-lab.github.io/garnett/
   :developer docs: https://github.com/cole-trapnell-lab/garnett
   :license: MIT / MIT
   :recipe: /`r-garnett <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-garnett>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-garnett/meta.yaml>`_

   


.. conda:package:: r-garnett

   |downloads_r-garnett| |docker_r-garnett|

   :versions:
      
      

      ``0.2.8-6``,  ``0.2.8-5``,  ``0.2.8-4``,  ``0.2.8-3``,  ``0.2.8-2``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.1.4-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.44.0``
   :depends on bioconductor-biobase: ``>=2.42.0``
   :depends on bioconductor-delayedarray: ``>=0.8.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.4.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.7.0``
   :depends on bioconductor-org.mm.eg.db: 
   :depends on r-assertthat: ``>=0.2.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-doparallel: ``>=1.0.14``
   :depends on r-forcats: ``>=0.3.0``
   :depends on r-ggplot2: ``>=3.1.0``
   :depends on r-ggrepel: ``>=0.8.0``
   :depends on r-glmnet: ``>=2.0_16``
   :depends on r-igraph: ``>=1.2.2``
   :depends on r-irlba: ``>=2.3.2``
   :depends on r-matrix: ``>=1.2_15``
   :depends on r-monocle3: 
   :depends on r-plyr: ``>=1.8.4``
   :depends on r-rann: ``>=2.6``
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-rly: ``>=1.6.2``
   :depends on r-stringr: ``>=1.3.1``
   :depends on r-viridis: ``>=0.5.1``

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

    pixi global install r-garnett

to add into an existing workspace instead, run::

    pixi add r-garnett

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-garnett

Alternatively, to install into a new environment, run::

    conda create -n envname r-garnett

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-garnett:<tag>

(see `r-garnett/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-garnett| image:: https://img.shields.io/conda/dn/bioconda/r-garnett.svg?style=flat
   :target: https://anaconda.org/bioconda/r-garnett
   :alt:   (downloads)
.. |docker_r-garnett| image:: https://quay.io/repository/biocontainers/r-garnett/status
   :target: https://quay.io/repository/biocontainers/r-garnett
.. _`r-garnett/tags`: https://quay.io/repository/biocontainers/r-garnett?tab=tags


.. raw:: html

    <script>
        var package = "r-garnett";
        var versions = ["0.2.8","0.2.8","0.2.8","0.2.8","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-garnett/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-garnett/README.html