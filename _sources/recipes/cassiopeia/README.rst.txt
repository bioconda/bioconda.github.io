:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cassiopeia'
.. highlight: bash

cassiopeia
==========

.. conda:recipe:: cassiopeia
   :replaces_section_title:
   :noindex:

   An end\-to\-end pipeline for single\-cell lineage tracing experiments.

   :homepage: https://github.com/YosefLab/Cassiopeia
   :license: MIT / MIT
   :recipe: /`cassiopeia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopeia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopeia/meta.yaml>`_

   


.. conda:package:: cassiopeia

   |downloads_cassiopeia| |docker_cassiopeia|

   :versions:
      
      

      ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on biopython: ``>=1.71``
   :depends on bokeh: ``>=0.12.15``
   :depends on ccphylo: 
   :depends on ete3: ``>=3.1.1``
   :depends on hits: 
   :depends on itolapi: 
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: ``>=2.2.2``
   :depends on nbconvert: ``>=5.4.0``
   :depends on nbformat: ``>=4.4.0``
   :depends on networkx: ``>=2.5``
   :depends on ngs-tools: ``>=1.5.3``
   :depends on numba: ``>=0.51.0``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: ``>=1.1.4``
   :depends on pysam: ``>=0.14.1``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-levenshtein: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: ``>=3.12``
   :depends on scipy: ``>=1.2.0``
   :depends on tqdm: ``>=4``
   :depends on typing-extensions: ``>=3.7.4``

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

    pixi global install cassiopeia

to add into an existing workspace instead, run::

    pixi add cassiopeia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cassiopeia

Alternatively, to install into a new environment, run::

    conda create -n envname cassiopeia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cassiopeia:<tag>

(see `cassiopeia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cassiopeia| image:: https://img.shields.io/conda/dn/bioconda/cassiopeia.svg?style=flat
   :target: https://anaconda.org/bioconda/cassiopeia
   :alt:   (downloads)
.. |docker_cassiopeia| image:: https://quay.io/repository/biocontainers/cassiopeia/status
   :target: https://quay.io/repository/biocontainers/cassiopeia
.. _`cassiopeia/tags`: https://quay.io/repository/biocontainers/cassiopeia?tab=tags


.. raw:: html

    <script>
        var package = "cassiopeia";
        var versions = ["2.0.0","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassiopeia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassiopeia/README.html