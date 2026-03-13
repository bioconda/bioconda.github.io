:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mkmisc'
.. highlight: bash

r-mkmisc
========

.. conda:recipe:: r-mkmisc
   :replaces_section_title:
   :noindex:

   Contains several functions for statistical data analysis\; e.g. for sample size and power calculations\, computation of confidence intervals and tests\, and generation of similarity matrices.

   :homepage: http://www.stamats.de/
   :license: LGPL / LGPL-3.0-only
   :recipe: /`r-mkmisc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mkmisc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mkmisc/meta.yaml>`_

   


.. conda:package:: r-mkmisc

   |downloads_r-mkmisc| |docker_r-mkmisc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9-3</code>,  <code>1.9-2</code>,  <code>1.9-1</code>,  <code>1.9-0</code>,  <code>1.8-1</code>,  <code>1.8-0</code>,  <code>1.6-3</code>,  <code>1.6-2</code>,  <code>1.6-1</code>,  </span></summary>
      

      ``1.9-3``,  ``1.9-2``,  ``1.9-1``,  ``1.9-0``,  ``1.8-1``,  ``1.8-0``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-rcolorbrewer: 
   :depends on r-robustbase: 
   :depends on r-scales: 

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

    pixi global install r-mkmisc

to add into an existing workspace instead, run::

    pixi add r-mkmisc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mkmisc

Alternatively, to install into a new environment, run::

    conda create -n envname r-mkmisc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mkmisc:<tag>

(see `r-mkmisc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mkmisc| image:: https://img.shields.io/conda/dn/bioconda/r-mkmisc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mkmisc
   :alt:   (downloads)
.. |docker_r-mkmisc| image:: https://quay.io/repository/biocontainers/r-mkmisc/status
   :target: https://quay.io/repository/biocontainers/r-mkmisc
.. _`r-mkmisc/tags`: https://quay.io/repository/biocontainers/r-mkmisc?tab=tags


.. raw:: html

    <script>
        var package = "r-mkmisc";
        var versions = ["1.9","1.9","1.9","1.9","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mkmisc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mkmisc/README.html