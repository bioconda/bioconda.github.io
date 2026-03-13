:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cimpl'
.. highlight: bash

r-cimpl
=======

.. conda:recipe:: r-cimpl
   :replaces_section_title:
   :noindex:

   An analysis package for multi sample insertional mutagenesis data \(including viral\- and transposon\-based systems\) using Gaussian kernel convolution to identify common insertion sites.

   :homepage: https://www.nki.nl/research/research-groups/lodewyk-wessels/our-resources
   :documentation: https://github.com/NKI-CCB/cimpl/blob/v1.1/README.md
   
   :developer docs: https://github.com/NKI-CCB/cimpl
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-cimpl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cimpl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cimpl/meta.yaml>`_

   


.. conda:package:: r-cimpl

   |downloads_r-cimpl| |docker_r-cimpl|

   :versions:
      
      

      ``1.1-8``,  ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-0``

      

   
   :depends on bioconductor-biomart: 
   :depends on bioconductor-biostrings: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-kernsmooth: 
   :depends on r-mass: 
   :depends on r-xtable: 

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

    pixi global install r-cimpl

to add into an existing workspace instead, run::

    pixi add r-cimpl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cimpl

Alternatively, to install into a new environment, run::

    conda create -n envname r-cimpl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cimpl:<tag>

(see `r-cimpl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cimpl| image:: https://img.shields.io/conda/dn/bioconda/r-cimpl.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cimpl
   :alt:   (downloads)
.. |docker_r-cimpl| image:: https://quay.io/repository/biocontainers/r-cimpl/status
   :target: https://quay.io/repository/biocontainers/r-cimpl
.. _`r-cimpl/tags`: https://quay.io/repository/biocontainers/r-cimpl?tab=tags


.. raw:: html

    <script>
        var package = "r-cimpl";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cimpl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cimpl/README.html