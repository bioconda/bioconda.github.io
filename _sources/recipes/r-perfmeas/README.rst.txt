:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-perfmeas'
.. highlight: bash

r-perfmeas
==========

.. conda:recipe:: r-perfmeas
   :replaces_section_title:
   :noindex:

   Package that implements different performance measures for classification and ranking tasks. AUC\, precision at a given recall\, F\-score for single and multiple classes are available.

   :homepage: https://CRAN.R-project.org/package=PerfMeas
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`r-perfmeas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-perfmeas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-perfmeas/meta.yaml>`_

   


.. conda:package:: r-perfmeas

   |downloads_r-perfmeas| |docker_r-perfmeas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.5-4</code>,  <code>1.2.5-3</code>,  <code>1.2.5-2</code>,  <code>1.2.5-1</code>,  <code>1.2.5-0</code>,  <code>1.2.1-7</code>,  <code>1.2.1-6</code>,  <code>1.2.1-5</code>,  <code>1.2.1-4</code>,  </span></summary>
      

      ``1.2.5-4``,  ``1.2.5-3``,  ``1.2.5-2``,  ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.1-7``,  ``1.2.1-6``,  ``1.2.1-5``,  ``1.2.1-4``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-graph: ``>=1.84.0,<1.85.0a0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0a0``
   :depends on bioconductor-rbgl: ``>=1.82.0,<1.83.0a0``
   :depends on libgcc: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-perfmeas

to add into an existing workspace instead, run::

    pixi add r-perfmeas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-perfmeas

Alternatively, to install into a new environment, run::

    conda create -n envname r-perfmeas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-perfmeas:<tag>

(see `r-perfmeas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-perfmeas| image:: https://img.shields.io/conda/dn/bioconda/r-perfmeas.svg?style=flat
   :target: https://anaconda.org/bioconda/r-perfmeas
   :alt:   (downloads)
.. |docker_r-perfmeas| image:: https://quay.io/repository/biocontainers/r-perfmeas/status
   :target: https://quay.io/repository/biocontainers/r-perfmeas
.. _`r-perfmeas/tags`: https://quay.io/repository/biocontainers/r-perfmeas?tab=tags


.. raw:: html

    <script>
        var package = "r-perfmeas";
        var versions = ["1.2.5","1.2.5","1.2.5","1.2.5","1.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-perfmeas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-perfmeas/README.html