:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vrhyme'
.. highlight: bash

vrhyme
======

.. conda:recipe:: vrhyme
   :replaces_section_title:
   :noindex:

   Binning Virus Genomes from Metagenomes.

   :homepage: https://github.com/AnantharamanLab/vRhyme
   :license: GPL / GPL-3.0
   :recipe: /`vrhyme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vrhyme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vrhyme/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkac341`

   


.. conda:package:: vrhyme

   |downloads_vrhyme| |docker_vrhyme|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on mash: 
   :depends on mmseqs2: 
   :depends on networkx: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on pysam: 
   :depends on python: ``>=3.6``
   :depends on samtools: 
   :depends on scikit-learn: 

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

    pixi global install vrhyme

to add into an existing workspace instead, run::

    pixi add vrhyme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vrhyme

Alternatively, to install into a new environment, run::

    conda create -n envname vrhyme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vrhyme:<tag>

(see `vrhyme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vrhyme| image:: https://img.shields.io/conda/dn/bioconda/vrhyme.svg?style=flat
   :target: https://anaconda.org/bioconda/vrhyme
   :alt:   (downloads)
.. |docker_vrhyme| image:: https://quay.io/repository/biocontainers/vrhyme/status
   :target: https://quay.io/repository/biocontainers/vrhyme
.. _`vrhyme/tags`: https://quay.io/repository/biocontainers/vrhyme?tab=tags


.. raw:: html

    <script>
        var package = "vrhyme";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vrhyme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vrhyme/README.html