:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnaeditr'
.. highlight: bash

bioconductor-rnaeditr
=====================

.. conda:recipe:: bioconductor-rnaeditr
   :replaces_section_title:
   :noindex:

   Statistical analysis of RNA editing sites and hyper\-editing regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rnaEditr.html
   :license: GPL-3
   :recipe: /`bioconductor-rnaeditr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaeditr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnaeditr/meta.yaml>`_

   RNAeditr analyzes site\-specific RNA editing events\, as well as hyper\-editing regions. The editing frequencies can be tested against binary\, continuous or survival outcomes. Multiple covariate variables as well as interaction effects can also be incorporated in the statistical models.


.. conda:package:: bioconductor-rnaeditr

   |downloads_bioconductor-rnaeditr| |docker_bioconductor-rnaeditr|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-bumphunter: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corrplot: 
   :depends on r-logistf: 
   :depends on r-plyr: 
   :depends on r-survival: 

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

    pixi global install bioconductor-rnaeditr

to add into an existing workspace instead, run::

    pixi add bioconductor-rnaeditr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rnaeditr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rnaeditr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rnaeditr:<tag>

(see `bioconductor-rnaeditr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rnaeditr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnaeditr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnaeditr
   :alt:   (downloads)
.. |docker_bioconductor-rnaeditr| image:: https://quay.io/repository/biocontainers/bioconductor-rnaeditr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnaeditr
.. _`bioconductor-rnaeditr/tags`: https://quay.io/repository/biocontainers/bioconductor-rnaeditr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnaeditr";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnaeditr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnaeditr/README.html