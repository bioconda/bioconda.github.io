:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasmidcommunity'
.. highlight: bash

plasmidcommunity
================

.. conda:recipe:: plasmidcommunity
   :replaces_section_title:
   :noindex:

   Klebsiella pneumoniae Plasmid Classification\, Assignment\, and Transmission Risk Prediction

   :homepage: https://github.com/wuxinmiao5/PlasmidCommunity
   :documentation: https://github.com/wuxinmiao5/PlasmidCommunity/blob/main/README.md
   
   :license: GPL-3.0
   :recipe: /`plasmidcommunity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidcommunity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasmidcommunity/meta.yaml>`_

   


.. conda:package:: plasmidcommunity

   |downloads_plasmidcommunity| |docker_plasmidcommunity|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on bash: 
   :depends on bioconductor-biostrings: ``>=2.70.3``
   :depends on blast: ``>=2.1.2``
   :depends on fastani: ``>=1.33``
   :depends on prodigal: ``>=2.6.3``
   :depends on r-ape: ``>=5.8``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: ``>=1.1.4``
   :depends on r-ggplot2: ``>=3.5.1``
   :depends on r-ggraph: ``>=2.2.1``
   :depends on r-igraph: ``>=2.0.3``
   :depends on r-readr: ``>=2.1.5``
   :depends on r-readxl: ``>=1.4.3``
   :depends on r-seqinr: ``>=4.2.36``
   :depends on r-tidygraph: ``1.3.0``
   :depends on r-tidyverse: ``>=2.0.0``
   :depends on r-writexl: ``>=1.5.0``
   :depends on util-linux: 

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

    pixi global install plasmidcommunity

to add into an existing workspace instead, run::

    pixi add plasmidcommunity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plasmidcommunity

Alternatively, to install into a new environment, run::

    conda create -n envname plasmidcommunity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plasmidcommunity:<tag>

(see `plasmidcommunity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plasmidcommunity| image:: https://img.shields.io/conda/dn/bioconda/plasmidcommunity.svg?style=flat
   :target: https://anaconda.org/bioconda/plasmidcommunity
   :alt:   (downloads)
.. |docker_plasmidcommunity| image:: https://quay.io/repository/biocontainers/plasmidcommunity/status
   :target: https://quay.io/repository/biocontainers/plasmidcommunity
.. _`plasmidcommunity/tags`: https://quay.io/repository/biocontainers/plasmidcommunity?tab=tags


.. raw:: html

    <script>
        var package = "plasmidcommunity";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasmidcommunity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasmidcommunity/README.html