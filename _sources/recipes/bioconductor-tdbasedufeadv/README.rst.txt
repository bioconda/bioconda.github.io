:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tdbasedufeadv'
.. highlight: bash

bioconductor-tdbasedufeadv
==========================

.. conda:recipe:: bioconductor-tdbasedufeadv
   :replaces_section_title:
   :noindex:

   Advanced package of tensor decomposition based unsupervised feature extraction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TDbasedUFEadv.html
   :license: GPL-3
   :recipe: /`bioconductor-tdbasedufeadv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufeadv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdbasedufeadv/meta.yaml>`_

   This is an advanced version of TDbasedUFE\, which is a comprehensive package to perform Tensor decomposition based unsupervised feature extraction. In contrast to TDbasedUFE which can perform simple the feature selection and the multiomics analyses\, this package can perform more complicated and advanced features\, but they are not so popularly required. Only users who require more specific features can make use of its functionality.


.. conda:package:: bioconductor-tdbasedufeadv

   |downloads_bioconductor-tdbasedufeadv| |docker_bioconductor-tdbasedufeadv|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-enrichplot: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-rtcga: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-stringdb: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-tdbasedufe: ``>=1.10.0,<1.11.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-enrichr: 
   :depends on r-hash: 
   :depends on r-rtensor: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-tdbasedufeadv

to add into an existing workspace instead, run::

    pixi add bioconductor-tdbasedufeadv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tdbasedufeadv

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tdbasedufeadv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tdbasedufeadv:<tag>

(see `bioconductor-tdbasedufeadv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tdbasedufeadv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tdbasedufeadv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tdbasedufeadv
   :alt:   (downloads)
.. |docker_bioconductor-tdbasedufeadv| image:: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv
.. _`bioconductor-tdbasedufeadv/tags`: https://quay.io/repository/biocontainers/bioconductor-tdbasedufeadv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tdbasedufeadv";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tdbasedufeadv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tdbasedufeadv/README.html