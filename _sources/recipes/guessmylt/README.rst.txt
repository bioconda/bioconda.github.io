:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'guessmylt'
.. highlight: bash

guessmylt
=========

.. conda:recipe:: guessmylt
   :replaces_section_title:
   :noindex:

   Software to guess the RNA\-Seq library type.

   :homepage: https://github.com/NBISweden/GUESSmyLT
   :license: GPL / GPLv3
   :recipe: /`guessmylt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guessmylt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/guessmylt/meta.yaml>`_

   


.. conda:package:: guessmylt

   |downloads_guessmylt| |docker_guessmylt|

   :versions:
      
      

      ``0.2.5-0``

      

   
   :depends on bcbio-gff: ``0.6.4``
   :depends on biopython: ``1.67``
   :depends on bowtie2: ``>=2``
   :depends on busco: ``3.0.2``
   :depends on git: ``>=2.11.1``
   :depends on pysam: ``>=0.13.0``
   :depends on python: ``>3``
   :depends on snakemake: ``5.4.*``
   :depends on trinity: ``2.8.4``

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

    pixi global install guessmylt

to add into an existing workspace instead, run::

    pixi add guessmylt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install guessmylt

Alternatively, to install into a new environment, run::

    conda create -n envname guessmylt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/guessmylt:<tag>

(see `guessmylt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_guessmylt| image:: https://img.shields.io/conda/dn/bioconda/guessmylt.svg?style=flat
   :target: https://anaconda.org/bioconda/guessmylt
   :alt:   (downloads)
.. |docker_guessmylt| image:: https://quay.io/repository/biocontainers/guessmylt/status
   :target: https://quay.io/repository/biocontainers/guessmylt
.. _`guessmylt/tags`: https://quay.io/repository/biocontainers/guessmylt?tab=tags


.. raw:: html

    <script>
        var package = "guessmylt";
        var versions = ["0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/guessmylt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/guessmylt/README.html