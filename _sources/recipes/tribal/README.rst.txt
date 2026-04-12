:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tribal'
.. highlight: bash

tribal
======

.. conda:recipe:: tribal
   :replaces_section_title:
   :noindex:

   TRIBAL is a package to infer B cell lineage trees from single\-cell RNA sequencing data.

   :homepage: https://github.com/elkebir-group/TRIBAL
   :documentation: https://elkebir-group.github.io/TRIBAL
   
   :license: BSD-3-Clause
   :recipe: /`tribal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tribal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tribal/meta.yaml>`_

   


.. conda:package:: tribal

   |downloads_tribal| |docker_tribal|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on ete3: ``>=3.1.2``
   :depends on glpk: ``>=5.0``
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``
   :depends on mafft: ``7.526``
   :depends on networkx: ``>=3.1``
   :depends on numpy: ``>=1.26,<2.0``
   :depends on pandas: 
   :depends on pygraphviz: ``>=1.10``
   :depends on pyomo: ``>=6.7``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install tribal

to add into an existing workspace instead, run::

    pixi add tribal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tribal

Alternatively, to install into a new environment, run::

    conda create -n envname tribal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tribal:<tag>

(see `tribal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tribal| image:: https://img.shields.io/conda/dn/bioconda/tribal.svg?style=flat
   :target: https://anaconda.org/bioconda/tribal
   :alt:   (downloads)
.. |docker_tribal| image:: https://quay.io/repository/biocontainers/tribal/status
   :target: https://quay.io/repository/biocontainers/tribal
.. _`tribal/tags`: https://quay.io/repository/biocontainers/tribal?tab=tags


.. raw:: html

    <script>
        var package = "tribal";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tribal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tribal/README.html