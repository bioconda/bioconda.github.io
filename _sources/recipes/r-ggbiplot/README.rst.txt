:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ggbiplot'
.. highlight: bash

r-ggbiplot
==========

.. conda:recipe:: r-ggbiplot
   :replaces_section_title:
   :noindex:

   A biplot based on ggplot2

   :homepage: http://github.com/vqv/ggbiplot
   :license: GPL-2
   :recipe: /`r-ggbiplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggbiplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggbiplot/meta.yaml>`_

   


.. conda:package:: r-ggbiplot

   |downloads_r-ggbiplot| |docker_r-ggbiplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.55-12</code>,  <code>0.55-11</code>,  <code>0.55-10</code>,  <code>0.55-9</code>,  <code>0.55-8</code>,  <code>0.55-7</code>,  <code>0.55-6</code>,  <code>0.55-5</code>,  <code>0.55-4</code>,  </span></summary>
      

      ``0.55-12``,  ``0.55-11``,  ``0.55-10``,  ``0.55-9``,  ``0.55-8``,  ``0.55-7``,  ``0.55-6``,  ``0.55-5``,  ``0.55-4``,  ``0.55-3``,  ``0.55-2``,  ``0.55-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-devtools: 
   :depends on r-ggplot2: 
   :depends on r-gridbase: 
   :depends on r-plyr: 
   :depends on r-scales: 

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

    pixi global install r-ggbiplot

to add into an existing workspace instead, run::

    pixi add r-ggbiplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ggbiplot

Alternatively, to install into a new environment, run::

    conda create -n envname r-ggbiplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ggbiplot:<tag>

(see `r-ggbiplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ggbiplot| image:: https://img.shields.io/conda/dn/bioconda/r-ggbiplot.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ggbiplot
   :alt:   (downloads)
.. |docker_r-ggbiplot| image:: https://quay.io/repository/biocontainers/r-ggbiplot/status
   :target: https://quay.io/repository/biocontainers/r-ggbiplot
.. _`r-ggbiplot/tags`: https://quay.io/repository/biocontainers/r-ggbiplot?tab=tags


.. raw:: html

    <script>
        var package = "r-ggbiplot";
        var versions = ["0.55","0.55","0.55","0.55","0.55"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggbiplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggbiplot/README.html