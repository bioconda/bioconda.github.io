:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-samr'
.. highlight: bash

r-samr
======

.. conda:recipe:: r-samr
   :replaces_section_title:
   :noindex:

   Significance Analysis of Microarrays

   :homepage: http://www-stat.stanford.edu/~tibs/SAM
   :license: LGPL / LGPL
   :recipe: /`r-samr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-samr/meta.yaml>`_

   


.. conda:package:: r-samr

   |downloads_r-samr| |docker_r-samr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0-9</code>,  <code>3.0-8</code>,  <code>3.0-7</code>,  <code>3.0-6</code>,  <code>3.0-5</code>,  <code>3.0-4</code>,  <code>3.0-3</code>,  <code>3.0-2</code>,  <code>3.0-1</code>,  </span></summary>
      

      ``3.0-9``,  ``3.0-8``,  ``3.0-7``,  ``3.0-6``,  ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: ``>=1.56.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0a0``
   :depends on libgcc: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gsa: 
   :depends on r-matrixstats: 
   :depends on r-openxlsx: 
   :depends on r-shiny: 
   :depends on r-shinyfiles: 

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

    pixi global install r-samr

to add into an existing workspace instead, run::

    pixi add r-samr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-samr

Alternatively, to install into a new environment, run::

    conda create -n envname r-samr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-samr:<tag>

(see `r-samr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-samr| image:: https://img.shields.io/conda/dn/bioconda/r-samr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-samr
   :alt:   (downloads)
.. |docker_r-samr| image:: https://quay.io/repository/biocontainers/r-samr/status
   :target: https://quay.io/repository/biocontainers/r-samr
.. _`r-samr/tags`: https://quay.io/repository/biocontainers/r-samr?tab=tags


.. raw:: html

    <script>
        var package = "r-samr";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-samr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-samr/README.html