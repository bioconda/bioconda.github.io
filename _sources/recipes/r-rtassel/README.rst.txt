:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rtassel'
.. highlight: bash

r-rtassel
=========

.. conda:recipe:: r-rtassel
   :replaces_section_title:
   :noindex:

   R front\-end for TASSEL

   :homepage: https://bitbucket.org/bucklerlab/rtassel/wiki/Home
   :license: GPL3 / GNU GPL-3.0
   :recipe: /`r-rtassel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtassel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rtassel/meta.yaml>`_

   


.. conda:package:: r-rtassel

   |downloads_r-rtassel| |docker_r-rtassel|

   :versions:
      
      

      ``0.1.2019.07.25-6``,  ``0.1.2019.07.25-5``,  ``0.1.2019.07.25-4``,  ``0.1.2019.07.25-3``,  ``0.1.2019.07.25-2``,  ``0.1.2019.07.25-1``,  ``0.1.2019.07.25-0``

      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-summarizedexperiment: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-purrr: 
   :depends on r-rjava: 
   :depends on r-rlang: 
   :depends on r-stringr: 

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

    pixi global install r-rtassel

to add into an existing workspace instead, run::

    pixi add r-rtassel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-rtassel

Alternatively, to install into a new environment, run::

    conda create -n envname r-rtassel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-rtassel:<tag>

(see `r-rtassel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-rtassel| image:: https://img.shields.io/conda/dn/bioconda/r-rtassel.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rtassel
   :alt:   (downloads)
.. |docker_r-rtassel| image:: https://quay.io/repository/biocontainers/r-rtassel/status
   :target: https://quay.io/repository/biocontainers/r-rtassel
.. _`r-rtassel/tags`: https://quay.io/repository/biocontainers/r-rtassel?tab=tags


.. raw:: html

    <script>
        var package = "r-rtassel";
        var versions = ["0.1.2019.07.25","0.1.2019.07.25","0.1.2019.07.25","0.1.2019.07.25","0.1.2019.07.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rtassel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rtassel/README.html