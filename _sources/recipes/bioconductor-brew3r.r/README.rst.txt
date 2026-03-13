:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brew3r.r'
.. highlight: bash

bioconductor-brew3r.r
=====================

.. conda:recipe:: bioconductor-brew3r.r
   :replaces_section_title:
   :noindex:

   R package associated to BREW3R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BREW3R.r.html
   :license: GPL-3
   :recipe: /`bioconductor-brew3r.r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brew3r.r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brew3r.r/meta.yaml>`_

   This R package provide functions that are used in the BREW3R workflow. This mainly contains a function that extend a gtf as GRanges using information from another gtf \(also as GRanges\). The process allows to extend gene annotation without increasing the overlap between gene ids.


.. conda:package:: bioconductor-brew3r.r

   |downloads_bioconductor-brew3r.r| |docker_bioconductor-brew3r.r|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rlang: 

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

    pixi global install bioconductor-brew3r.r

to add into an existing workspace instead, run::

    pixi add bioconductor-brew3r.r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-brew3r.r

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-brew3r.r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-brew3r.r:<tag>

(see `bioconductor-brew3r.r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-brew3r.r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brew3r.r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brew3r.r
   :alt:   (downloads)
.. |docker_bioconductor-brew3r.r| image:: https://quay.io/repository/biocontainers/bioconductor-brew3r.r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brew3r.r
.. _`bioconductor-brew3r.r/tags`: https://quay.io/repository/biocontainers/bioconductor-brew3r.r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brew3r.r";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brew3r.r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brew3r.r/README.html