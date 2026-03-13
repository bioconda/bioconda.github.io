:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-george'
.. highlight: bash

r-george
========

.. conda:recipe:: r-george
   :replaces_section_title:
   :noindex:

   geoRge\, a computational tool for stable isotope labelling detection in LC\/MS\-based untargeted metabolomics

   :homepage: https://github.com/jcapelladesto/geoRge/README.md
   :license: GPL (>= 2)
   :recipe: /`r-george <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george/meta.yaml>`_

   


.. conda:package:: r-george

   |downloads_r-george| |docker_r-george|

   :versions:
      
      

      ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends on bioconductor-mzr: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-xcms: ``>=4.4.0,<4.5.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-optparse: 

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

    pixi global install r-george

to add into an existing workspace instead, run::

    pixi add r-george

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-george

Alternatively, to install into a new environment, run::

    conda create -n envname r-george

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-george:<tag>

(see `r-george/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-george| image:: https://img.shields.io/conda/dn/bioconda/r-george.svg?style=flat
   :target: https://anaconda.org/bioconda/r-george
   :alt:   (downloads)
.. |docker_r-george| image:: https://quay.io/repository/biocontainers/r-george/status
   :target: https://quay.io/repository/biocontainers/r-george
.. _`r-george/tags`: https://quay.io/repository/biocontainers/r-george?tab=tags


.. raw:: html

    <script>
        var package = "r-george";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-george/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-george/README.html