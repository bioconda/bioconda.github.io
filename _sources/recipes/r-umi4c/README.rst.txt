:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-umi4c'
.. highlight: bash

r-umi4c
=======

.. conda:recipe:: r-umi4c
   :replaces_section_title:
   :noindex:

   Process UMI\-4C data from scratch to produce nice plots.

   :homepage: https://tanaylab.github.io/umi4cpackage
   :license: GPL
   :recipe: /`r-umi4c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umi4c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-umi4c/meta.yaml>`_

   


.. conda:package:: r-umi4c

   |downloads_r-umi4c| |docker_r-umi4c|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.1-3</code>,  <code>0.0.1-2</code>,  <code>0.0.1-1</code>,  <code>0.0.1-0</code>,  <code>0.0.0.9000-5</code>,  <code>0.0.0.9000-4</code>,  <code>0.0.0.9000-3</code>,  <code>0.0.0.9000-2</code>,  <code>0.0.0.9000-1</code>,  </span></summary>
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``,  ``0.0.0.9000-5``,  ``0.0.0.9000-4``,  ``0.0.0.9000-3``,  ``0.0.0.9000-2``,  ``0.0.0.9000-1``,  ``0.0.0.9000-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-misha: 
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

    pixi global install r-umi4c

to add into an existing workspace instead, run::

    pixi add r-umi4c

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-umi4c

Alternatively, to install into a new environment, run::

    conda create -n envname r-umi4c

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-umi4c:<tag>

(see `r-umi4c/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-umi4c| image:: https://img.shields.io/conda/dn/bioconda/r-umi4c.svg?style=flat
   :target: https://anaconda.org/bioconda/r-umi4c
   :alt:   (downloads)
.. |docker_r-umi4c| image:: https://quay.io/repository/biocontainers/r-umi4c/status
   :target: https://quay.io/repository/biocontainers/r-umi4c
.. _`r-umi4c/tags`: https://quay.io/repository/biocontainers/r-umi4c?tab=tags


.. raw:: html

    <script>
        var package = "r-umi4c";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1","0.0.0.9000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-umi4c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-umi4c/README.html