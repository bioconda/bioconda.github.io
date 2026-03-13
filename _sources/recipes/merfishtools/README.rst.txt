:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merfishtools'
.. highlight: bash

merfishtools
============

.. conda:recipe:: merfishtools
   :replaces_section_title:
   :noindex:

   MERFISHtools implement a Bayesian framework for accurately predicting gene or transcript expression from MERFISH data. On top\, differential expression analysis can be performed for two or multiple conditions\, including credible intervals for fold change and coefficient of variation\, and controlling the expected false discovery rate.

   :homepage: https://merfishtools.github.io
   :license: MIT
   :recipe: /`merfishtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfishtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merfishtools/meta.yaml>`_

   


.. conda:package:: merfishtools

   |downloads_merfishtools| |docker_merfishtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-3</code>,  <code>1.5.0-2</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-3</code>,  <code>1.3.0-2</code>,  <code>1.3.0-1</code>,  <code>1.2.0-1</code>,  <code>1.1.0-1</code>,  </span></summary>
      

      ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-3``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.2.0-1``,  ``1.1.0-1``,  ``1.0.0-1``,  ``0.9.1-1``,  ``0.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on openblas: 
   :depends on pandas: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install merfishtools

to add into an existing workspace instead, run::

    pixi add merfishtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install merfishtools

Alternatively, to install into a new environment, run::

    conda create -n envname merfishtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/merfishtools:<tag>

(see `merfishtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_merfishtools| image:: https://img.shields.io/conda/dn/bioconda/merfishtools.svg?style=flat
   :target: https://anaconda.org/bioconda/merfishtools
   :alt:   (downloads)
.. |docker_merfishtools| image:: https://quay.io/repository/biocontainers/merfishtools/status
   :target: https://quay.io/repository/biocontainers/merfishtools
.. _`merfishtools/tags`: https://quay.io/repository/biocontainers/merfishtools?tab=tags


.. raw:: html

    <script>
        var package = "merfishtools";
        var versions = ["1.5.0","1.5.0","1.5.0","1.4.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merfishtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merfishtools/README.html