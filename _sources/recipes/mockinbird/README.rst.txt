:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mockinbird'
.. highlight: bash

mockinbird
==========

.. conda:recipe:: mockinbird
   :replaces_section_title:
   :noindex:

   A fully automatic and reproducible PAR\-CLIP analysis pipeline

   :homepage: https://github.com/soedinglab/mockinbird
   :documentation: http://wwwuser.gwdg.de/~compbiol/mockinbird/doc/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mockinbird <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mockinbird/meta.yaml>`_

   


.. conda:package:: mockinbird

   |downloads_mockinbird| |docker_mockinbird|

   :versions:
      
      

      ``1.0.0a1-7``,  ``1.0.0a1-6``,  ``1.0.0a1-5``,  ``1.0.0a1-4``,  ``1.0.0a1-3``,  ``1.0.0a1-2``,  ``1.0.0a1-1``,  ``1.0.0a1-0``

      

   
   :depends on bowtie: 
   :depends on fastqc: 
   :depends on jinja2: 
   :depends on libgcc-ng: ``>=12``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: 
   :depends on r-base: 
   :depends on r-lsd: 
   :depends on samtools: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on star: 
   :depends on xxmotif: 

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

    pixi global install mockinbird

to add into an existing workspace instead, run::

    pixi add mockinbird

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mockinbird

Alternatively, to install into a new environment, run::

    conda create -n envname mockinbird

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mockinbird:<tag>

(see `mockinbird/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mockinbird| image:: https://img.shields.io/conda/dn/bioconda/mockinbird.svg?style=flat
   :target: https://anaconda.org/bioconda/mockinbird
   :alt:   (downloads)
.. |docker_mockinbird| image:: https://quay.io/repository/biocontainers/mockinbird/status
   :target: https://quay.io/repository/biocontainers/mockinbird
.. _`mockinbird/tags`: https://quay.io/repository/biocontainers/mockinbird?tab=tags


.. raw:: html

    <script>
        var package = "mockinbird";
        var versions = ["1.0.0a1","1.0.0a1","1.0.0a1","1.0.0a1","1.0.0a1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mockinbird/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mockinbird/README.html