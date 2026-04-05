:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mikado'
.. highlight: bash

mikado
======

.. conda:recipe:: mikado
   :replaces_section_title:
   :noindex:

   A Python3 annotation program to select the best gene model in each locus.

   :homepage: https://github.com/EI-CoreBioinformatics/mikado
   :documentation: https://mikado.readthedocs.io/en/stable
   
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`mikado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikado/meta.yaml>`_
   :links: biotools: :biotools:`mikado`

   


.. conda:package:: mikado

   |downloads_mikado| |docker_mikado|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.4-2</code>,  <code>2.3.4-0</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  </span></summary>
      

      ``2.3.4-2``,  ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0-0``,  ``2.0rc2-1``,  ``2.0rc2-0``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.78``
   :depends on datrie: ``>=0.8``
   :depends on drmaa: 
   :depends on hypothesis: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on marshmallow: ``>=3.1.0``
   :depends on marshmallow-dataclass: ``>=8.3.1``
   :depends on msgpack-python: ``>=1.0.0``
   :depends on networkx: ``>=2.3``
   :depends on numpy: ``<2``
   :depends on numpy: ``>=1.26.4,<2.0a0``
   :depends on pandas: ``>=1.0``
   :depends on pyfaidx: ``>=0.5.8``
   :depends on pysam: ``>=0.15.3``
   :depends on pytest: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-rapidjson: ``>=1.0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on pyyaml: ``>=5.1.2``
   :depends on scipy: 
   :depends on six: ``>=1.12.0``
   :depends on snakemake-minimal: ``<8``
   :depends on sqlalchemy: ``<2``
   :depends on sqlalchemy-utils: ``>=0.34.1``
   :depends on sqlite: 
   :depends on tabulate: ``>=0.8.5``
   :depends on toml: ``>=0.10.0``
   :depends on typeguard: ``>=2.9.1``

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

    pixi global install mikado

to add into an existing workspace instead, run::

    pixi add mikado

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mikado

Alternatively, to install into a new environment, run::

    conda create -n envname mikado

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mikado:<tag>

(see `mikado/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mikado| image:: https://img.shields.io/conda/dn/bioconda/mikado.svg?style=flat
   :target: https://anaconda.org/bioconda/mikado
   :alt:   (downloads)
.. |docker_mikado| image:: https://quay.io/repository/biocontainers/mikado/status
   :target: https://quay.io/repository/biocontainers/mikado
.. _`mikado/tags`: https://quay.io/repository/biocontainers/mikado?tab=tags


.. raw:: html

    <script>
        var package = "mikado";
        var versions = ["2.3.4","2.3.4","2.3.3","2.3.3","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mikado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mikado/README.html