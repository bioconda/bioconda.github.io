:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-codedepends'
.. highlight: bash

r-codedepends
=============

.. conda:recipe:: r-codedepends
   :replaces_section_title:
   :noindex:

   Tools for analyzing R expressions or blocks of code and determining the dependencies between them. It focuses on R scripts\, but can be used on the bodies of functions. There are many facilities including the ability to summarize  or get a high\-level view of code\, determining dependencies between variables\,  code improvement suggestions.

   :homepage: https://github.com/duncantl/CodeDepends
   :license: GPL3 / GPL-3
   :recipe: /`r-codedepends <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-codedepends>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-codedepends/meta.yaml>`_

   


.. conda:package:: r-codedepends

   |downloads_r-codedepends| |docker_r-codedepends|

   :versions:
      
      

      ``0.6.7-0``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-4``,  ``0.6.5-3``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``

      

   
   :depends on bioconductor-graph: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-codetools: 
   :depends on r-xml: 

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

    pixi global install r-codedepends

to add into an existing workspace instead, run::

    pixi add r-codedepends

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-codedepends

Alternatively, to install into a new environment, run::

    conda create -n envname r-codedepends

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-codedepends:<tag>

(see `r-codedepends/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-codedepends| image:: https://img.shields.io/conda/dn/bioconda/r-codedepends.svg?style=flat
   :target: https://anaconda.org/bioconda/r-codedepends
   :alt:   (downloads)
.. |docker_r-codedepends| image:: https://quay.io/repository/biocontainers/r-codedepends/status
   :target: https://quay.io/repository/biocontainers/r-codedepends
.. _`r-codedepends/tags`: https://quay.io/repository/biocontainers/r-codedepends?tab=tags


.. raw:: html

    <script>
        var package = "r-codedepends";
        var versions = ["0.6.7","0.6.6","0.6.6","0.6.6","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-codedepends/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-codedepends/README.html