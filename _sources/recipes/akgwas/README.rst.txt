:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'akgwas'
.. highlight: bash

akgwas
======

.. conda:recipe:: akgwas
   :replaces_section_title:
   :noindex:

   AKmerGWAS \-\- All input format \(shor\_read\; assembly\; genomes\) k\-mer GWAS.

   :homepage: https://github.com/suzkami/Aseembly_GWAS
   :developer docs: https://github.com/suzkami/AKmerGWAS
   :license: MIT / MIT
   :recipe: /`akgwas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/akgwas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/akgwas/meta.yaml>`_

   AKmerGWAS is a pipeline for k\-mer based genome\-wide association studies with any input format \(shor\_read\; assembly\; genomes\).



.. conda:package:: akgwas

   |downloads_akgwas| |docker_akgwas|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bwa: 
   :depends on gemma: 
   :depends on kmtricks: 
   :depends on parallel: 
   :depends on perl: 
   :depends on plink: 
   :depends on python: ``>=3.11,<3.14``
   :depends on rush: 
   :depends on samtools: 
   :depends on snakemake-minimal: ``>=9,<10``

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

    pixi global install akgwas

to add into an existing workspace instead, run::

    pixi add akgwas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install akgwas

Alternatively, to install into a new environment, run::

    conda create -n envname akgwas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/akgwas:<tag>

(see `akgwas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_akgwas| image:: https://img.shields.io/conda/dn/bioconda/akgwas.svg?style=flat
   :target: https://anaconda.org/bioconda/akgwas
   :alt:   (downloads)
.. |docker_akgwas| image:: https://quay.io/repository/biocontainers/akgwas/status
   :target: https://quay.io/repository/biocontainers/akgwas
.. _`akgwas/tags`: https://quay.io/repository/biocontainers/akgwas?tab=tags


.. raw:: html

    <script>
        var package = "akgwas";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/akgwas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/akgwas/README.html