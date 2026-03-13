:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-banksy'
.. highlight: bash

bioconductor-banksy
===================

.. conda:recipe:: bioconductor-banksy
   :replaces_section_title:
   :noindex:

   Spatial transcriptomic clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Banksy.html
   :license: file LICENSE
   :recipe: /`bioconductor-banksy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-banksy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-banksy/meta.yaml>`_

   Banksy is an R package that incorporates spatial information to cluster cells in a feature space \(e.g. gene expression\). To incorporate spatial information\, BANKSY computes the mean neighborhood expression and azimuthal Gabor filters that capture gene expression gradients. These features are combined with the cell\'s own expression to embed cells in a neighbor\-augmented product space which can then be clustered\, allowing for accurate and spatially\-aware cell typing and tissue domain segmentation.


.. conda:package:: bioconductor-banksy

   |downloads_bioconductor-banksy| |docker_bioconductor-banksy|

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

    pixi global install bioconductor-banksy

to add into an existing workspace instead, run::

    pixi add bioconductor-banksy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-banksy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-banksy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-banksy:<tag>

(see `bioconductor-banksy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-banksy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-banksy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-banksy
   :alt:   (downloads)
.. |docker_bioconductor-banksy| image:: https://quay.io/repository/biocontainers/bioconductor-banksy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-banksy
.. _`bioconductor-banksy/tags`: https://quay.io/repository/biocontainers/bioconductor-banksy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-banksy";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-banksy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-banksy/README.html