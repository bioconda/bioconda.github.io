:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'superstr'
.. highlight: bash

superstr
========

.. conda:recipe:: superstr
   :replaces_section_title:
   :noindex:

   A lightweight\, alignment\-free utility for detecting repeat\-containing reads in short\-read WGS\, WES and RNA\-seq data.

   :homepage: https://github.com/bahlolab/superSTR
   :license: GPL-2.0
   :recipe: /`superstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superstr/meta.yaml>`_

   


.. conda:package:: superstr

   |downloads_superstr| |docker_superstr|

   :versions:
      
      

      ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on arch-py: ``>=4.15``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libcurl: ``>=8.11.1,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: ``>=3.4.1``
   :depends on mpmath: ``>=1.2.1``
   :depends on numpy: ``>=1.20.1``
   :depends on pandas: ``>=1.2.2``
   :depends on python: ``>=3.8.3``
   :depends on scipy: ``>=1.6.1``
   :depends on seaborn: ``>=0.11.1``
   :depends on statsmodels: ``>=0.12.2``
   :depends on tqdm: ``>=4.59``

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

    pixi global install superstr

to add into an existing workspace instead, run::

    pixi add superstr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install superstr

Alternatively, to install into a new environment, run::

    conda create -n envname superstr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/superstr:<tag>

(see `superstr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_superstr| image:: https://img.shields.io/conda/dn/bioconda/superstr.svg?style=flat
   :target: https://anaconda.org/bioconda/superstr
   :alt:   (downloads)
.. |docker_superstr| image:: https://quay.io/repository/biocontainers/superstr/status
   :target: https://quay.io/repository/biocontainers/superstr
.. _`superstr/tags`: https://quay.io/repository/biocontainers/superstr?tab=tags


.. raw:: html

    <script>
        var package = "superstr";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/superstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/superstr/README.html