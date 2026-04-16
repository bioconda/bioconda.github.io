:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nupop'
.. highlight: bash

bioconductor-nupop
==================

.. conda:recipe:: bioconductor-nupop
   :replaces_section_title:
   :noindex:

   An R package for nucleosome positioning prediction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NuPoP.html
   :license: GPL-2
   :recipe: /`bioconductor-nupop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nupop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nupop/meta.yaml>`_

   NuPoP is an R package for Nucleosome Positioning Prediction.This package is built upon a duration hidden Markov model proposed in Xi et al\, 2010\; Wang et al\, 2008. The core of the package was written in Fotran. In addition to the R package\, a stand\-alone Fortran software tool is also available at https\:\/\/github.com\/jipingw. The Fortran codes have complete functonality as the R package.  Note\: NuPoP has two separate functions for prediction of nucleosome positioning\, one for MNase\-map trained models and the other for chemical map\-trained models. The latter was implemented for four species including yeast\, S.pombe\, mouse and human\, trained based on our recent publications. We noticed there is another package nuCpos by another group for prediction of nucleosome positioning trained with chemicals. A report to compare recent versions of NuPoP with nuCpos can be found at https\:\/\/github.com\/jiping\/NuPoP\_doc. Some more information can be found and will be posted at https\:\/\/github.com\/jipingw\/NuPoP.


.. conda:package:: bioconductor-nupop

   |downloads_bioconductor-nupop| |docker_bioconductor-nupop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.1-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.2.0-2</code>,  <code>2.2.0-1</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.14.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.1-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=14.3.0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install bioconductor-nupop

to add into an existing workspace instead, run::

    pixi add bioconductor-nupop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nupop

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nupop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nupop:<tag>

(see `bioconductor-nupop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nupop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nupop.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nupop
   :alt:   (downloads)
.. |docker_bioconductor-nupop| image:: https://quay.io/repository/biocontainers/bioconductor-nupop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nupop
.. _`bioconductor-nupop/tags`: https://quay.io/repository/biocontainers/bioconductor-nupop?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nupop";
        var versions = ["2.18.0","2.14.0","2.10.0","2.10.0","2.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nupop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nupop/README.html