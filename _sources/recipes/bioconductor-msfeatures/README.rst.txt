:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msfeatures'
.. highlight: bash

bioconductor-msfeatures
=======================

.. conda:recipe:: bioconductor-msfeatures
   :replaces_section_title:
   :noindex:

   Functionality for Mass Spectrometry Features

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsFeatures.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msfeatures <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msfeatures>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msfeatures/meta.yaml>`_

   The MsFeature package defines functionality for Mass Spectrometry features. This includes functions to group \(LC\-MS\) features based on some of their properties\, such as retention time \(coeluting features\)\, or correlation of signals across samples. This packge hence allows to group features\, and its results can be used as an input for the \`QFeatures\` package which allows to aggregate abundance levels of features within each group. This package defines concepts and functions for base and common data types\, implementations for more specific data types are expected to be implemented in the respective packages \(such as e.g. \`xcms\`\). All functionality of this package is implemented in a modular way which allows combination of different grouping approaches and enables its re\-use in other R packages.


.. conda:package:: bioconductor-msfeatures

   |downloads_bioconductor-msfeatures| |docker_bioconductor-msfeatures|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-msfeatures

to add into an existing workspace instead, run::

    pixi add bioconductor-msfeatures

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msfeatures

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msfeatures

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msfeatures:<tag>

(see `bioconductor-msfeatures/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msfeatures| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msfeatures.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msfeatures
   :alt:   (downloads)
.. |docker_bioconductor-msfeatures| image:: https://quay.io/repository/biocontainers/bioconductor-msfeatures/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msfeatures
.. _`bioconductor-msfeatures/tags`: https://quay.io/repository/biocontainers/bioconductor-msfeatures?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msfeatures";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msfeatures/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msfeatures/README.html