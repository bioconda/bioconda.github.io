:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rrbgen'
.. highlight: bash

r-rrbgen
========

.. conda:recipe:: r-rrbgen
   :replaces_section_title:
   :noindex:

   A lightweight limited functionality R bgen read\/write library

   :homepage: https://github.com/rwdavies/rrbgen
   :license: GPL3 / GPL3
   :recipe: /`r-rrbgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen/meta.yaml>`_

   


.. conda:package:: r-rrbgen

   |downloads_r-rrbgen| |docker_r-rrbgen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.6-12</code>,  <code>0.0.6-11</code>,  <code>0.0.6-10</code>,  <code>0.0.6-9</code>,  <code>0.0.6-8</code>,  <code>0.0.6-7</code>,  <code>0.0.6-6</code>,  <code>0.0.6-5</code>,  <code>0.0.6-4</code>,  </span></summary>
      

      ``0.0.6-12``,  ``0.0.6-11``,  ``0.0.6-10``,  ``0.0.6-9``,  ``0.0.6-8``,  ``0.0.6-7``,  ``0.0.6-6``,  ``0.0.6-5``,  ``0.0.6-4``,  ``0.0.6-3``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-rcpp: ``>=0.12.18``
   :depends on r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends on r-testthat: ``>=2.0.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install r-rrbgen

to add into an existing workspace instead, run::

    pixi add r-rrbgen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-rrbgen

Alternatively, to install into a new environment, run::

    conda create -n envname r-rrbgen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-rrbgen:<tag>

(see `r-rrbgen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-rrbgen| image:: https://img.shields.io/conda/dn/bioconda/r-rrbgen.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rrbgen
   :alt:   (downloads)
.. |docker_r-rrbgen| image:: https://quay.io/repository/biocontainers/r-rrbgen/status
   :target: https://quay.io/repository/biocontainers/r-rrbgen
.. _`r-rrbgen/tags`: https://quay.io/repository/biocontainers/r-rrbgen?tab=tags


.. raw:: html

    <script>
        var package = "r-rrbgen";
        var versions = ["0.0.6","0.0.6","0.0.6","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rrbgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rrbgen/README.html