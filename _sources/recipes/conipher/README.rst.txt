:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conipher'
.. highlight: bash

conipher
========

.. conda:recipe:: conipher
   :replaces_section_title:
   :noindex:

   CONIPHER is an R package for clustering mutation data and reconstruction of tumor phylogenetic trees from DNA sequencing.

   :homepage: https://github.com/McGranahanLab/CONIPHER/
   :license: BSD-3-Clause
   :recipe: /`conipher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conipher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conipher/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41596-023-00913-9`

   


.. conda:package:: conipher

   |downloads_conipher| |docker_conipher|

   :versions:
      
      

      ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``

      

   
   :depends on pyclone: 
   :depends on r-base: ``>=4.0,<4.1.0a0``
   :depends on r-beeswarm: 
   :depends on r-biocmanager: 
   :depends on r-boot: 
   :depends on r-bootstrap: 
   :depends on r-catools: 
   :depends on r-coin: 
   :depends on r-cowplot: 
   :depends on r-devtools: 
   :depends on r-fst: 
   :depends on r-ggpubr: 
   :depends on r-gplots: 
   :depends on r-gtools: 
   :depends on r-igraph: 
   :depends on r-kernsmooth: 
   :depends on r-mapplots: 
   :depends on r-optparse: 
   :depends on r-parallelly: 
   :depends on r-rcolorbrewer: 
   :depends on r-tidyverse: 
   :depends on r-wordcloud: 

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

    pixi global install conipher

to add into an existing workspace instead, run::

    pixi add conipher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install conipher

Alternatively, to install into a new environment, run::

    conda create -n envname conipher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/conipher:<tag>

(see `conipher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_conipher| image:: https://img.shields.io/conda/dn/bioconda/conipher.svg?style=flat
   :target: https://anaconda.org/bioconda/conipher
   :alt:   (downloads)
.. |docker_conipher| image:: https://quay.io/repository/biocontainers/conipher/status
   :target: https://quay.io/repository/biocontainers/conipher
.. _`conipher/tags`: https://quay.io/repository/biocontainers/conipher?tab=tags


.. raw:: html

    <script>
        var package = "conipher";
        var versions = ["2.2.0","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conipher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conipher/README.html