:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pathosurveilr'
.. highlight: bash

r-pathosurveilr
===============

.. conda:recipe:: r-pathosurveilr
   :replaces_section_title:
   :noindex:

   Utilities for interacting with the pathogensurveillance pipeline.

   :homepage: https://github.com/grunwaldlab/PathoSurveilR
   :license: MIT / MIT
   :recipe: /`r-pathosurveilr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathosurveilr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathosurveilr/meta.yaml>`_

   


.. conda:package:: r-pathosurveilr

   |downloads_r-pathosurveilr| |docker_r-pathosurveilr|

   :versions:
      
      

      ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends on r-adegenet: 
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-base64enc: 
   :depends on r-dt: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-heatmaply: 
   :depends on r-heattree: 
   :depends on r-htmlwidgets: 
   :depends on r-igraph: 
   :depends on r-kableextra: 
   :depends on r-lubridate: 
   :depends on r-pheatmap: 
   :depends on r-phytools: 
   :depends on r-plotly: 
   :depends on r-poppr: 
   :depends on r-rcppsimdjson: 
   :depends on r-readods: 
   :depends on r-readxl: 
   :depends on r-rentrez: 
   :depends on r-tibble: 
   :depends on r-tidygeocoder: 
   :depends on r-webshot2: 
   :depends on r-xml2: 
   :depends on r-yaml: 

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

    pixi global install r-pathosurveilr

to add into an existing workspace instead, run::

    pixi add r-pathosurveilr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-pathosurveilr

Alternatively, to install into a new environment, run::

    conda create -n envname r-pathosurveilr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-pathosurveilr:<tag>

(see `r-pathosurveilr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-pathosurveilr| image:: https://img.shields.io/conda/dn/bioconda/r-pathosurveilr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pathosurveilr
   :alt:   (downloads)
.. |docker_r-pathosurveilr| image:: https://quay.io/repository/biocontainers/r-pathosurveilr/status
   :target: https://quay.io/repository/biocontainers/r-pathosurveilr
.. _`r-pathosurveilr/tags`: https://quay.io/repository/biocontainers/r-pathosurveilr?tab=tags


.. raw:: html

    <script>
        var package = "r-pathosurveilr";
        var versions = ["0.4.5","0.4.4","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pathosurveilr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pathosurveilr/README.html