:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsbig'
.. highlight: bash

bioconductor-msstatsbig
=======================

.. conda:recipe:: bioconductor-msstatsbig
   :replaces_section_title:
   :noindex:

   MSstats Preprocessing for Larger than Memory Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSstatsBig.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsbig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsbig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsbig/meta.yaml>`_

   MSstats package provide tools for preprocessing\, summarization and differential analysis of mass spectrometry \(MS\) proteomics data. Recently\, some MS protocols enable acquisition of data sets that result in larger than memory quantitative data. MSstats functions are not able to process such data. MSstatsBig package provides additional converter functions that enable processing larger than memory data sets.


.. conda:package:: bioconductor-msstatsbig

   |downloads_bioconductor-msstatsbig| |docker_bioconductor-msstatsbig|

   :versions:
      
      

      ``1.8.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-msstats: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-msstatsconvert: ``>=1.20.0,<1.21.0``
   :depends on r-arrow: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-dplyr: 
   :depends on r-readr: 
   :depends on r-sparklyr: 

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

    pixi global install bioconductor-msstatsbig

to add into an existing workspace instead, run::

    pixi add bioconductor-msstatsbig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msstatsbig

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msstatsbig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msstatsbig:<tag>

(see `bioconductor-msstatsbig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msstatsbig| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsbig.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsbig
   :alt:   (downloads)
.. |docker_bioconductor-msstatsbig| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsbig/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsbig
.. _`bioconductor-msstatsbig/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsbig?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsbig";
        var versions = ["1.8.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsbig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsbig/README.html