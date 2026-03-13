:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-fgwas'
.. highlight: bash

r-fgwas
=======

.. conda:recipe:: r-fgwas
   :replaces_section_title:
   :noindex:

   GWAS tools for longitudinal genetic traits based on fGWAS statistical model.

   :homepage: https://github.com/wzhy2000/fGWAS
   :license: LGPL / GNU GPL
   :recipe: /`r-fgwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fgwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fgwas/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.jgg.2018.06.006`

   


.. conda:package:: r-fgwas

   |downloads_r-fgwas| |docker_r-fgwas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-8</code>,  <code>0.3.6-7</code>,  <code>0.3.6-6</code>,  <code>0.3.6-5</code>,  <code>0.3.6-4</code>,  <code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  <code>0.3.6-0</code>,  </span></summary>
      

      ``0.3.6-8``,  ``0.3.6-7``,  ``0.3.6-6``,  ``0.3.6-5``,  ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-snpstats: 
   :depends on parallel: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-devtools: 
   :depends on r-minpack.lm: 
   :depends on r-mvtnorm: 

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

    pixi global install r-fgwas

to add into an existing workspace instead, run::

    pixi add r-fgwas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-fgwas

Alternatively, to install into a new environment, run::

    conda create -n envname r-fgwas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-fgwas:<tag>

(see `r-fgwas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-fgwas| image:: https://img.shields.io/conda/dn/bioconda/r-fgwas.svg?style=flat
   :target: https://anaconda.org/bioconda/r-fgwas
   :alt:   (downloads)
.. |docker_r-fgwas| image:: https://quay.io/repository/biocontainers/r-fgwas/status
   :target: https://quay.io/repository/biocontainers/r-fgwas
.. _`r-fgwas/tags`: https://quay.io/repository/biocontainers/r-fgwas?tab=tags


.. raw:: html

    <script>
        var package = "r-fgwas";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.6","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fgwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fgwas/README.html