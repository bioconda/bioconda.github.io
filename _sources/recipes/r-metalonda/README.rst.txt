:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metalonda'
.. highlight: bash

r-metalonda
===========

.. conda:recipe:: r-metalonda
   :replaces_section_title:
   :noindex:

   Identify time intervals of differentially abundant metagenomics features in longitudinal studies.

   :homepage: https://github.com/aametwally/MetaLonDA
   :license: MIT / MIT
   :recipe: /`r-metalonda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metalonda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metalonda/meta.yaml>`_

   


.. conda:package:: r-metalonda

   |downloads_r-metalonda| |docker_r-metalonda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.8-6</code>,  <code>1.1.8-5</code>,  <code>1.1.8-4</code>,  <code>1.1.8-3</code>,  <code>1.1.8-2</code>,  <code>1.1.8-1</code>,  <code>1.1.8-0</code>,  <code>1.1.5-0</code>,  <code>1.1.0-5</code>,  </span></summary>
      

      ``1.1.8-6``,  ``1.1.8-5``,  ``1.1.8-4``,  ``1.1.8-3``,  ``1.1.8-2``,  ``1.1.8-1``,  ``1.1.8-0``,  ``1.1.5-0``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-edger: 
   :depends on bioconductor-metagenomeseq: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-ggplot2: 
   :depends on r-gss: 
   :depends on r-plyr: 
   :depends on r-pracma: 
   :depends on r-zoo: 

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

    pixi global install r-metalonda

to add into an existing workspace instead, run::

    pixi add r-metalonda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-metalonda

Alternatively, to install into a new environment, run::

    conda create -n envname r-metalonda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-metalonda:<tag>

(see `r-metalonda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-metalonda| image:: https://img.shields.io/conda/dn/bioconda/r-metalonda.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metalonda
   :alt:   (downloads)
.. |docker_r-metalonda| image:: https://quay.io/repository/biocontainers/r-metalonda/status
   :target: https://quay.io/repository/biocontainers/r-metalonda
.. _`r-metalonda/tags`: https://quay.io/repository/biocontainers/r-metalonda?tab=tags


.. raw:: html

    <script>
        var package = "r-metalonda";
        var versions = ["1.1.8","1.1.8","1.1.8","1.1.8","1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metalonda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metalonda/README.html