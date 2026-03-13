:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-summix'
.. highlight: bash

bioconductor-summix
===================

.. conda:recipe:: bioconductor-summix
   :replaces_section_title:
   :noindex:

   Summix2\: A suite of methods to estimate\, adjust\, and leverage substructure in genetic summary data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Summix.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-summix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summix/meta.yaml>`_

   This package contains the Summix2 method for estimating and adjusting for substructure in genetic summary allele frequency data. The function summix\(\) estimates reference group proportions using a mixture model. The adjAF\(\) function produces adjusted allele frequencies for an observed group with reference group proportions matching a target individual or sample. The summix\_local\(\) function estimates local ancestry mixture proportions and performs selection scans in genetic summary data.


.. conda:package:: bioconductor-summix

   |downloads_bioconductor-summix| |docker_bioconductor-summix|

   :versions:
      
      

      ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-nloptr: 

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

    pixi global install bioconductor-summix

to add into an existing workspace instead, run::

    pixi add bioconductor-summix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-summix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-summix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-summix:<tag>

(see `bioconductor-summix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-summix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-summix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-summix
   :alt:   (downloads)
.. |docker_bioconductor-summix| image:: https://quay.io/repository/biocontainers/bioconductor-summix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-summix
.. _`bioconductor-summix/tags`: https://quay.io/repository/biocontainers/bioconductor-summix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-summix";
        var versions = ["2.8.0","2.6.0","2.4.0","2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-summix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-summix/README.html