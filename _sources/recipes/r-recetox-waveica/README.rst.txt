:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-recetox-waveica'
.. highlight: bash

r-recetox-waveica
=================

.. conda:recipe:: r-recetox-waveica
   :replaces_section_title:
   :noindex:

   Removal of batch effects for large\-scale untargeted metabolomics data based on wavelet transform.

   :homepage: https://github.com/recetox/waveica
   :license: MIT
   :recipe: /`r-recetox-waveica <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-waveica>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-recetox-waveica/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.aca.2019.02.010`, doi: :doi:`10.1007/s11306-021-01839-7`

   Recetox\-waveica is a fork of WaveICA package customized by RECETOX. This package is used to remove batch effects from large\-scale untargeted metabolomics data and contains functionality of both original WaveICA and WaveICA 2.0 libraries.


.. conda:package:: r-recetox-waveica

   |downloads_r-recetox-waveica| |docker_r-recetox-waveica|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-corpcor: 
   :depends on r-jade: 
   :depends on r-mgcv: 
   :depends on r-waveslim: 

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

    pixi global install r-recetox-waveica

to add into an existing workspace instead, run::

    pixi add r-recetox-waveica

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-recetox-waveica

Alternatively, to install into a new environment, run::

    conda create -n envname r-recetox-waveica

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-recetox-waveica:<tag>

(see `r-recetox-waveica/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-recetox-waveica| image:: https://img.shields.io/conda/dn/bioconda/r-recetox-waveica.svg?style=flat
   :target: https://anaconda.org/bioconda/r-recetox-waveica
   :alt:   (downloads)
.. |docker_r-recetox-waveica| image:: https://quay.io/repository/biocontainers/r-recetox-waveica/status
   :target: https://quay.io/repository/biocontainers/r-recetox-waveica
.. _`r-recetox-waveica/tags`: https://quay.io/repository/biocontainers/r-recetox-waveica?tab=tags


.. raw:: html

    <script>
        var package = "r-recetox-waveica";
        var versions = ["0.2.1","0.2.0","0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-recetox-waveica/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-recetox-waveica/README.html