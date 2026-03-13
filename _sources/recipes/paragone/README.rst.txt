:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paragone'
.. highlight: bash

paragone
========

.. conda:recipe:: paragone
   :replaces_section_title:
   :noindex:

   Identify ortholog groups from a set of paralog sequences from multiple taxa.

   :homepage: https://github.com/chrisjackson-pellicle/ParaGone
   :documentation: https://github.com/chrisjackson-pellicle/ParaGone/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`paragone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paragone/meta.yaml>`_

   


.. conda:package:: paragone

   |downloads_paragone| |docker_paragone|

   :versions:
      
      

      ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on clustalo: ``>=1.2.4``
   :depends on ete3: ``>=3.1.2``
   :depends on fasttree: 
   :depends on hmmer: ``>=3.3.2``
   :depends on iqtree: ``>=2.2.0.3``
   :depends on julia: ``1.8.5.*``
   :depends on legacy-cgi: 
   :depends on libgomp: 
   :depends on mafft: ``>=7.245``
   :depends on python: ``>=3.6``
   :depends on r-base: ``>=4.0.3``
   :depends on treeshrink: 
   :depends on trimal: ``>=1.4.1``

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

    pixi global install paragone

to add into an existing workspace instead, run::

    pixi add paragone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install paragone

Alternatively, to install into a new environment, run::

    conda create -n envname paragone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/paragone:<tag>

(see `paragone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_paragone| image:: https://img.shields.io/conda/dn/bioconda/paragone.svg?style=flat
   :target: https://anaconda.org/bioconda/paragone
   :alt:   (downloads)
.. |docker_paragone| image:: https://quay.io/repository/biocontainers/paragone/status
   :target: https://quay.io/repository/biocontainers/paragone
.. _`paragone/tags`: https://quay.io/repository/biocontainers/paragone?tab=tags


.. raw:: html

    <script>
        var package = "paragone";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paragone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paragone/README.html