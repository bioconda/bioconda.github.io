:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2pip'
.. highlight: bash

ms2pip
======

.. conda:recipe:: ms2pip
   :replaces_section_title:
   :noindex:

   MS²PIP\: MS² Peak Intensity Prediction

   :homepage: https://github.com/compomics/ms2pip/
   :documentation: https://ms2pip.readthedocs.io/
   
   :developer docs: https://github.com/compomics/ms2pip_c
   :license: APACHE / Apache-2.0
   :recipe: /`ms2pip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2pip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2pip/meta.yaml>`_

   


.. conda:package:: ms2pip

   |downloads_ms2pip| |docker_ms2pip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.0-2</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  <code>4.0.0-0</code>,  <code>4.0.0.dev8-0</code>,  <code>4.0.0.dev4-0</code>,  <code>3.11.0-2</code>,  <code>3.11.0-0</code>,  <code>3.10.0-0</code>,  </span></summary>
      

      ``4.1.0-2``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.0-0``,  ``4.0.0.dev8-0``,  ``4.0.0.dev4-0``,  ``3.11.0-2``,  ``3.11.0-0``,  ``3.10.0-0``,  ``3.9.0-0``,  ``3.6.3-1``,  ``3.6.3-0``,  ``3.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on click: ``>=7,<9``
   :depends on libgcc: ``>=13``
   :depends on lxml: ``>=4``
   :depends on ms2rescore-rs: ``>=0.4,<2``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=1.25``
   :depends on pandas: ``>=1,<3``
   :depends on psm-utils: ``>=1.0``
   :depends on pyarrow: 
   :depends on pydantic: ``>=2``
   :depends on pyteomics: ``>=3.5,<5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on rich: ``>=13``
   :depends on sqlalchemy: ``>=1.3,<2``
   :depends on tomlkit: ``>=0.5,<1``
   :depends on werkzeug: ``>=2``
   :depends on xgboost: ``>=1.3,<3``

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

    pixi global install ms2pip

to add into an existing workspace instead, run::

    pixi add ms2pip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ms2pip

Alternatively, to install into a new environment, run::

    conda create -n envname ms2pip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ms2pip:<tag>

(see `ms2pip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ms2pip| image:: https://img.shields.io/conda/dn/bioconda/ms2pip.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2pip
   :alt:   (downloads)
.. |docker_ms2pip| image:: https://quay.io/repository/biocontainers/ms2pip/status
   :target: https://quay.io/repository/biocontainers/ms2pip
.. _`ms2pip/tags`: https://quay.io/repository/biocontainers/ms2pip?tab=tags


.. raw:: html

    <script>
        var package = "ms2pip";
        var versions = ["4.1.0","4.1.0","4.1.0","4.0.0","4.0.0.dev8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2pip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2pip/README.html