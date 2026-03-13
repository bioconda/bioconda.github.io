:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-chromvarmotifs'
.. highlight: bash

r-chromvarmotifs
================

.. conda:recipe:: r-chromvarmotifs
   :replaces_section_title:
   :noindex:

   Stores several motifs as PWMatrixList objects for use in R with packages like motifmatchr and chromVAR.

   :homepage: https://github.com/GreenleafLab/chromVARmotifs
   :license: MIT / MIT
   :recipe: /`r-chromvarmotifs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromvarmotifs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-chromvarmotifs/meta.yaml>`_

   


.. conda:package:: r-chromvarmotifs

   |downloads_r-chromvarmotifs| |docker_r-chromvarmotifs|

   :versions:
      
      

      ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends on bioconductor-tfbstools: 
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

    pixi global install r-chromvarmotifs

to add into an existing workspace instead, run::

    pixi add r-chromvarmotifs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-chromvarmotifs

Alternatively, to install into a new environment, run::

    conda create -n envname r-chromvarmotifs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-chromvarmotifs:<tag>

(see `r-chromvarmotifs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-chromvarmotifs| image:: https://img.shields.io/conda/dn/bioconda/r-chromvarmotifs.svg?style=flat
   :target: https://anaconda.org/bioconda/r-chromvarmotifs
   :alt:   (downloads)
.. |docker_r-chromvarmotifs| image:: https://quay.io/repository/biocontainers/r-chromvarmotifs/status
   :target: https://quay.io/repository/biocontainers/r-chromvarmotifs
.. _`r-chromvarmotifs/tags`: https://quay.io/repository/biocontainers/r-chromvarmotifs?tab=tags


.. raw:: html

    <script>
        var package = "r-chromvarmotifs";
        var versions = ["0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-chromvarmotifs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-chromvarmotifs/README.html