:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metama'
.. highlight: bash

r-metama
========

.. conda:recipe:: r-metama
   :replaces_section_title:
   :noindex:

   Combines either p\-values or modified effect sizes from different studies to find differentially expressed genes

   :homepage: https://CRAN.R-project.org/package=metaMA
   :license: GPL / GPL
   :recipe: /`r-metama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metama/meta.yaml>`_

   


.. conda:package:: r-metama

   |downloads_r-metama| |docker_r-metama|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.3-3</code>,  <code>3.1.3-2</code>,  <code>3.1.3-1</code>,  <code>3.1.3-0</code>,  <code>3.1.2-7</code>,  <code>3.1.2-6</code>,  <code>3.1.2-5</code>,  <code>3.1.2-4</code>,  <code>3.1.2-3</code>,  </span></summary>
      

      ``3.1.3-3``,  ``3.1.3-2``,  ``3.1.3-1``,  ``3.1.3-0``,  ``3.1.2-7``,  ``3.1.2-6``,  ``3.1.2-5``,  ``3.1.2-4``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-smvar: 

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

    pixi global install r-metama

to add into an existing workspace instead, run::

    pixi add r-metama

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-metama

Alternatively, to install into a new environment, run::

    conda create -n envname r-metama

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-metama:<tag>

(see `r-metama/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-metama| image:: https://img.shields.io/conda/dn/bioconda/r-metama.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metama
   :alt:   (downloads)
.. |docker_r-metama| image:: https://quay.io/repository/biocontainers/r-metama/status
   :target: https://quay.io/repository/biocontainers/r-metama
.. _`r-metama/tags`: https://quay.io/repository/biocontainers/r-metama?tab=tags


.. raw:: html

    <script>
        var package = "r-metama";
        var versions = ["3.1.3","3.1.3","3.1.3","3.1.3","3.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metama/README.html