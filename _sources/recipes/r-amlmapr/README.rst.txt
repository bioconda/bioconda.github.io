:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-amlmapr'
.. highlight: bash

r-amlmapr
=========

.. conda:recipe:: r-amlmapr
   :replaces_section_title:
   :noindex:

   R package for visualizing and analyzing AML transcriptome data

   :homepage: https://github.com/jeppeseverens/AMLmapR
   :license: CC-BY-NC-SA-4.0
   :recipe: /`r-amlmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-amlmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-amlmapr/meta.yaml>`_

   


.. conda:package:: r-amlmapr

   |downloads_r-amlmapr| |docker_r-amlmapr|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-caret: 
   :depends on r-devtools: 
   :depends on r-kernlab: 
   :depends on r-remotes: 

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

    pixi global install r-amlmapr

to add into an existing workspace instead, run::

    pixi add r-amlmapr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-amlmapr

Alternatively, to install into a new environment, run::

    conda create -n envname r-amlmapr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-amlmapr:<tag>

(see `r-amlmapr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-amlmapr| image:: https://img.shields.io/conda/dn/bioconda/r-amlmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-amlmapr
   :alt:   (downloads)
.. |docker_r-amlmapr| image:: https://quay.io/repository/biocontainers/r-amlmapr/status
   :target: https://quay.io/repository/biocontainers/r-amlmapr
.. _`r-amlmapr/tags`: https://quay.io/repository/biocontainers/r-amlmapr?tab=tags


.. raw:: html

    <script>
        var package = "r-amlmapr";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-amlmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-amlmapr/README.html