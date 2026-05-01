:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gap2seq'
.. highlight: bash

gap2seq
=======

.. conda:recipe:: gap2seq
   :replaces_section_title:
   :noindex:

   Gap2Seq is a tool for filling gaps between contigs in genome assemblies.

   :homepage: https://www.cs.helsinki.fi/u/lmsalmel/Gap2Seq
   :developer docs: https://github.com/rikuu/Gap2Seq
   :license: GPL-3.0-or-later
   :recipe: /`gap2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gap2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gap2seq/meta.yaml>`_

   


.. conda:package:: gap2seq

   |downloads_gap2seq| |docker_gap2seq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.1a-6</code>,  <code>3.1.1a-5</code>,  <code>3.1.1a-4</code>,  <code>3.1.1a-3</code>,  <code>3.1.1a-2</code>,  <code>3.1.1a-1</code>,  <code>3.1.1a-0</code>,  <code>3.1-3</code>,  <code>3.1-2</code>,  </span></summary>
      

      ``3.1.1a-6``,  ``3.1.1a-5``,  ``3.1.1a-4``,  ``3.1.1a-3``,  ``3.1.1a-2``,  ``3.1.1a-1``,  ``3.1.1a-0``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install gap2seq

to add into an existing workspace instead, run::

    pixi add gap2seq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gap2seq

Alternatively, to install into a new environment, run::

    conda create -n envname gap2seq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gap2seq:<tag>

(see `gap2seq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gap2seq| image:: https://img.shields.io/conda/dn/bioconda/gap2seq.svg?style=flat
   :target: https://anaconda.org/bioconda/gap2seq
   :alt:   (downloads)
.. |docker_gap2seq| image:: https://quay.io/repository/biocontainers/gap2seq/status
   :target: https://quay.io/repository/biocontainers/gap2seq
.. _`gap2seq/tags`: https://quay.io/repository/biocontainers/gap2seq?tab=tags


.. raw:: html

    <script>
        var package = "gap2seq";
        var versions = ["3.1.1a","3.1.1a","3.1.1a","3.1.1a","3.1.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gap2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gap2seq/README.html