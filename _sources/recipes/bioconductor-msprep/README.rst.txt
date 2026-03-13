:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msprep'
.. highlight: bash

bioconductor-msprep
===================

.. conda:recipe:: bioconductor-msprep
   :replaces_section_title:
   :noindex:

   Package for Summarizing\, Filtering\, Imputing\, and Normalizing Metabolomics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSPrep.html
   :license: GPL-3
   :recipe: /`bioconductor-msprep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msprep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msprep/meta.yaml>`_

   Package performs summarization of replicates\, filtering by frequency\, several different options for imputing missing data\, and a variety of options for transforming\, batch correcting\, and normalizing data.


.. conda:package:: bioconductor-msprep

   |downloads_bioconductor-msprep| |docker_bioconductor-msprep|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-pcamethods: ``>=1.98.0,<1.99.0``
   :depends on bioconductor-preprocesscore: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-sva: ``>=3.54.0,<3.55.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-crmn: 
   :depends on r-dplyr: ``>=0.7``
   :depends on r-magrittr: 
   :depends on r-missforest: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: ``>=1.2``
   :depends on r-tidyr: 
   :depends on r-vim: 

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

    pixi global install bioconductor-msprep

to add into an existing workspace instead, run::

    pixi add bioconductor-msprep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msprep

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msprep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msprep:<tag>

(see `bioconductor-msprep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msprep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msprep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msprep
   :alt:   (downloads)
.. |docker_bioconductor-msprep| image:: https://quay.io/repository/biocontainers/bioconductor-msprep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msprep
.. _`bioconductor-msprep/tags`: https://quay.io/repository/biocontainers/bioconductor-msprep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msprep";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msprep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msprep/README.html