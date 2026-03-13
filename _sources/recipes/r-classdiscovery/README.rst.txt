:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-classdiscovery'
.. highlight: bash

r-classdiscovery
================

.. conda:recipe:: r-classdiscovery
   :replaces_section_title:
   :noindex:

   Defines the classes used for \"class discovery\" problems in the OOMPA project \(\<http\:\/\/oompa.r\-forge.r\-project.org\/\>\). Class discovery primarily consists of unsupervised clustering methods with attempts to assess their statistical significance. 

   :homepage: https://oompa.r-forge.r-project.org
   :license: APACHE / Apache-2.0
   :recipe: /`r-classdiscovery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-classdiscovery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-classdiscovery/meta.yaml>`_

   


.. conda:package:: r-classdiscovery

   |downloads_r-classdiscovery| |docker_r-classdiscovery|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.9-0</code>,  <code>3.4.8-0</code>,  <code>3.4.5-1</code>,  <code>3.4.5-0</code>,  <code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.3.13-2</code>,  <code>3.3.13-1</code>,  </span></summary>
      

      ``3.4.9-0``,  ``3.4.8-0``,  ``3.4.5-1``,  ``3.4.5-0``,  ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.13-2``,  ``3.3.13-1``,  ``3.3.13-0``,  ``3.3.12-2``,  ``3.3.12-1``,  ``3.3.12-0``,  ``3.3.11-0``,  ``3.3.9-1``,  ``3.3.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cluster: 
   :depends on r-mclust: 
   :depends on r-oompabase: ``>=3.0.1``
   :depends on r-oompadata: 

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

    pixi global install r-classdiscovery

to add into an existing workspace instead, run::

    pixi add r-classdiscovery

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-classdiscovery

Alternatively, to install into a new environment, run::

    conda create -n envname r-classdiscovery

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-classdiscovery:<tag>

(see `r-classdiscovery/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-classdiscovery| image:: https://img.shields.io/conda/dn/bioconda/r-classdiscovery.svg?style=flat
   :target: https://anaconda.org/bioconda/r-classdiscovery
   :alt:   (downloads)
.. |docker_r-classdiscovery| image:: https://quay.io/repository/biocontainers/r-classdiscovery/status
   :target: https://quay.io/repository/biocontainers/r-classdiscovery
.. _`r-classdiscovery/tags`: https://quay.io/repository/biocontainers/r-classdiscovery?tab=tags


.. raw:: html

    <script>
        var package = "r-classdiscovery";
        var versions = ["3.4.9","3.4.8","3.4.5","3.4.5","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-classdiscovery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-classdiscovery/README.html