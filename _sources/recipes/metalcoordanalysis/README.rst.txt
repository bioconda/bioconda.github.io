:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metalcoordanalysis'
.. highlight: bash

metalcoordanalysis
==================

.. conda:recipe:: metalcoordanalysis
   :replaces_section_title:
   :noindex:

   Python application designed for analyzing metal coordination in biological macromolecules such as proteins and nucleic acids

   :homepage: https://github.com/Lekaveh/MetalCoordAnalysis
   :documentation: https://github.com/Lekaveh/MetalCoordAnalysis/blob/v0.2.14/README.md
   
   :license: MOZILLA / MPL-2.0
   :recipe: /`metalcoordanalysis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metalcoordanalysis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metalcoordanalysis/meta.yaml>`_
   :links: doi: :doi:`10.1107/S2059798324011458`

   The Metal Coordination Analysis Tool is a Python application designed for analyzing metal coordination in biological macromolecules such as proteins and nucleic acids.
   This tool provides a set of functionalities to process molecular structures\, identify metal coordination sites\, and generate insightful visualizations.



.. conda:package:: metalcoordanalysis

   |downloads_metalcoordanalysis| |docker_metalcoordanalysis|

   :versions:
      
      

      ``0.2.14-0``,  ``0.2.13-0``

      

   
   :depends on gemmi: ``>=0.7.3``
   :depends on networkx: ``>=3.2.1,<4``
   :depends on numpy: ``>=1.26.4``
   :depends on pandas: ``>=2.0.0``
   :depends on python: ``>=3.10``
   :depends on scikit-learn: ``>=1.4.0,<2``
   :depends on scipy: ``>=1.0.0``
   :depends on tqdm: ``>=4.0.0``

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

    pixi global install metalcoordanalysis

to add into an existing workspace instead, run::

    pixi add metalcoordanalysis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metalcoordanalysis

Alternatively, to install into a new environment, run::

    conda create -n envname metalcoordanalysis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metalcoordanalysis:<tag>

(see `metalcoordanalysis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metalcoordanalysis| image:: https://img.shields.io/conda/dn/bioconda/metalcoordanalysis.svg?style=flat
   :target: https://anaconda.org/bioconda/metalcoordanalysis
   :alt:   (downloads)
.. |docker_metalcoordanalysis| image:: https://quay.io/repository/biocontainers/metalcoordanalysis/status
   :target: https://quay.io/repository/biocontainers/metalcoordanalysis
.. _`metalcoordanalysis/tags`: https://quay.io/repository/biocontainers/metalcoordanalysis?tab=tags


.. raw:: html

    <script>
        var package = "metalcoordanalysis";
        var versions = ["0.2.14","0.2.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metalcoordanalysis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metalcoordanalysis/README.html