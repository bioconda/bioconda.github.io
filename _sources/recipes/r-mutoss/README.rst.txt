:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mutoss'
.. highlight: bash

r-mutoss
========

.. conda:recipe:: r-mutoss
   :replaces_section_title:
   :noindex:

   Designed to ease the application and comparison of multiple hypothesis testing procedures for FWER\, gFWER\, FDR and FDX. Methods are  standardized and usable by the accompanying \'mutossGUI\'.

   :homepage: https://github.com/kornl/mutoss/
   :license: GPL / GPL
   :recipe: /`r-mutoss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutoss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mutoss/meta.yaml>`_

   


.. conda:package:: r-mutoss

   |downloads_r-mutoss| |docker_r-mutoss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1_12-8</code>,  <code>0.1_12-7</code>,  <code>0.1_12-6</code>,  <code>0.1_12-5</code>,  <code>0.1_12-4</code>,  <code>0.1_12-3</code>,  <code>0.1_12-2</code>,  <code>0.1_12-1</code>,  <code>0.1_12-0</code>,  </span></summary>
      

      ``0.1_12-8``,  ``0.1_12-7``,  ``0.1_12-6``,  ``0.1_12-5``,  ``0.1_12-4``,  ``0.1_12-3``,  ``0.1_12-2``,  ``0.1_12-1``,  ``0.1_12-0``,  ``0.1_10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-multtest: ``>=2.2.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-multcomp: ``>=1.1_0``
   :depends on r-mvtnorm: 
   :depends on r-plotrix: 

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

    pixi global install r-mutoss

to add into an existing workspace instead, run::

    pixi add r-mutoss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-mutoss

Alternatively, to install into a new environment, run::

    conda create -n envname r-mutoss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-mutoss:<tag>

(see `r-mutoss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-mutoss| image:: https://img.shields.io/conda/dn/bioconda/r-mutoss.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mutoss
   :alt:   (downloads)
.. |docker_r-mutoss| image:: https://quay.io/repository/biocontainers/r-mutoss/status
   :target: https://quay.io/repository/biocontainers/r-mutoss
.. _`r-mutoss/tags`: https://quay.io/repository/biocontainers/r-mutoss?tab=tags


.. raw:: html

    <script>
        var package = "r-mutoss";
        var versions = ["0.1_12","0.1_12","0.1_12","0.1_12","0.1_12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mutoss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mutoss/README.html