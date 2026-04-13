:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'methylpy'
.. highlight: bash

methylpy
========

.. conda:recipe:: methylpy
   :replaces_section_title:
   :noindex:

   Bisulfite sequencing data processing and differential methylation analysis

   :homepage: https://github.com/yupenghe/methylpy
   :documentation: https://github.com/yupenghe/methylpy/blob/methylpy/tutorial/tutorial.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`methylpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methylpy/meta.yaml>`_
   :links: doi: :doi:`10.1038/nature14465`

   


.. conda:package:: methylpy

   |downloads_methylpy| |docker_methylpy|

   :versions:
      
      

      ``1.4.7-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``

      

   
   :depends on bowtie: 
   :depends on bowtie2: 
   :depends on cutadapt: ``>=1.9``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on minimap2: 
   :depends on numpy: ``>=1.6.1``
   :depends on openjdk: 
   :depends on picard: ``>=2.10.8``
   :depends on pysam: ``>=0.5.3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: ``>=1.3``
   :depends on scipy: ``>=0.10.0``
   :depends on ucsc-wigtobigwig: 

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

    pixi global install methylpy

to add into an existing workspace instead, run::

    pixi add methylpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install methylpy

Alternatively, to install into a new environment, run::

    conda create -n envname methylpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/methylpy:<tag>

(see `methylpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_methylpy| image:: https://img.shields.io/conda/dn/bioconda/methylpy.svg?style=flat
   :target: https://anaconda.org/bioconda/methylpy
   :alt:   (downloads)
.. |docker_methylpy| image:: https://quay.io/repository/biocontainers/methylpy/status
   :target: https://quay.io/repository/biocontainers/methylpy
.. _`methylpy/tags`: https://quay.io/repository/biocontainers/methylpy?tab=tags


.. raw:: html

    <script>
        var package = "methylpy";
        var versions = ["1.4.7","1.4.3","1.4.3","1.4.2","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methylpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methylpy/README.html