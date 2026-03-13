:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigprofilermatrixgenerator'
.. highlight: bash

sigprofilermatrixgenerator
==========================

.. conda:recipe:: sigprofilermatrixgenerator
   :replaces_section_title:
   :noindex:

   SigProfiler matrix generator tool.

   :homepage: https://github.com/AlexandrovLab/SigProfilerMatrixGenerator
   :license: BSD / BSD-2-Clause
   :recipe: /`sigprofilermatrixgenerator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilermatrixgenerator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigprofilermatrixgenerator/meta.yaml>`_

   


.. conda:package:: sigprofilermatrixgenerator

   |downloads_sigprofilermatrixgenerator| |docker_sigprofilermatrixgenerator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-1</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.2.31-0</code>,  <code>1.2.30-0</code>,  <code>1.2.29-0</code>,  <code>1.2.28-0</code>,  <code>1.2.27-0</code>,  <code>1.2.26-0</code>,  </span></summary>
      

      ``1.3.3-1``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.2.31-0``,  ``1.2.30-0``,  ``1.2.29-0``,  ``1.2.28-0``,  ``1.2.27-0``,  ``1.2.26-0``,  ``1.2.25-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: ``>=2.2.2``
   :depends on numpy: ``>=2.0.0``
   :depends on pandas: ``>=2.0.0``
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=1.12.0``
   :depends on sigprofilerplotting: ``>=1.4.1``
   :depends on statsmodels: ``>=0.9.0``

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

    pixi global install sigprofilermatrixgenerator

to add into an existing workspace instead, run::

    pixi add sigprofilermatrixgenerator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sigprofilermatrixgenerator

Alternatively, to install into a new environment, run::

    conda create -n envname sigprofilermatrixgenerator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sigprofilermatrixgenerator:<tag>

(see `sigprofilermatrixgenerator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sigprofilermatrixgenerator| image:: https://img.shields.io/conda/dn/bioconda/sigprofilermatrixgenerator.svg?style=flat
   :target: https://anaconda.org/bioconda/sigprofilermatrixgenerator
   :alt:   (downloads)
.. |docker_sigprofilermatrixgenerator| image:: https://quay.io/repository/biocontainers/sigprofilermatrixgenerator/status
   :target: https://quay.io/repository/biocontainers/sigprofilermatrixgenerator
.. _`sigprofilermatrixgenerator/tags`: https://quay.io/repository/biocontainers/sigprofilermatrixgenerator?tab=tags


.. raw:: html

    <script>
        var package = "sigprofilermatrixgenerator";
        var versions = ["1.3.3","1.3.3","1.3.2","1.2.31","1.2.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigprofilermatrixgenerator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigprofilermatrixgenerator/README.html