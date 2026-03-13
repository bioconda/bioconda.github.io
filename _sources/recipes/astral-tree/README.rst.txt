:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'astral-tree'
.. highlight: bash

astral-tree
===========

.. conda:recipe:: astral-tree
   :replaces_section_title:
   :noindex:

   ASTRAL is a tool for estimating an unrooted species tree given a set of unrooted gene trees.

   :homepage: https://github.com/smirarab/ASTRAL
   :license: APACHE / Apache License 2.0
   :recipe: /`astral-tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astral-tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astral-tree/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2129-y`

   ASTRAL is a tool for estimating an unrooted species tree given a set of unrooted gene trees. 
   ASTRAL is statistically consistent under the multi\-species coalescent model 
   \(and thus is useful for handling incomplete lineage sorting\, i.e.\, ILS\). 
   ASTRAL finds the species tree that has the maximum number of shared induced 
   quartet trees with the set of gene trees\, subject to the constraint that 
   the set of bipartitions in the species tree comes from a predefined set of bipartitions. 
   This predefined set is empirically decided by ASTRAL \(but see tutorial on how to expand it\). 
   The current code corresponds to ASTRAL\-III.



.. conda:package:: astral-tree

   |downloads_astral-tree| |docker_astral-tree|

   :versions:
      
      

      ``5.7.8-1``,  ``5.7.8-0``

      

   
   :depends on openjdk: ``>=11``
   :depends on python: 

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

    pixi global install astral-tree

to add into an existing workspace instead, run::

    pixi add astral-tree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install astral-tree

Alternatively, to install into a new environment, run::

    conda create -n envname astral-tree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/astral-tree:<tag>

(see `astral-tree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_astral-tree| image:: https://img.shields.io/conda/dn/bioconda/astral-tree.svg?style=flat
   :target: https://anaconda.org/bioconda/astral-tree
   :alt:   (downloads)
.. |docker_astral-tree| image:: https://quay.io/repository/biocontainers/astral-tree/status
   :target: https://quay.io/repository/biocontainers/astral-tree
.. _`astral-tree/tags`: https://quay.io/repository/biocontainers/astral-tree?tab=tags


.. raw:: html

    <script>
        var package = "astral-tree";
        var versions = ["5.7.8","5.7.8"];
    </script>





Notes
-----
astral is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'astral\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-fastqsplitter \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/astral-tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/astral-tree/README.html