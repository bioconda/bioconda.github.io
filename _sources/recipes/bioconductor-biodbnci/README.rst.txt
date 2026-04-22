:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbnci'
.. highlight: bash

bioconductor-biodbnci
=====================

.. conda:recipe:: bioconductor-biodbnci
   :replaces_section_title:
   :noindex:

   biodbNci\, a library for connecting to biodbNci\, a library for connecting to the National Cancer Institute \(USA\) CACTUS Database

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biodbNci.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbnci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbnci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbnci/meta.yaml>`_

   The biodbNci library is an extension of the biodb framework package. It provides access to biodbNci\, a library for connecting to the National Cancer Institute \(USA\) CACTUS Database. It allows to retrieve entries by their accession number\, and run specific web services.


.. conda:package:: bioconductor-biodbnci

   |downloads_bioconductor-biodbnci| |docker_bioconductor-biodbnci|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biodb: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-biodb: ``>=1.14.0,<1.15.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-chk: 
   :depends on r-r6: 
   :depends on r-rcpp: 
   :depends on r-testthat: 

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

    pixi global install bioconductor-biodbnci

to add into an existing workspace instead, run::

    pixi add bioconductor-biodbnci

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biodbnci

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biodbnci

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biodbnci:<tag>

(see `bioconductor-biodbnci/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biodbnci| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbnci.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbnci
   :alt:   (downloads)
.. |docker_bioconductor-biodbnci| image:: https://quay.io/repository/biocontainers/bioconductor-biodbnci/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbnci
.. _`bioconductor-biodbnci/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbnci?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbnci";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbnci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbnci/README.html