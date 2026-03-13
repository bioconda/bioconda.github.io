:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sbmlr'
.. highlight: bash

bioconductor-sbmlr
==================

.. conda:recipe:: bioconductor-sbmlr
   :replaces_section_title:
   :noindex:

   SBML\-R Interface and Analysis Tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SBMLR.html
   :license: GPL-2
   :recipe: /`bioconductor-sbmlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbmlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbmlr/meta.yaml>`_

   This package contains a systems biology markup language \(SBML\) interface to R.


.. conda:package:: bioconductor-sbmlr

   |downloads_bioconductor-sbmlr| |docker_bioconductor-sbmlr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>1.98.0-0</code>,  <code>1.96.0-0</code>,  <code>1.94.0-0</code>,  <code>1.90.0-0</code>,  <code>1.88.0-0</code>,  <code>1.86.0-1</code>,  <code>1.86.0-0</code>,  </span></summary>
      

      ``2.6.0-0``,  ``2.2.0-0``,  ``1.98.0-0``,  ``1.96.0-0``,  ``1.94.0-0``,  ``1.90.0-0``,  ``1.88.0-0``,  ``1.86.0-1``,  ``1.86.0-0``,  ``1.84.0-0``,  ``1.82.0-0``,  ``1.80.0-1``,  ``1.80.0-0``,  ``1.78.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-desolve: 
   :depends on r-xml: 

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

    pixi global install bioconductor-sbmlr

to add into an existing workspace instead, run::

    pixi add bioconductor-sbmlr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sbmlr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sbmlr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sbmlr:<tag>

(see `bioconductor-sbmlr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sbmlr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sbmlr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sbmlr
   :alt:   (downloads)
.. |docker_bioconductor-sbmlr| image:: https://quay.io/repository/biocontainers/bioconductor-sbmlr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sbmlr
.. _`bioconductor-sbmlr/tags`: https://quay.io/repository/biocontainers/bioconductor-sbmlr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sbmlr";
        var versions = ["2.6.0","2.2.0","1.98.0","1.96.0","1.94.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sbmlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sbmlr/README.html