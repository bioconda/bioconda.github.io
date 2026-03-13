:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirit'
.. highlight: bash

bioconductor-mirit
==================

.. conda:recipe:: bioconductor-mirit
   :replaces_section_title:
   :noindex:

   Integrate microRNA and gene expression to decipher pathway complexity

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MIRit.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-mirit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirit/meta.yaml>`_

   MIRit is an R package that provides several methods for investigating the relationships between miRNAs and genes in different biological conditions. In particular\, MIRit allows to explore the functions of dysregulated miRNAs\, and makes it possible to identify miRNA\-gene regulatory axes that control biological pathways\, thus enabling the users to unveil the complexity of miRNA biology. MIRit is an all\-in\-one framework that aims to help researchers in all the central aspects of an integrative miRNA\-mRNA analyses\, from differential expression analysis to network characterization.


.. conda:package:: bioconductor-mirit

   |downloads_bioconductor-mirit| |docker_bioconductor-mirit|

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

    pixi global install bioconductor-mirit

to add into an existing workspace instead, run::

    pixi add bioconductor-mirit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mirit

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mirit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mirit:<tag>

(see `bioconductor-mirit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mirit| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirit.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirit
   :alt:   (downloads)
.. |docker_bioconductor-mirit| image:: https://quay.io/repository/biocontainers/bioconductor-mirit/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirit
.. _`bioconductor-mirit/tags`: https://quay.io/repository/biocontainers/bioconductor-mirit?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirit";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirit/README.html