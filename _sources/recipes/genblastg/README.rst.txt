:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genblastg'
.. highlight: bash

genblastg
=========

.. conda:recipe:: genblastg
   :replaces_section_title:
   :noindex:

   genBlast is a program suite\, consisting of two programs\: genBlastA and genBlastG. genBlastA parses local alignments\, or high\-scoring segment pairs \(HSPs\) produced by local sequence alignment programs such as BLAST and WU\-BLAST and identify groups of HSPs.

   :homepage: http://genome.sfu.ca/genblast/download.html
   :license: GNU
   :recipe: /`genblastg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblastg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblastg/meta.yaml>`_

   


.. conda:package:: genblastg

   |downloads_genblastg| |docker_genblastg|

   :versions:
      
      

      ``1.39-1``,  ``1.38-5``,  ``1.38-4``,  ``1.38-3``,  ``1.38-2``,  ``1.38-1``,  ``1.38-0``

      

   
   :depends on blast: 
   :depends on libgcc: 
   :depends on zlib: ``1.2.11*``

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

    pixi global install genblastg

to add into an existing workspace instead, run::

    pixi add genblastg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genblastg

Alternatively, to install into a new environment, run::

    conda create -n envname genblastg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genblastg:<tag>

(see `genblastg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genblastg| image:: https://img.shields.io/conda/dn/bioconda/genblastg.svg?style=flat
   :target: https://anaconda.org/bioconda/genblastg
   :alt:   (downloads)
.. |docker_genblastg| image:: https://quay.io/repository/biocontainers/genblastg/status
   :target: https://quay.io/repository/biocontainers/genblastg
.. _`genblastg/tags`: https://quay.io/repository/biocontainers/genblastg?tab=tags


.. raw:: html

    <script>
        var package = "genblastg";
        var versions = ["1.39","1.38","1.38","1.38","1.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genblastg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genblastg/README.html