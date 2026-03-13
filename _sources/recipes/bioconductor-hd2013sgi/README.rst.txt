:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hd2013sgi'
.. highlight: bash

bioconductor-hd2013sgi
======================

.. conda:recipe:: bioconductor-hd2013sgi
   :replaces_section_title:
   :noindex:

   Mapping genetic interactions in human cancer cells with RNAi and multiparametric phenotyping

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/HD2013SGI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hd2013sgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hd2013sgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hd2013sgi/meta.yaml>`_

   This package contains the experimental data and a complete executable transcript \(vignette\) of the analysis of the HCT116 genetic interaction matrix presented in the paper \"Mapping genetic interactions in human cancer cells with RNAi and multiparametric phenotyping\" by C. Laufer\, B. Fischer\, M. Billmann\, W. Huber\, M. Boutros\; Nature Methods \(2013\) 10\:427\-31. doi\: 10.1038\/nmeth.2436.


.. conda:package:: bioconductor-hd2013sgi

   |downloads_bioconductor-hd2013sgi| |docker_bioconductor-hd2013sgi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-geneplotter: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-splots: ``>=1.76.0,<1.77.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 
   :depends on r-lsd: 
   :depends on r-rcolorbrewer: 
   :depends on r-vcd: 

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

    pixi global install bioconductor-hd2013sgi

to add into an existing workspace instead, run::

    pixi add bioconductor-hd2013sgi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hd2013sgi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hd2013sgi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hd2013sgi:<tag>

(see `bioconductor-hd2013sgi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hd2013sgi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hd2013sgi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hd2013sgi
   :alt:   (downloads)
.. |docker_bioconductor-hd2013sgi| image:: https://quay.io/repository/biocontainers/bioconductor-hd2013sgi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hd2013sgi
.. _`bioconductor-hd2013sgi/tags`: https://quay.io/repository/biocontainers/bioconductor-hd2013sgi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hd2013sgi";
        var versions = ["1.50.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hd2013sgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hd2013sgi/README.html