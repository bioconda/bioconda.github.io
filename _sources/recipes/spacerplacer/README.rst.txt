:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacerplacer'
.. highlight: bash

spacerplacer
============

.. conda:recipe:: spacerplacer
   :replaces_section_title:
   :noindex:

   SpacerPlacer is a powerful software for reconstructing ancestral CRISPR spacer arrays.

   :homepage: https://github.com/fbaumdicker/SpacerPlacer
   :license: GPL3 / GPL-3.0-only
   :recipe: /`spacerplacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacerplacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacerplacer/meta.yaml>`_

   


.. conda:package:: spacerplacer

   |downloads_spacerplacer| |docker_spacerplacer|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on dill: ``>=0.3.5.1``
   :depends on ete3: ``>=3.1.2``
   :depends on graphviz: ``>=0.20.1``
   :depends on mafft: ``>=7.490``
   :depends on matplotlib-base: ``>=3.4.3``
   :depends on numpy: ``>=1.21.4``
   :depends on palettable: ``>=3.3.0``
   :depends on pandas: ``>=1.3.4``
   :depends on python: ``<3.13``
   :depends on python-graphviz: ``>=0.17``
   :depends on scipy: ``>=1.7.1``
   :depends on seaborn-base: ``>=0.11.2``
   :depends on sympy: ``>=1.11.1``

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

    pixi global install spacerplacer

to add into an existing workspace instead, run::

    pixi add spacerplacer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spacerplacer

Alternatively, to install into a new environment, run::

    conda create -n envname spacerplacer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spacerplacer:<tag>

(see `spacerplacer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spacerplacer| image:: https://img.shields.io/conda/dn/bioconda/spacerplacer.svg?style=flat
   :target: https://anaconda.org/bioconda/spacerplacer
   :alt:   (downloads)
.. |docker_spacerplacer| image:: https://quay.io/repository/biocontainers/spacerplacer/status
   :target: https://quay.io/repository/biocontainers/spacerplacer
.. _`spacerplacer/tags`: https://quay.io/repository/biocontainers/spacerplacer?tab=tags


.. raw:: html

    <script>
        var package = "spacerplacer";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacerplacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacerplacer/README.html