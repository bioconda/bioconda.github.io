:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lpsymphony'
.. highlight: bash

bioconductor-lpsymphony
=======================

.. conda:recipe:: bioconductor-lpsymphony
   :replaces_section_title:
   :noindex:

   Symphony integer linear programming solver in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lpsymphony.html
   :license: EPL
   :recipe: /`bioconductor-lpsymphony <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpsymphony>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lpsymphony/meta.yaml>`_
   :links: biotools: :biotools:`lpsymphony`, doi: :doi:`10.1007/0-387-23529-9_5`

   This package was derived from Rsymphony\_0.1\-17 from CRAN. These packages provide an R interface to SYMPHONY\, an open\-source linear programming solver written in C\+\+. The main difference between this package and Rsymphony is that it includes the solver source code \(SYMPHONY version 5.6\)\, while Rsymphony expects to find header and library files on the users\' system. Thus the intention of lpsymphony is to provide an easy to install interface to SYMPHONY. For Windows\, precompiled DLLs are included in this package.


.. conda:package:: bioconductor-lpsymphony

   |downloads_bioconductor-lpsymphony| |docker_bioconductor-lpsymphony|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-lpsymphony

to add into an existing workspace instead, run::

    pixi add bioconductor-lpsymphony

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lpsymphony

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lpsymphony

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lpsymphony:<tag>

(see `bioconductor-lpsymphony/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lpsymphony| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lpsymphony.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lpsymphony
   :alt:   (downloads)
.. |docker_bioconductor-lpsymphony| image:: https://quay.io/repository/biocontainers/bioconductor-lpsymphony/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lpsymphony
.. _`bioconductor-lpsymphony/tags`: https://quay.io/repository/biocontainers/bioconductor-lpsymphony?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lpsymphony";
        var versions = ["1.38.0","1.34.0","1.34.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lpsymphony/README.html