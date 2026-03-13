:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncrnatools'
.. highlight: bash

bioconductor-ncrnatools
=======================

.. conda:recipe:: bioconductor-ncrnatools
   :replaces_section_title:
   :noindex:

   An R toolkit for non\-coding RNA

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ncRNAtools.html
   :license: GPL-3
   :recipe: /`bioconductor-ncrnatools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncrnatools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncrnatools/meta.yaml>`_

   ncRNAtools provides a set of basic tools for handling and analyzing non\-coding RNAs. These include tools to access the RNAcentral database and to predict and visualize the secondary structure of non\-coding RNAs. The package also provides tools to read\, write and interconvert the file formats most commonly used for representing such secondary structures.


.. conda:package:: bioconductor-ncrnatools

   |downloads_bioconductor-ncrnatools| |docker_bioconductor-ncrnatools|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-httr: 
   :depends on r-xml2: 

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

    pixi global install bioconductor-ncrnatools

to add into an existing workspace instead, run::

    pixi add bioconductor-ncrnatools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ncrnatools

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ncrnatools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ncrnatools:<tag>

(see `bioconductor-ncrnatools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ncrnatools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncrnatools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncrnatools
   :alt:   (downloads)
.. |docker_bioconductor-ncrnatools| image:: https://quay.io/repository/biocontainers/bioconductor-ncrnatools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncrnatools
.. _`bioconductor-ncrnatools/tags`: https://quay.io/repository/biocontainers/bioconductor-ncrnatools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ncrnatools";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncrnatools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncrnatools/README.html