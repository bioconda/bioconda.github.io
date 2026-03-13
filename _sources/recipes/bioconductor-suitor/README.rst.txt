:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-suitor'
.. highlight: bash

bioconductor-suitor
===================

.. conda:recipe:: bioconductor-suitor
   :replaces_section_title:
   :noindex:

   Selecting the number of mutational signatures through cross\-validation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SUITOR.html
   :license: GPL-2
   :recipe: /`bioconductor-suitor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suitor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-suitor/meta.yaml>`_

   An unsupervised cross\-validation method to select the optimal number of mutational signatures. A data set of mutational counts is split into training and validation data.Signatures are estimated in the training data and then used to predict the mutations in the validation data.


.. conda:package:: bioconductor-suitor

   |downloads_bioconductor-suitor| |docker_bioconductor-suitor|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 

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

    pixi global install bioconductor-suitor

to add into an existing workspace instead, run::

    pixi add bioconductor-suitor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-suitor

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-suitor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-suitor:<tag>

(see `bioconductor-suitor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-suitor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-suitor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-suitor
   :alt:   (downloads)
.. |docker_bioconductor-suitor| image:: https://quay.io/repository/biocontainers/bioconductor-suitor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-suitor
.. _`bioconductor-suitor/tags`: https://quay.io/repository/biocontainers/bioconductor-suitor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-suitor";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-suitor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-suitor/README.html