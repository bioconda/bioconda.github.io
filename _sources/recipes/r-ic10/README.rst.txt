:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ic10'
.. highlight: bash

r-ic10
======

.. conda:recipe:: r-ic10
   :replaces_section_title:
   :noindex:

   Genome\-driven integrated classification of breast cancer validated in over 7\,500 samples

   :homepage: https://CRAN.R-project.org/package=iC10
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`r-ic10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ic10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ic10/meta.yaml>`_

   


.. conda:package:: r-ic10

   |downloads_r-ic10| |docker_r-ic10|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.2-3</code>,  <code>2.0.2-2</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>1.5-6</code>,  <code>1.5-5</code>,  <code>1.5-4</code>,  <code>1.5-3</code>,  <code>1.5-2</code>,  </span></summary>
      

      ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``1.5-6``,  ``1.5-5``,  ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ic10trainingdata: 
   :depends on r-pamr: 

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

    pixi global install r-ic10

to add into an existing workspace instead, run::

    pixi add r-ic10

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ic10

Alternatively, to install into a new environment, run::

    conda create -n envname r-ic10

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ic10:<tag>

(see `r-ic10/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ic10| image:: https://img.shields.io/conda/dn/bioconda/r-ic10.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ic10
   :alt:   (downloads)
.. |docker_r-ic10| image:: https://quay.io/repository/biocontainers/r-ic10/status
   :target: https://quay.io/repository/biocontainers/r-ic10
.. _`r-ic10/tags`: https://quay.io/repository/biocontainers/r-ic10?tab=tags


.. raw:: html

    <script>
        var package = "r-ic10";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ic10/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ic10/README.html