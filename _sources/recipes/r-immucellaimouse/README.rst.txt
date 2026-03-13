:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-immucellaimouse'
.. highlight: bash

r-immucellaimouse
=================

.. conda:recipe:: r-immucellaimouse
   :replaces_section_title:
   :noindex:

   ImmuCellAI\-mouse is a tool to estimate the abundance of 36 immune cells based on gene expression profile from RNA\-Seq or microarray data.

   :homepage: https://github.com/lydiaMyr/ImmuCellAI-mouse
   :license: GPL / GPL
   :recipe: /`r-immucellaimouse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immucellaimouse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immucellaimouse/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab711`

   


.. conda:package:: r-immucellaimouse

   |downloads_r-immucellaimouse| |docker_r-immucellaimouse|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends on bioconductor-gsva: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-mass: 
   :depends on r-rcpp: ``>=0.12.14``

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

    pixi global install r-immucellaimouse

to add into an existing workspace instead, run::

    pixi add r-immucellaimouse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-immucellaimouse

Alternatively, to install into a new environment, run::

    conda create -n envname r-immucellaimouse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-immucellaimouse:<tag>

(see `r-immucellaimouse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-immucellaimouse| image:: https://img.shields.io/conda/dn/bioconda/r-immucellaimouse.svg?style=flat
   :target: https://anaconda.org/bioconda/r-immucellaimouse
   :alt:   (downloads)
.. |docker_r-immucellaimouse| image:: https://quay.io/repository/biocontainers/r-immucellaimouse/status
   :target: https://quay.io/repository/biocontainers/r-immucellaimouse
.. _`r-immucellaimouse/tags`: https://quay.io/repository/biocontainers/r-immucellaimouse?tab=tags


.. raw:: html

    <script>
        var package = "r-immucellaimouse";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-immucellaimouse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-immucellaimouse/README.html