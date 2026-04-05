:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-biodb'
.. highlight: bash

r-biodb
=======

.. conda:recipe:: r-biodb
   :replaces_section_title:
   :noindex:

   An R package for connecting to chemical and biological databases.

   :homepage: https://github.com/pkrog/biodb
   :license: AGPL-3.0
   :recipe: /`r-biodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biodb/meta.yaml>`_

   


.. conda:package:: r-biodb

   |downloads_r-biodb| |docker_r-biodb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-10</code>,  <code>1.2.2-9</code>,  <code>1.2.2-8</code>,  <code>1.2.2-7</code>,  <code>1.2.2-6</code>,  <code>1.2.2-5</code>,  <code>1.2.2-4</code>,  <code>1.2.2-3</code>,  <code>1.2.2-2</code>,  </span></summary>
      

      ``1.2.2-10``,  ``1.2.2-9``,  ``1.2.2-8``,  ``1.2.2-7``,  ``1.2.2-6``,  ``1.2.2-5``,  ``1.2.2-4``,  ``1.2.2-3``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0rc2-1``,  ``1.2.0rc2-0``,  ``1.2.0a-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bitops: 
   :depends on r-digest: 
   :depends on r-jsonlite: 
   :depends on r-plyr: 
   :depends on r-r.utils: 
   :depends on r-rcpp: 
   :depends on r-rcurl: 
   :depends on r-stringr: 
   :depends on r-xml: 

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

    pixi global install r-biodb

to add into an existing workspace instead, run::

    pixi add r-biodb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-biodb

Alternatively, to install into a new environment, run::

    conda create -n envname r-biodb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-biodb:<tag>

(see `r-biodb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-biodb| image:: https://img.shields.io/conda/dn/bioconda/r-biodb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-biodb
   :alt:   (downloads)
.. |docker_r-biodb| image:: https://quay.io/repository/biocontainers/r-biodb/status
   :target: https://quay.io/repository/biocontainers/r-biodb
.. _`r-biodb/tags`: https://quay.io/repository/biocontainers/r-biodb?tab=tags


.. raw:: html

    <script>
        var package = "r-biodb";
        var versions = ["1.2.2","1.2.2","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biodb/README.html