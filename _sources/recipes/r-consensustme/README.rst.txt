:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-consensustme'
.. highlight: bash

r-consensustme
==============

.. conda:recipe:: r-consensustme
   :replaces_section_title:
   :noindex:

   ConsensusTME is a consensus based approach to generating cancer specific gene sets for multiple cell types found within the tumour microenvironment. This package allows access to these genesets and provides a wrapper for using these gene sets with various statistical frameworks to generate normalised enrichment scores. These can be used to identify relative quantities of cell types across multiple samples.

   :homepage: https://github.com/cansysbio/ConsensusTME
   :license: GPL / GPL-3
   :recipe: /`r-consensustme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-consensustme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-consensustme/meta.yaml>`_
   :links: doi: :doi:`10.1158/0008-5472.CAN-18-3560`

   


.. conda:package:: r-consensustme

   |downloads_r-consensustme| |docker_r-consensustme|

   :versions:
      
      

      ``0.0.1.9000-3``,  ``0.0.1.9000-2``,  ``0.0.1.9000-1``,  ``0.0.1.9000-0``

      

   
   :depends on bioconductor-gseabase: 
   :depends on bioconductor-gsva: 
   :depends on bioconductor-singscore: 
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

    pixi global install r-consensustme

to add into an existing workspace instead, run::

    pixi add r-consensustme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-consensustme

Alternatively, to install into a new environment, run::

    conda create -n envname r-consensustme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-consensustme:<tag>

(see `r-consensustme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-consensustme| image:: https://img.shields.io/conda/dn/bioconda/r-consensustme.svg?style=flat
   :target: https://anaconda.org/bioconda/r-consensustme
   :alt:   (downloads)
.. |docker_r-consensustme| image:: https://quay.io/repository/biocontainers/r-consensustme/status
   :target: https://quay.io/repository/biocontainers/r-consensustme
.. _`r-consensustme/tags`: https://quay.io/repository/biocontainers/r-consensustme?tab=tags


.. raw:: html

    <script>
        var package = "r-consensustme";
        var versions = ["0.0.1.9000","0.0.1.9000","0.0.1.9000","0.0.1.9000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-consensustme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-consensustme/README.html