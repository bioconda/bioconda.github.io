:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rapidr'
.. highlight: bash

r-rapidr
========

.. conda:recipe:: r-rapidr
   :replaces_section_title:
   :noindex:

   Package to perform non\-invasive fetal testing for aneuploidies using sequencing count data from cell\-free DNA

   :homepage: https://CRAN.R-project.org/package=RAPIDR
   :license: GPL3 / GPL-3
   :recipe: /`r-rapidr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rapidr/meta.yaml>`_

   


.. conda:package:: r-rapidr

   |downloads_r-rapidr| |docker_r-rapidr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.1-10</code>,  <code>0.1.1-9</code>,  <code>0.1.1-8</code>,  <code>0.1.1-7</code>,  <code>0.1.1-6</code>,  <code>0.1.1-5</code>,  <code>0.1.1-4</code>,  <code>0.1.1-3</code>,  <code>0.1.1-2</code>,  </span></summary>
      

      ``0.1.1-10``,  ``0.1.1-9``,  ``0.1.1-8``,  ``0.1.1-7``,  ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-rsamtools: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-propcis: 

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

    pixi global install r-rapidr

to add into an existing workspace instead, run::

    pixi add r-rapidr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-rapidr

Alternatively, to install into a new environment, run::

    conda create -n envname r-rapidr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-rapidr:<tag>

(see `r-rapidr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-rapidr| image:: https://img.shields.io/conda/dn/bioconda/r-rapidr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rapidr
   :alt:   (downloads)
.. |docker_r-rapidr| image:: https://quay.io/repository/biocontainers/r-rapidr/status
   :target: https://quay.io/repository/biocontainers/r-rapidr
.. _`r-rapidr/tags`: https://quay.io/repository/biocontainers/r-rapidr?tab=tags


.. raw:: html

    <script>
        var package = "r-rapidr";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rapidr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rapidr/README.html