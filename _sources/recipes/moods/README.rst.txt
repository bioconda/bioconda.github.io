:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'moods'
.. highlight: bash

moods
=====

.. conda:recipe:: moods
   :replaces_section_title:
   :noindex:

   MOODS\: Motif Occurrence Detection Suite

   :homepage: https://www.cs.helsinki.fi/group/pssmfind
   :documentation: https://github.com/jhkorhonen/MOODS/wiki
   
   :developer docs: https://github.com/jhkorhonen/MOODS
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`moods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/moods/meta.yaml>`_
   :links: biotools: :biotools:`MOODS`, doi: :doi:`10.1109/TCBB.2009.35`

   


.. conda:package:: moods

   |downloads_moods| |docker_moods|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.4.2-3</code>,  <code>1.9.4.2-2</code>,  <code>1.9.4.2-1</code>,  <code>1.9.4.2-0</code>,  <code>1.9.4.1-4</code>,  <code>1.9.4.1-3</code>,  <code>1.9.4.1-2</code>,  <code>1.9.4.1-1</code>,  <code>1.9.4.1-0</code>,  </span></summary>
      

      ``1.9.4.2-3``,  ``1.9.4.2-2``,  ``1.9.4.2-1``,  ``1.9.4.2-0``,  ``1.9.4.1-4``,  ``1.9.4.1-3``,  ``1.9.4.1-2``,  ``1.9.4.1-1``,  ``1.9.4.1-0``,  ``1.9.3-4``,  ``1.9.3-2``,  ``1.9.3-1``,  ``1.9.3-0``,  ``1.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
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

    pixi global install moods

to add into an existing workspace instead, run::

    pixi add moods

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install moods

Alternatively, to install into a new environment, run::

    conda create -n envname moods

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/moods:<tag>

(see `moods/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_moods| image:: https://img.shields.io/conda/dn/bioconda/moods.svg?style=flat
   :target: https://anaconda.org/bioconda/moods
   :alt:   (downloads)
.. |docker_moods| image:: https://quay.io/repository/biocontainers/moods/status
   :target: https://quay.io/repository/biocontainers/moods
.. _`moods/tags`: https://quay.io/repository/biocontainers/moods?tab=tags


.. raw:: html

    <script>
        var package = "moods";
        var versions = ["1.9.4.2","1.9.4.2","1.9.4.2","1.9.4.2","1.9.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/moods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/moods/README.html