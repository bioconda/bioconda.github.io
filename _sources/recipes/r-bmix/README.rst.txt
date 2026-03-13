:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bmix'
.. highlight: bash

r-bmix
======

.. conda:recipe:: r-bmix
   :replaces_section_title:
   :noindex:

   Binomial and Beta\-Binomial mixture models for counts data.

   :homepage: https://github.com/caravagnalab/BMix
   :documentation: https://caravagnalab.github.io/BMix/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-bmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bmix/meta.yaml>`_

   BMix provides univariate Binomial and Beta\-Binomial mixture models. 
   Count\-based mixtures can be used in a variety of settings\, for instance 
   to model genome sequencing data of somatic mutations in cancer. BMix fits 
   these mixtures by maximum likelihood exploiting the Expectation Maximization 
   algorithm. Model selection for the number of mixture components is by the 
   Integrated Classification Likelihood\, an extension of the Bayesian Information 
   Criterion that includes the entropy of the latent variables.



.. conda:package:: r-bmix

   |downloads_r-bmix| |docker_r-bmix|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cli: 
   :depends on r-cowplot: 
   :depends on r-crayon: 
   :depends on r-dplyr: 
   :depends on r-easypar: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-markdown: 
   :depends on r-pio: 
   :depends on r-tibble: 
   :depends on r-vgam: 

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

    pixi global install r-bmix

to add into an existing workspace instead, run::

    pixi add r-bmix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bmix

Alternatively, to install into a new environment, run::

    conda create -n envname r-bmix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bmix:<tag>

(see `r-bmix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bmix| image:: https://img.shields.io/conda/dn/bioconda/r-bmix.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bmix
   :alt:   (downloads)
.. |docker_r-bmix| image:: https://quay.io/repository/biocontainers/r-bmix/status
   :target: https://quay.io/repository/biocontainers/r-bmix
.. _`r-bmix/tags`: https://quay.io/repository/biocontainers/r-bmix?tab=tags


.. raw:: html

    <script>
        var package = "r-bmix";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bmix/README.html