:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genblasta'
.. highlight: bash

genblasta
=========

.. conda:recipe:: genblasta
   :replaces_section_title:
   :noindex:

   genBlast is a program suite\, consisting of two programs\: genBlastA and genBlastG. genBlastA parses local alignments\, or high\-scoring segment pairs \(HSPs\) produced by local sequence alignment programs such as BLAST and WU\-BLAST and identify groups of HSPs.

   :homepage: http://genome.sfu.ca/genblast/download.html
   :license: GNU
   :recipe: /`genblasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblasta/meta.yaml>`_

   


.. conda:package:: genblasta

   |downloads_genblasta| |docker_genblasta|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends on blast: 

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

    pixi global install genblasta

to add into an existing workspace instead, run::

    pixi add genblasta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genblasta

Alternatively, to install into a new environment, run::

    conda create -n envname genblasta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genblasta:<tag>

(see `genblasta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genblasta| image:: https://img.shields.io/conda/dn/bioconda/genblasta.svg?style=flat
   :target: https://anaconda.org/bioconda/genblasta
   :alt:   (downloads)
.. |docker_genblasta| image:: https://quay.io/repository/biocontainers/genblasta/status
   :target: https://quay.io/repository/biocontainers/genblasta
.. _`genblasta/tags`: https://quay.io/repository/biocontainers/genblasta?tab=tags


.. raw:: html

    <script>
        var package = "genblasta";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genblasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genblasta/README.html