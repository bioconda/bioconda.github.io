:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fsm-lite'
.. highlight: bash

fsm-lite
========

.. conda:recipe:: fsm-lite
   :replaces_section_title:
   :noindex:

   Frequency\-based String Mining \(lite\)

   :homepage: https://github.com/nvalimak/fsm-lite
   :license: GPL / GPL-3
   :recipe: /`fsm-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsm-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsm-lite/meta.yaml>`_
   :links: doi: :doi:`10.1038/ncomms12797`

   A single\-core implemetation of frequency\-based substring mining. Used to
   count k\-mers in populations of genomes \(supplied as fasta files\).



.. conda:package:: fsm-lite

   |downloads_fsm-lite| |docker_fsm-lite|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on sdsl-lite: 

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

    pixi global install fsm-lite

to add into an existing workspace instead, run::

    pixi add fsm-lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fsm-lite

Alternatively, to install into a new environment, run::

    conda create -n envname fsm-lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fsm-lite:<tag>

(see `fsm-lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fsm-lite| image:: https://img.shields.io/conda/dn/bioconda/fsm-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/fsm-lite
   :alt:   (downloads)
.. |docker_fsm-lite| image:: https://quay.io/repository/biocontainers/fsm-lite/status
   :target: https://quay.io/repository/biocontainers/fsm-lite
.. _`fsm-lite/tags`: https://quay.io/repository/biocontainers/fsm-lite?tab=tags


.. raw:: html

    <script>
        var package = "fsm-lite";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fsm-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fsm-lite/README.html