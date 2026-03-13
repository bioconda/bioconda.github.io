:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gg4way'
.. highlight: bash

bioconductor-gg4way
===================

.. conda:recipe:: bioconductor-gg4way
   :replaces_section_title:
   :noindex:

   4way Plots of Differential Expression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gg4way.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gg4way <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gg4way>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gg4way/meta.yaml>`_

   4way plots enable a comparison of the logFC values from two contrasts of differential gene expression. The gg4way package creates 4way plots using the ggplot2 framework and supports popular Bioconductor objects. The package also provides information about the correlation between contrasts and significant genes of interest.


.. conda:package:: bioconductor-gg4way

   |downloads_bioconductor-gg4way| |docker_bioconductor-gg4way|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glue: 
   :depends on r-janitor: 
   :depends on r-magrittr: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-gg4way

to add into an existing workspace instead, run::

    pixi add bioconductor-gg4way

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gg4way

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gg4way

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gg4way:<tag>

(see `bioconductor-gg4way/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gg4way| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gg4way.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gg4way
   :alt:   (downloads)
.. |docker_bioconductor-gg4way| image:: https://quay.io/repository/biocontainers/bioconductor-gg4way/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gg4way
.. _`bioconductor-gg4way/tags`: https://quay.io/repository/biocontainers/bioconductor-gg4way?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gg4way";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gg4way/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gg4way/README.html