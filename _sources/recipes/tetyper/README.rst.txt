:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tetyper'
.. highlight: bash

tetyper
=======

.. conda:recipe:: tetyper
   :replaces_section_title:
   :noindex:

   Typing of a specific transposable element \(TE\) of interest from paired\-end sequencing data.

   :homepage: https://github.com/aesheppard/TETyper
   :license: GPL-3.0
   :recipe: /`tetyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetyper/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.000232`

   


.. conda:package:: tetyper

   |downloads_tetyper| |docker_tetyper|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends on bcftools: 
   :depends on biopython: 
   :depends on blast: 
   :depends on bwa: 
   :depends on pysam: 
   :depends on python: 
   :depends on pyvcf: 
   :depends on samtools: 
   :depends on spades: 

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

    pixi global install tetyper

to add into an existing workspace instead, run::

    pixi add tetyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tetyper

Alternatively, to install into a new environment, run::

    conda create -n envname tetyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tetyper:<tag>

(see `tetyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tetyper| image:: https://img.shields.io/conda/dn/bioconda/tetyper.svg?style=flat
   :target: https://anaconda.org/bioconda/tetyper
   :alt:   (downloads)
.. |docker_tetyper| image:: https://quay.io/repository/biocontainers/tetyper/status
   :target: https://quay.io/repository/biocontainers/tetyper
.. _`tetyper/tags`: https://quay.io/repository/biocontainers/tetyper?tab=tags


.. raw:: html

    <script>
        var package = "tetyper";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tetyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tetyper/README.html