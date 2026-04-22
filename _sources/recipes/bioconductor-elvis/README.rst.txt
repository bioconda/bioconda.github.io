:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-elvis'
.. highlight: bash

bioconductor-elvis
==================

.. conda:recipe:: bioconductor-elvis
   :replaces_section_title:
   :noindex:

   An R Package for Estimating Copy Number Levels of Viral Genome Segments Using Base\-Resolution Read Depth Profile

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ELViS.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-elvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-elvis/meta.yaml>`_

   Base\-resolution copy number analysis of viral genome. Utilizes base\-resolution read depth data over viral genome to find copy number segments with two\-dimensional segmentation approach. Provides publish\-ready figures\, including histograms of read depths\, coverage line plots over viral genome annotated with copy number change events and viral genes\, and heatmaps showing multiple types of data with integrative clustering of samples.


.. conda:package:: bioconductor-elvis

   |downloads_bioconductor-elvis| |docker_bioconductor-elvis|

   :versions:
      
      

      

      

   

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

    pixi global install bioconductor-elvis

to add into an existing workspace instead, run::

    pixi add bioconductor-elvis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-elvis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-elvis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-elvis:<tag>

(see `bioconductor-elvis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-elvis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-elvis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-elvis
   :alt:   (downloads)
.. |docker_bioconductor-elvis| image:: https://quay.io/repository/biocontainers/bioconductor-elvis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-elvis
.. _`bioconductor-elvis/tags`: https://quay.io/repository/biocontainers/bioconductor-elvis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-elvis";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-elvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-elvis/README.html