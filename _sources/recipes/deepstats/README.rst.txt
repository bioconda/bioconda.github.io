:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepstats'
.. highlight: bash

deepstats
=========

.. conda:recipe:: deepstats
   :replaces_section_title:
   :noindex:

   A statistical and dataviz toolbox for deeptools\, genomic signals\, and more.

   :homepage: https://github.com/gtrichard/deepStats
   :license: GPL3
   :recipe: /`deepstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepstats/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3336593`

   


.. conda:package:: deepstats

   |downloads_deepstats| |docker_deepstats|

   :versions:
      
      

      ``0.4-1``,  ``0.4-0``,  ``0.3.1-0``,  ``0.3-0``,  ``0.2-0``

      

   
   :depends on bioconductor-iranges: 
   :depends on bioconductor-rsamtools: 
   :depends on r-argparse: 
   :depends on r-base: ``>=3.5.1``
   :depends on r-boot: 
   :depends on r-cowplot: 
   :depends on r-dichromat: 
   :depends on r-essentials: 
   :depends on r-ggplot2: 
   :depends on r-optparse: 
   :depends on r-purrr: 
   :depends on r-seqinr: 
   :depends on r-showtext: 
   :depends on r-stringr: 
   :depends on r-tidyverse: 
   :depends on r-vroom: 

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

    pixi global install deepstats

to add into an existing workspace instead, run::

    pixi add deepstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepstats

Alternatively, to install into a new environment, run::

    conda create -n envname deepstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepstats:<tag>

(see `deepstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepstats| image:: https://img.shields.io/conda/dn/bioconda/deepstats.svg?style=flat
   :target: https://anaconda.org/bioconda/deepstats
   :alt:   (downloads)
.. |docker_deepstats| image:: https://quay.io/repository/biocontainers/deepstats/status
   :target: https://quay.io/repository/biocontainers/deepstats
.. _`deepstats/tags`: https://quay.io/repository/biocontainers/deepstats?tab=tags


.. raw:: html

    <script>
        var package = "deepstats";
        var versions = ["0.4","0.4","0.3.1","0.3","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepstats/README.html