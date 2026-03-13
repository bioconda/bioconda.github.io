:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssuissero'
.. highlight: bash

ssuissero
=========

.. conda:recipe:: ssuissero
   :replaces_section_title:
   :noindex:

   Rapid Streptococcus suis serotyping pipeline for Nanopore Data

   :homepage: https://github.com/jimmyliu1326/SsuisSero
   :license: MIT
   :recipe: /`ssuissero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuissero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssuissero/meta.yaml>`_

   


.. conda:package:: ssuissero

   |downloads_ssuissero| |docker_ssuissero|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on blast: 
   :depends on flye: 
   :depends on freebayes: 
   :depends on medaka: ``1.0.1``
   :depends on minipolish: 
   :depends on samtools: 
   :depends on vcflib: 

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

    pixi global install ssuissero

to add into an existing workspace instead, run::

    pixi add ssuissero

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ssuissero

Alternatively, to install into a new environment, run::

    conda create -n envname ssuissero

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ssuissero:<tag>

(see `ssuissero/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ssuissero| image:: https://img.shields.io/conda/dn/bioconda/ssuissero.svg?style=flat
   :target: https://anaconda.org/bioconda/ssuissero
   :alt:   (downloads)
.. |docker_ssuissero| image:: https://quay.io/repository/biocontainers/ssuissero/status
   :target: https://quay.io/repository/biocontainers/ssuissero
.. _`ssuissero/tags`: https://quay.io/repository/biocontainers/ssuissero?tab=tags


.. raw:: html

    <script>
        var package = "ssuissero";
        var versions = ["1.0.1","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssuissero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssuissero/README.html