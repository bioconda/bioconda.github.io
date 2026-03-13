:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metmashr'
.. highlight: bash

bioconductor-metmashr
=====================

.. conda:recipe:: bioconductor-metmashr
   :replaces_section_title:
   :noindex:

   Metabolite Mashing with R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MetMashR.html
   :license: GPL-3
   :recipe: /`bioconductor-metmashr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metmashr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metmashr/meta.yaml>`_

   A package to merge\, filter sort\, organise and otherwise mash together metabolite annotation tables. Metabolite annotations can be imported from multiple sources \(software\) and combined using workflow steps based on S4 class templates derived from the \`struct\` package. Other modular workflow steps such as filtering\, merging\, splitting\, normalisation and rest\-api queries are included.


.. conda:package:: bioconductor-metmashr

   |downloads_bioconductor-metmashr| |docker_bioconductor-metmashr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-struct: ``>=1.22.0,<1.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-httr: 
   :depends on r-rlang: 
   :depends on r-scales: 

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

    pixi global install bioconductor-metmashr

to add into an existing workspace instead, run::

    pixi add bioconductor-metmashr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metmashr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metmashr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metmashr:<tag>

(see `bioconductor-metmashr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metmashr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metmashr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metmashr
   :alt:   (downloads)
.. |docker_bioconductor-metmashr| image:: https://quay.io/repository/biocontainers/bioconductor-metmashr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metmashr
.. _`bioconductor-metmashr/tags`: https://quay.io/repository/biocontainers/bioconductor-metmashr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metmashr";
        var versions = ["1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metmashr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metmashr/README.html