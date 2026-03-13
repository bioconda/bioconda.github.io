:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-deconstructsigs'
.. highlight: bash

r-deconstructsigs
=================

.. conda:recipe:: r-deconstructsigs
   :replaces_section_title:
   :noindex:

   Takes sample information in the form of the fraction of mutations in each of 96 trinucleotide contexts and identifies the weighted combination of published signatures that\, when summed\, most closely reconstructs the mutational profile.

   :homepage: https://github.com/raerose01/deconstructSigs
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-deconstructsigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconstructsigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-deconstructsigs/meta.yaml>`_

   


.. conda:package:: r-deconstructsigs

   |downloads_r-deconstructsigs| |docker_r-deconstructsigs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.0-4</code>,  <code>1.9.0-3</code>,  <code>1.9.0-2</code>,  <code>1.9.0-1</code>,  <code>1.9.0-0</code>,  <code>1.8.0.1-4</code>,  <code>1.8.0.1-3</code>,  <code>1.8.0.1-2</code>,  <code>1.8.0.1-1</code>,  </span></summary>
      

      ``1.9.0-4``,  ``1.9.0-3``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0.1-4``,  ``1.8.0.1-3``,  ``1.8.0.1-2``,  ``1.8.0.1-1``,  ``1.8.0.1-0``,  ``1.8.0-2``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends on bioconductor-genomeinfodb: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-reshape2: 

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

    pixi global install r-deconstructsigs

to add into an existing workspace instead, run::

    pixi add r-deconstructsigs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-deconstructsigs

Alternatively, to install into a new environment, run::

    conda create -n envname r-deconstructsigs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-deconstructsigs:<tag>

(see `r-deconstructsigs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-deconstructsigs| image:: https://img.shields.io/conda/dn/bioconda/r-deconstructsigs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-deconstructsigs
   :alt:   (downloads)
.. |docker_r-deconstructsigs| image:: https://quay.io/repository/biocontainers/r-deconstructsigs/status
   :target: https://quay.io/repository/biocontainers/r-deconstructsigs
.. _`r-deconstructsigs/tags`: https://quay.io/repository/biocontainers/r-deconstructsigs?tab=tags


.. raw:: html

    <script>
        var package = "r-deconstructsigs";
        var versions = ["1.9.0","1.9.0","1.9.0","1.9.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-deconstructsigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-deconstructsigs/README.html