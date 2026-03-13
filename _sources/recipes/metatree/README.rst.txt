:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metatree'
.. highlight: bash

metatree
========

.. conda:recipe:: metatree
   :replaces_section_title:
   :noindex:

   Visualisation of polyphyletic groups between phylogenetic trees to a reference tree.

   :homepage: https://github.com/aaronmussig/metatree
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`metatree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metatree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metatree/meta.yaml>`_

   


.. conda:package:: metatree

   |downloads_metatree| |docker_metatree|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on biolib: ``>=0.1.0``
   :depends on biopython: 
   :depends on dendropy: ``>=4.1.0``
   :depends on ete3: 
   :depends on genometreetk: ``>0.1.2``
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on phylorank: ``>0.1.0``
   :depends on python: ``>=3.6``
   :depends on scipy: 
   :depends on seaborn: 
   :depends on tqdm: ``>=4.31.0``

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

    pixi global install metatree

to add into an existing workspace instead, run::

    pixi add metatree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metatree

Alternatively, to install into a new environment, run::

    conda create -n envname metatree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metatree:<tag>

(see `metatree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metatree| image:: https://img.shields.io/conda/dn/bioconda/metatree.svg?style=flat
   :target: https://anaconda.org/bioconda/metatree
   :alt:   (downloads)
.. |docker_metatree| image:: https://quay.io/repository/biocontainers/metatree/status
   :target: https://quay.io/repository/biocontainers/metatree
.. _`metatree/tags`: https://quay.io/repository/biocontainers/metatree?tab=tags


.. raw:: html

    <script>
        var package = "metatree";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metatree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metatree/README.html