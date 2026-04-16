:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deepkin'
.. highlight: bash

r-deepkin
=========

.. conda:recipe:: r-deepkin
   :replaces_section_title:
   :noindex:

   DeepKin\: efficient and precise estimation for in\-depth genetic relatedness

   :homepage: https://github.com/qixininin/deepKin
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-deepkin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deepkin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deepkin/meta.yaml>`_

   DeepKin provides efficient and precise estimation for in\-depth genetic relatedness.
   It includes functions for calculating critical values\, minimum effective markers\,
   and power analysis for genetic relatedness studies.



.. conda:package:: r-deepkin

   |downloads_r-deepkin| |docker_r-deepkin|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-readr: 

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

    pixi global install r-deepkin

to add into an existing workspace instead, run::

    pixi add r-deepkin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-deepkin

Alternatively, to install into a new environment, run::

    conda create -n envname r-deepkin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-deepkin:<tag>

(see `r-deepkin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-deepkin| image:: https://img.shields.io/conda/dn/bioconda/r-deepkin.svg?style=flat
   :target: https://anaconda.org/bioconda/r-deepkin
   :alt:   (downloads)
.. |docker_r-deepkin| image:: https://quay.io/repository/biocontainers/r-deepkin/status
   :target: https://quay.io/repository/biocontainers/r-deepkin
.. _`r-deepkin/tags`: https://quay.io/repository/biocontainers/r-deepkin?tab=tags


.. raw:: html

    <script>
        var package = "r-deepkin";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deepkin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deepkin/README.html