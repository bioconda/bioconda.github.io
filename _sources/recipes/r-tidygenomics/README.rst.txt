:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tidygenomics'
.. highlight: bash

r-tidygenomics
==============

.. conda:recipe:: r-tidygenomics
   :replaces_section_title:
   :noindex:

   Handle genomic data within data frames just as you would with \'GRanges\'. This packages provides method to deal with genomic intervals the \"tidy\-way\" which makes it simpler to integrate in the the general data munging process. The API is inspired by the popular \'bedtools\' and the genome\_join\(\) method from the \'fuzzyjoin\' package.

   :homepage: https://github.com/const-ae/tidygenomics
   :license: GPL3 / GPL-3
   :recipe: /`r-tidygenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tidygenomics/meta.yaml>`_

   


.. conda:package:: r-tidygenomics

   |downloads_r-tidygenomics| |docker_r-tidygenomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.2-8</code>,  <code>0.1.2-7</code>,  <code>0.1.2-6</code>,  <code>0.1.2-5</code>,  <code>0.1.2-4</code>,  <code>0.1.2-3</code>,  <code>0.1.2-2</code>,  <code>0.1.2-1</code>,  <code>0.1.2-0</code>,  </span></summary>
      

      ``0.1.2-8``,  ``0.1.2-7``,  ``0.1.2-6``,  ``0.1.2-5``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-fuzzyjoin: ``>=0.1.3``
   :depends on r-purrr: 
   :depends on r-rcpp: 
   :depends on r-rlang: 
   :depends on r-tidyr: 

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

    pixi global install r-tidygenomics

to add into an existing workspace instead, run::

    pixi add r-tidygenomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-tidygenomics

Alternatively, to install into a new environment, run::

    conda create -n envname r-tidygenomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-tidygenomics:<tag>

(see `r-tidygenomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-tidygenomics| image:: https://img.shields.io/conda/dn/bioconda/r-tidygenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tidygenomics
   :alt:   (downloads)
.. |docker_r-tidygenomics| image:: https://quay.io/repository/biocontainers/r-tidygenomics/status
   :target: https://quay.io/repository/biocontainers/r-tidygenomics
.. _`r-tidygenomics/tags`: https://quay.io/repository/biocontainers/r-tidygenomics?tab=tags


.. raw:: html

    <script>
        var package = "r-tidygenomics";
        var versions = ["0.1.2","0.1.2","0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tidygenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tidygenomics/README.html