:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-immunedeconv'
.. highlight: bash

r-immunedeconv
==============

.. conda:recipe:: r-immunedeconv
   :replaces_section_title:
   :noindex:

   collection of methods for immune cell deconvolution of bulk RNA\-seq samples.

   :homepage: https://github.com/omnideconv/immunedeconv
   :license: BSD / BSD_3_clause
   :recipe: /`r-immunedeconv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immunedeconv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-immunedeconv/meta.yaml>`_
   :links: doi: :doi:`10.1101/463828`

   


.. conda:package:: r-immunedeconv

   |downloads_r-immunedeconv| |docker_r-immunedeconv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-3</code>,  <code>2.1.2-2</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>2.1.1-1</code>,  <code>2.1.1-0</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.3-2</code>,  </span></summary>
      

      ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-biocparallel: 
   :depends on bioconductor-biomart: 
   :depends on bioconductor-preprocesscore: 
   :depends on bioconductor-quantiseqr: 
   :depends on bioconductor-sva: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-comics: 
   :depends on r-consensustme: 
   :depends on r-data.tree: ``>=0.7``
   :depends on r-dplyr: ``>=0.7``
   :depends on r-e1071: ``>=1.6``
   :depends on r-epic: ``>=1.1``
   :depends on r-limsolve: ``>=1.5.5.1``
   :depends on r-magrittr: ``>=1.5``
   :depends on r-mcpcounter: 
   :depends on r-mmcpcounter: 
   :depends on r-readr: ``>=1.1``
   :depends on r-readxl: ``>=1.0``
   :depends on r-testit: ``>=0.7``
   :depends on r-tibble: ``>=1.4.2``
   :depends on r-xcell: ``>=1.2``

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

    pixi global install r-immunedeconv

to add into an existing workspace instead, run::

    pixi add r-immunedeconv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-immunedeconv

Alternatively, to install into a new environment, run::

    conda create -n envname r-immunedeconv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-immunedeconv:<tag>

(see `r-immunedeconv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-immunedeconv| image:: https://img.shields.io/conda/dn/bioconda/r-immunedeconv.svg?style=flat
   :target: https://anaconda.org/bioconda/r-immunedeconv
   :alt:   (downloads)
.. |docker_r-immunedeconv| image:: https://quay.io/repository/biocontainers/r-immunedeconv/status
   :target: https://quay.io/repository/biocontainers/r-immunedeconv
.. _`r-immunedeconv/tags`: https://quay.io/repository/biocontainers/r-immunedeconv?tab=tags


.. raw:: html

    <script>
        var package = "r-immunedeconv";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.2","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-immunedeconv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-immunedeconv/README.html