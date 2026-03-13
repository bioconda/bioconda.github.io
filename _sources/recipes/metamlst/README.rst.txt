:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metamlst'
.. highlight: bash

metamlst
========

.. conda:recipe:: metamlst
   :replaces_section_title:
   :noindex:

   A computational pipeline for MLST typing from metagenomic data

   :homepage: https://github.com/SegataLab/metamlst
   :license: MIT
   :recipe: /`metamlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metamlst/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw837`

   


.. conda:package:: metamlst

   |downloads_metamlst| |docker_metamlst|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.2-0``

      

   
   :depends on biopython: 
   :depends on bowtie2: ``>=2.2.6``
   :depends on cmseq: 
   :depends on pysam: ``>=0.11.1``
   :depends on python: ``>=3.5``
   :depends on samtools: ``>=1.9``

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

    pixi global install metamlst

to add into an existing workspace instead, run::

    pixi add metamlst

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metamlst

Alternatively, to install into a new environment, run::

    conda create -n envname metamlst

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metamlst:<tag>

(see `metamlst/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metamlst| image:: https://img.shields.io/conda/dn/bioconda/metamlst.svg?style=flat
   :target: https://anaconda.org/bioconda/metamlst
   :alt:   (downloads)
.. |docker_metamlst| image:: https://quay.io/repository/biocontainers/metamlst/status
   :target: https://quay.io/repository/biocontainers/metamlst
.. _`metamlst/tags`: https://quay.io/repository/biocontainers/metamlst?tab=tags


.. raw:: html

    <script>
        var package = "metamlst";
        var versions = ["1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metamlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metamlst/README.html