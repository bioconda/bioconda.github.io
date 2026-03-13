:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-chord'
.. highlight: bash

r-chord
=======

.. conda:recipe:: r-chord
   :replaces_section_title:
   :noindex:

   Predict HRD using somatic mutations contexts

   :homepage: https://github.com/UMCUGenetics/CHORD
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-chord <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chord>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chord/meta.yaml>`_

   


.. conda:package:: r-chord

   |downloads_r-chord| |docker_r-chord|

   :versions:
      
      

      ``2.03-0``,  ``2.02-0``

      

   
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: 
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-mutsigextractor: ``1.14``
   :depends on r-randomforest: 

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

    pixi global install r-chord

to add into an existing workspace instead, run::

    pixi add r-chord

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-chord

Alternatively, to install into a new environment, run::

    conda create -n envname r-chord

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-chord:<tag>

(see `r-chord/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-chord| image:: https://img.shields.io/conda/dn/bioconda/r-chord.svg?style=flat
   :target: https://anaconda.org/bioconda/r-chord
   :alt:   (downloads)
.. |docker_r-chord| image:: https://quay.io/repository/biocontainers/r-chord/status
   :target: https://quay.io/repository/biocontainers/r-chord
.. _`r-chord/tags`: https://quay.io/repository/biocontainers/r-chord?tab=tags


.. raw:: html

    <script>
        var package = "r-chord";
        var versions = ["2.03","2.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chord/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chord/README.html