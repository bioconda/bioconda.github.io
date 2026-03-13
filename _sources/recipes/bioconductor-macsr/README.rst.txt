:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macsr'
.. highlight: bash

bioconductor-macsr
==================

.. conda:recipe:: bioconductor-macsr
   :replaces_section_title:
   :noindex:

   MACS\: Model\-based Analysis for ChIP\-Seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MACSr.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-macsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macsr/meta.yaml>`_

   The Model\-based Analysis of ChIP\-Seq \(MACS\) is a widely used toolkit for identifying transcript factor binding sites. This package is an R wrapper of the lastest MACS3.


.. conda:package:: bioconductor-macsr

   |downloads_bioconductor-macsr| |docker_bioconductor-macsr|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-reticulate: 

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

    pixi global install bioconductor-macsr

to add into an existing workspace instead, run::

    pixi add bioconductor-macsr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-macsr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-macsr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-macsr:<tag>

(see `bioconductor-macsr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-macsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macsr
   :alt:   (downloads)
.. |docker_bioconductor-macsr| image:: https://quay.io/repository/biocontainers/bioconductor-macsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macsr
.. _`bioconductor-macsr/tags`: https://quay.io/repository/biocontainers/bioconductor-macsr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macsr";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macsr/README.html