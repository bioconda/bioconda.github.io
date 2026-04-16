:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treesapp'
.. highlight: bash

treesapp
========

.. conda:recipe:: treesapp
   :replaces_section_title:
   :noindex:

   TreeSAPP is a functional and taxonomic annotation tool for microbial genomes and proteins

   :homepage: https://github.com/hallamlab/TreeSAPP
   :license: GPL3 / GPL-3.0-only
   :recipe: /`treesapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesapp/meta.yaml>`_

   


.. conda:package:: treesapp

   |downloads_treesapp| |docker_treesapp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.4-2</code>,  <code>0.11.4-1</code>,  <code>0.11.4-0</code>,  <code>0.11.3-1</code>,  <code>0.11.3-0</code>,  <code>0.11.2-0</code>,  <code>0.11.0-0</code>,  <code>0.10.4-1</code>,  <code>0.10.4-0</code>,  </span></summary>
      

      ``0.11.4-2``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-1``,  ``0.11.3-0``,  ``0.11.2-0``,  ``0.11.0-0``,  ``0.10.4-1``,  ``0.10.4-0``,  ``0.10.3-1``,  ``0.10.3-0``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.6-1``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.2-1``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.9-0``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.78``
   :depends on bwa: ``>=0.7.17``
   :depends on epa-ng: ``>=0.3.8``
   :depends on ete3: ``>=3.1.2``
   :depends on fasttree: ``>=2.1.10``
   :depends on hmmer: ``>=3.3``
   :depends on joblib: ``1.0.0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on mafft: ``>=7.471``
   :depends on matplotlib-base: ``>=3.3.0``
   :depends on mmseqs2: ``>=12.113e3``
   :depends on numpy: ``>=1.19.2``
   :depends on packaging: ``>=20.4``
   :depends on pandas: ``>=1.1.0``
   :depends on prodigal: ``>=2.6.2``
   :depends on pyfastx: ``>=0.8.2``
   :depends on pygtrie: ``>=2.3.3``
   :depends on python: ``>=3.9,<3.10.0a0``
   :depends on python_abi: ``3.9.* *_cp39``
   :depends on raxml-ng: ``>=1.0.1``
   :depends on samsum: ``>=0.1.4``
   :depends on scikit-learn: ``0.24.2``
   :depends on scipy: ``>=1.5.2``
   :depends on seaborn: ``>=0.11.0``
   :depends on six: ``>=1.15.0``
   :depends on tqdm: ``>=4.50.0``
   :depends on vsearch: ``>=2.15.0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install treesapp

to add into an existing workspace instead, run::

    pixi add treesapp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install treesapp

Alternatively, to install into a new environment, run::

    conda create -n envname treesapp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/treesapp:<tag>

(see `treesapp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_treesapp| image:: https://img.shields.io/conda/dn/bioconda/treesapp.svg?style=flat
   :target: https://anaconda.org/bioconda/treesapp
   :alt:   (downloads)
.. |docker_treesapp| image:: https://quay.io/repository/biocontainers/treesapp/status
   :target: https://quay.io/repository/biocontainers/treesapp
.. _`treesapp/tags`: https://quay.io/repository/biocontainers/treesapp?tab=tags


.. raw:: html

    <script>
        var package = "treesapp";
        var versions = ["0.11.4","0.11.4","0.11.4","0.11.3","0.11.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treesapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treesapp/README.html