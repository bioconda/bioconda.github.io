:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-breakaway'
.. highlight: bash

r-breakaway
===========

.. conda:recipe:: r-breakaway
   :replaces_section_title:
   :noindex:

   Understanding the drivers of microbial diversity is an important frontier of microbial ecology\, and investigating the diversity of samples from microbial ecosystems is a common step in any microbiome analysis. \'breakaway\' is the premier package for statistical analysis of microbial diversity. \'breakaway\' implements the latest and greatest estimates of species richness\, as well as the most commonly used estimates. Methods uniquely available in this package include objective Bayes estimators described in Barger and Bunge \(2010\) \<doi\:10.1214\/10\-BA527\>\, frequency\-ratio\-based estimators described in Willis and Bunge \(2015\) \<doi\:10.1111\/biom.12332\>\, and as described in Willis\, Whitman\, and Bunge \(2016\) \<doi\:10.1111\/rssc.12206\>\, a linear modeling approach for detecting changes in diversity.

   :homepage: https://adw96.github.io/breakaway/
   :license: GPL2 / GPL-2
   :recipe: /`r-breakaway <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-breakaway>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-breakaway/meta.yaml>`_

   


.. conda:package:: r-breakaway

   |downloads_r-breakaway| |docker_r-breakaway|

   :versions:
      
      

      ``4.7.9-2``,  ``4.7.9-1``,  ``4.7.9-0``,  ``3.0-0``

      

   
   :depends on bioconductor-phyloseq: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-lme4: 
   :depends on r-magrittr: 
   :depends on r-mass: 
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

    pixi global install r-breakaway

to add into an existing workspace instead, run::

    pixi add r-breakaway

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-breakaway

Alternatively, to install into a new environment, run::

    conda create -n envname r-breakaway

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-breakaway:<tag>

(see `r-breakaway/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-breakaway| image:: https://img.shields.io/conda/dn/bioconda/r-breakaway.svg?style=flat
   :target: https://anaconda.org/bioconda/r-breakaway
   :alt:   (downloads)
.. |docker_r-breakaway| image:: https://quay.io/repository/biocontainers/r-breakaway/status
   :target: https://quay.io/repository/biocontainers/r-breakaway
.. _`r-breakaway/tags`: https://quay.io/repository/biocontainers/r-breakaway?tab=tags


.. raw:: html

    <script>
        var package = "r-breakaway";
        var versions = ["4.7.9","4.7.9","4.7.9","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-breakaway/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-breakaway/README.html