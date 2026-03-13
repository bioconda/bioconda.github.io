:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peco'
.. highlight: bash

bioconductor-peco
=================

.. conda:recipe:: bioconductor-peco
   :replaces_section_title:
   :noindex:

   A Supervised Approach for \*\*P\*\*r\*\*e\*\*dicting \*\*c\*\*ell Cycle Pr\*\*o\*\*gression using scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/peco.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-peco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peco/meta.yaml>`_

   Our approach provides a way to assign continuous cell cycle phase using scRNA\-seq data\, and consequently\, allows to identify cyclic trend of gene expression levels along the cell cycle. This package provides method and training data\, which includes scRNA\-seq data collected from 6 individual cell lines of induced pluripotent stem cells \(iPSCs\)\, and also continuous cell cycle phase derived from FUCCI fluorescence imaging data.


.. conda:package:: bioconductor-peco

   |downloads_bioconductor-peco| |docker_bioconductor-peco|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circular: 
   :depends on r-conicfit: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-genlasso: ``>=1.4``

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

    pixi global install bioconductor-peco

to add into an existing workspace instead, run::

    pixi add bioconductor-peco

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-peco

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-peco

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-peco:<tag>

(see `bioconductor-peco/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-peco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peco
   :alt:   (downloads)
.. |docker_bioconductor-peco| image:: https://quay.io/repository/biocontainers/bioconductor-peco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peco
.. _`bioconductor-peco/tags`: https://quay.io/repository/biocontainers/bioconductor-peco?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peco";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peco/README.html