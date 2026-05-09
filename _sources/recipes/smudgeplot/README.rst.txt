:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smudgeplot'
.. highlight: bash

smudgeplot
==========

.. conda:recipe:: smudgeplot
   :replaces_section_title:
   :noindex:

   Inference of ploidy and heterozygosity structure using whole genome sequencing data

   :homepage: https://github.com/KamilSJaron/smudgeplot
   :license: Apache-2.0
   :recipe: /`smudgeplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smudgeplot/meta.yaml>`_

   


.. conda:package:: smudgeplot

   |downloads_smudgeplot| |docker_smudgeplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.3-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.5-4</code>,  <code>0.2.5-3</code>,  <code>0.2.5-2</code>,  <code>0.2.5-1</code>,  </span></summary>
      

      ``0.5.3-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.5-4``,  ``0.2.5-3``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: ``>=3.4.0``
   :depends on numpy: ``>=1.20.0``
   :depends on pandas: ``>=1.3.0``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on python_abi: ``3.14.* *_cp314``

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

    pixi global install smudgeplot

to add into an existing workspace instead, run::

    pixi add smudgeplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smudgeplot

Alternatively, to install into a new environment, run::

    conda create -n envname smudgeplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smudgeplot:<tag>

(see `smudgeplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smudgeplot| image:: https://img.shields.io/conda/dn/bioconda/smudgeplot.svg?style=flat
   :target: https://anaconda.org/bioconda/smudgeplot
   :alt:   (downloads)
.. |docker_smudgeplot| image:: https://quay.io/repository/biocontainers/smudgeplot/status
   :target: https://quay.io/repository/biocontainers/smudgeplot
.. _`smudgeplot/tags`: https://quay.io/repository/biocontainers/smudgeplot?tab=tags


.. raw:: html

    <script>
        var package = "smudgeplot";
        var versions = ["0.5.3","0.4.0","0.4.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smudgeplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smudgeplot/README.html