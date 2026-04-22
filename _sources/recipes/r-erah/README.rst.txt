:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-erah'
.. highlight: bash

r-erah
======

.. conda:recipe:: r-erah
   :replaces_section_title:
   :noindex:

   Automated compound deconvolution\, alignment across samples\, and identification of metabolites by spectral library matching in Gas Chromatography \- Mass spectrometry \(GC\-MS\) untargeted metabolomics.

   :homepage: https://CRAN.R-project.org/package=erah
   :license: GPL-2.0-or-later
   :recipe: /`r-erah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-erah>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-erah/meta.yaml>`_

   Outputs a table with compound names\, matching scores and the integrated area of the compound for each sample. Package implementation is described in Domingo\-Almenara et al. \(2016\) \<doi\:10.1021\/acs.analchem.6b02927\>.


.. conda:package:: r-erah

   |downloads_r-erah| |docker_r-erah|

   :versions:
      
      

      ``2.2.0-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-furrr: 
   :depends on r-future: 
   :depends on r-hiclimr: 
   :depends on r-igraph: 
   :depends on r-osd: 
   :depends on r-progress: 
   :depends on r-quantreg: 
   :depends on r-signal: 
   :depends on r-tibble: 

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

    pixi global install r-erah

to add into an existing workspace instead, run::

    pixi add r-erah

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-erah

Alternatively, to install into a new environment, run::

    conda create -n envname r-erah

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-erah:<tag>

(see `r-erah/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-erah| image:: https://img.shields.io/conda/dn/bioconda/r-erah.svg?style=flat
   :target: https://anaconda.org/bioconda/r-erah
   :alt:   (downloads)
.. |docker_r-erah| image:: https://quay.io/repository/biocontainers/r-erah/status
   :target: https://quay.io/repository/biocontainers/r-erah
.. _`r-erah/tags`: https://quay.io/repository/biocontainers/r-erah?tab=tags


.. raw:: html

    <script>
        var package = "r-erah";
        var versions = ["2.2.0","2.0.1","2.0.1","2.0.0","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-erah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-erah/README.html