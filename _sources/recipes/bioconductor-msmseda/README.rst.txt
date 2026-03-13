:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msmseda'
.. highlight: bash

bioconductor-msmseda
====================

.. conda:recipe:: bioconductor-msmseda
   :replaces_section_title:
   :noindex:

   Exploratory Data Analysis of LC\-MS\/MS data by spectral counts

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/msmsEDA.html
   :license: GPL-2
   :recipe: /`bioconductor-msmseda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmseda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmseda/meta.yaml>`_
   :links: biotools: :biotools:`msmseda`, doi: :doi:`10.1038/nmeth.3252`

   Exploratory data analysis to assess the quality of a set of LC\-MS\/MS experiments\, and visualize de influence of the involved factors.


.. conda:package:: bioconductor-msmseda

   |downloads_bioconductor-msmseda| |docker_bioconductor-msmseda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 
   :depends on r-mass: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-msmseda

to add into an existing workspace instead, run::

    pixi add bioconductor-msmseda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msmseda

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msmseda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msmseda:<tag>

(see `bioconductor-msmseda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msmseda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msmseda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msmseda
   :alt:   (downloads)
.. |docker_bioconductor-msmseda| image:: https://quay.io/repository/biocontainers/bioconductor-msmseda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msmseda
.. _`bioconductor-msmseda/tags`: https://quay.io/repository/biocontainers/bioconductor-msmseda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msmseda";
        var versions = ["1.48.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msmseda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msmseda/README.html