:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-restfulr'
.. highlight: bash

r-restfulr
==========

.. conda:recipe:: r-restfulr
   :replaces_section_title:
   :noindex:

   Models a RESTful service as if it were a nested R list.

   :homepage: https://CRAN.R-project.org/package=restfulr
   :license: OTHER / Artistic-2.0
   :recipe: /`r-restfulr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-restfulr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-restfulr/meta.yaml>`_

   


.. conda:package:: r-restfulr

   |downloads_r-restfulr| |docker_r-restfulr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.16-1</code>,  <code>0.0.16-0</code>,  <code>0.0.15-6</code>,  <code>0.0.15-5</code>,  <code>0.0.15-4</code>,  <code>0.0.15-3</code>,  <code>0.0.15-2</code>,  <code>0.0.15-1</code>,  <code>0.0.15-0</code>,  </span></summary>
      

      ``0.0.16-1``,  ``0.0.16-0``,  ``0.0.15-6``,  ``0.0.15-5``,  ``0.0.15-4``,  ``0.0.15-3``,  ``0.0.15-2``,  ``0.0.15-1``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-2``,  ``0.0.13-1``,  ``0.0.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-s4vectors: ``>=0.13.15``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libgcc: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rcurl: 
   :depends on r-rjson: 
   :depends on r-xml: 
   :depends on r-yaml: 

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

    pixi global install r-restfulr

to add into an existing workspace instead, run::

    pixi add r-restfulr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-restfulr

Alternatively, to install into a new environment, run::

    conda create -n envname r-restfulr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-restfulr:<tag>

(see `r-restfulr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-restfulr| image:: https://img.shields.io/conda/dn/bioconda/r-restfulr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-restfulr
   :alt:   (downloads)
.. |docker_r-restfulr| image:: https://quay.io/repository/biocontainers/r-restfulr/status
   :target: https://quay.io/repository/biocontainers/r-restfulr
.. _`r-restfulr/tags`: https://quay.io/repository/biocontainers/r-restfulr?tab=tags


.. raw:: html

    <script>
        var package = "r-restfulr";
        var versions = ["0.0.16","0.0.16","0.0.15","0.0.15","0.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-restfulr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-restfulr/README.html