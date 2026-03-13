:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegas'
.. highlight: bash

pegas
=====

.. conda:recipe:: pegas
   :replaces_section_title:
   :noindex:

   PeGAS is a Snakemake pipeline for genome analysis \(with a lightweight CLI option\)

   :homepage: https://github.com/liviurotiul/PeGAS
   :documentation: https://github.com/liviurotiul/PeGAS#readme
   
   :developer docs: https://github.com/liviurotiul/PeGAS/issues
   :license: GPL / GPL-2.0-or-later
   :recipe: /`pegas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegas/meta.yaml>`_

   PeGAS is a Snakemake pipeline for genome analysis. It is designed to be
   lightweight\, easy to install\, and easy to use. A separate lite entrypoint
   is provided for running the pipeline without Snakemake.



.. conda:package:: pegas

   |downloads_pegas| |docker_pegas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.2.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on pegas-snakemake: ``1.2.4.*``

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

    pixi global install pegas

to add into an existing workspace instead, run::

    pixi add pegas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pegas

Alternatively, to install into a new environment, run::

    conda create -n envname pegas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pegas:<tag>

(see `pegas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pegas| image:: https://img.shields.io/conda/dn/bioconda/pegas.svg?style=flat
   :target: https://anaconda.org/bioconda/pegas
   :alt:   (downloads)
.. |docker_pegas| image:: https://quay.io/repository/biocontainers/pegas/status
   :target: https://quay.io/repository/biocontainers/pegas
.. _`pegas/tags`: https://quay.io/repository/biocontainers/pegas?tab=tags


.. raw:: html

    <script>
        var package = "pegas";
        var versions = ["1.2.4","1.2.3","1.2.1","1.1.0","1.0.9"];
    </script>


.. conda:package:: pegas-lite

   |downloads_pegas-lite| |docker_pegas-lite|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-0``

      

   
   :depends on beautifulsoup4: ``>=4.12.3``
   :depends on conda: ``>=24.7.1``
   :depends on jinja2: ``>=3.0``
   :depends on matplotlib-base: ``>=3.9.2``
   :depends on networkx: ``>=3.2``
   :depends on numpy: 
   :depends on pandas: ``>=1.3.5``
   :depends on plotly: ``>=5.0.0,<6``
   :depends on python: ``>=3.10``
   :depends on tqdm: ``>=4.66.5``

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

    pixi global install pegas-lite

to add into an existing workspace instead, run::

    pixi add pegas-lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pegas-lite

Alternatively, to install into a new environment, run::

    conda create -n envname pegas-lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pegas-lite:<tag>

(see `pegas-lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pegas-lite| image:: https://img.shields.io/conda/dn/bioconda/pegas-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/pegas-lite
   :alt:   (downloads)
.. |docker_pegas-lite| image:: https://quay.io/repository/biocontainers/pegas/status
   :target: https://quay.io/repository/biocontainers/pegas
.. _`pegas-lite/tags`: https://quay.io/repository/biocontainers/pegas-lite?tab=tags


.. raw:: html

    <script>
        var package = "pegas";
        var versions = ["1.2.4","1.2.3","1.2.1"];
    </script>


.. conda:package:: pegas-snakemake

   |downloads_pegas-snakemake| |docker_pegas-snakemake|

   :versions:
      
      

      ``1.2.4-0``

      

   
   :depends on pegas-lite: ``1.2.4.*``
   :depends on python: 
   :depends on snakemake-minimal: ``>=7.32.4``

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

    pixi global install pegas-snakemake

to add into an existing workspace instead, run::

    pixi add pegas-snakemake

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pegas-snakemake

Alternatively, to install into a new environment, run::

    conda create -n envname pegas-snakemake

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pegas-snakemake:<tag>

(see `pegas-snakemake/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pegas-snakemake| image:: https://img.shields.io/conda/dn/bioconda/pegas-snakemake.svg?style=flat
   :target: https://anaconda.org/bioconda/pegas-snakemake
   :alt:   (downloads)
.. |docker_pegas-snakemake| image:: https://quay.io/repository/biocontainers/pegas/status
   :target: https://quay.io/repository/biocontainers/pegas
.. _`pegas-snakemake/tags`: https://quay.io/repository/biocontainers/pegas-snakemake?tab=tags


.. raw:: html

    <script>
        var package = "pegas";
        var versions = ["1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegas/README.html