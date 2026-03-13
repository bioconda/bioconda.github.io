:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinsimriboswitch'
.. highlight: bash

kinsimriboswitch
================

.. conda:recipe:: kinsimriboswitch
   :replaces_section_title:
   :noindex:

   Pipeline for the simulation of RNA\-\-ligand interaction kinetics as
   outlined in Kuehnl et al. 2017\, https\:\/\/doi.org\/10.1186\/s12859\-017\-1823\-5


   :homepage: http://www.bioinf.uni-leipzig.de/~felix/
   :license: GPLv3
   :recipe: /`kinsimriboswitch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinsimriboswitch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinsimriboswitch/meta.yaml>`_

   


.. conda:package:: kinsimriboswitch

   |downloads_kinsimriboswitch| |docker_kinsimriboswitch|

   :versions:
      
      

      ``0.3-3``,  ``0.3-2``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends on coreutils: 
   :depends on gmp: ``>=6.2.1,<7.0a0``
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libstdcxx-ng: ``>=9.3.0``
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-clone: 
   :depends on perl-devel-assert: 
   :depends on perl-file-slurp: 
   :depends on perl-heap: 
   :depends on perl-inline: 
   :depends on perl-inline-c: 
   :depends on perl-ipc-system-simple: 
   :depends on perl-list-moreutils: 
   :depends on perl-math-random-mt-auto: 
   :depends on perl-math-round: 
   :depends on perl-parallel-loops: 
   :depends on perl-parse-recdescent: 
   :depends on perl-sys-info: 
   :depends on r: 
   :depends on r-argparser: 
   :depends on r-rcolorbrewer: 
   :depends on treekin: 
   :depends on viennarna: ``>=2.4.17,<2.5.0a0``

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

    pixi global install kinsimriboswitch

to add into an existing workspace instead, run::

    pixi add kinsimriboswitch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kinsimriboswitch

Alternatively, to install into a new environment, run::

    conda create -n envname kinsimriboswitch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kinsimriboswitch:<tag>

(see `kinsimriboswitch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kinsimriboswitch| image:: https://img.shields.io/conda/dn/bioconda/kinsimriboswitch.svg?style=flat
   :target: https://anaconda.org/bioconda/kinsimriboswitch
   :alt:   (downloads)
.. |docker_kinsimriboswitch| image:: https://quay.io/repository/biocontainers/kinsimriboswitch/status
   :target: https://quay.io/repository/biocontainers/kinsimriboswitch
.. _`kinsimriboswitch/tags`: https://quay.io/repository/biocontainers/kinsimriboswitch?tab=tags


.. raw:: html

    <script>
        var package = "kinsimriboswitch";
        var versions = ["0.3","0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinsimriboswitch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinsimriboswitch/README.html