:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savvy'
.. highlight: bash

savvy
=====

.. conda:recipe:: savvy
   :replaces_section_title:
   :noindex:

   Interface to various variant calling formats.

   :homepage: https://github.com/statgen/savvy
   :license: MOZILLA / MPL-2.0
   :recipe: /`savvy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savvy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savvy/meta.yaml>`_

   


.. conda:package:: savvy

   |downloads_savvy| |docker_savvy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.0-4</code>,  <code>2.1.0-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.1.0-0</code>,  <code>2.0.1-4</code>,  <code>2.0.1-3</code>,  <code>2.0.1-2</code>,  <code>2.0.1-1</code>,  </span></summary>
      

      ``2.1.0-4``,  ``2.1.0-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on shrinkwrap: 
   :depends on zstd: ``>=1.5.7,<1.6.0a0``

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

    pixi global install savvy

to add into an existing workspace instead, run::

    pixi add savvy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install savvy

Alternatively, to install into a new environment, run::

    conda create -n envname savvy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/savvy:<tag>

(see `savvy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_savvy| image:: https://img.shields.io/conda/dn/bioconda/savvy.svg?style=flat
   :target: https://anaconda.org/bioconda/savvy
   :alt:   (downloads)
.. |docker_savvy| image:: https://quay.io/repository/biocontainers/savvy/status
   :target: https://quay.io/repository/biocontainers/savvy
.. _`savvy/tags`: https://quay.io/repository/biocontainers/savvy?tab=tags


.. raw:: html

    <script>
        var package = "savvy";
        var versions = ["2.1.0","2.1.0","2.1.0","2.1.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savvy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savvy/README.html