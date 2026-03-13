:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flye'
.. highlight: bash

flye
====

.. conda:recipe:: flye
   :replaces_section_title:
   :noindex:

   A fast and accurate de novo assembler for single molecule sequencing reads using repeat graphs.

   :homepage: https://github.com/mikolmogorov/Flye
   :documentation: https://github.com/mikolmogorov/Flye/blob/flye/docs/USAGE.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`flye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flye/meta.yaml>`_
   :links: biotools: :biotools:`Flye`, usegalaxy-eu: :usegalaxy-eu:`flye`, doi: :doi:`10.1038/s41592-020-00971-x`, doi: :doi:`10.1038/s41587-019-0072-8`, doi: :doi:`10.1073/pnas.1604560113`

   


.. conda:package:: flye

   |downloads_flye| |docker_flye|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.6-0</code>,  <code>2.9.5-2</code>,  <code>2.9.5-1</code>,  <code>2.9.5-0</code>,  <code>2.9.4-2</code>,  <code>2.9.4-0</code>,  <code>2.9.3-1</code>,  <code>2.9.3-0</code>,  <code>2.9.2-2</code>,  </span></summary>
      

      ``2.9.6-0``,  ``2.9.5-2``,  ``2.9.5-1``,  ``2.9.5-0``,  ``2.9.4-2``,  ``2.9.4-0``,  ``2.9.3-1``,  ``2.9.3-0``,  ``2.9.2-2``,  ``2.9.2-1``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.9-1``,  ``2.9-0``,  ``2.8.3-1``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.8-0``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.7.1-0``,  ``2.7-0``,  ``2.6-0``,  ``2.5-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4-0``,  ``2.3.7-0``,  ``2.3.6-3``,  ``2.3.5-3``,  ``2.3.4-2``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code>,  <code>linux-aarch64</code></span>
      

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

    pixi global install flye

to add into an existing workspace instead, run::

    pixi add flye

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flye

Alternatively, to install into a new environment, run::

    conda create -n envname flye

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flye:<tag>

(see `flye/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flye| image:: https://img.shields.io/conda/dn/bioconda/flye.svg?style=flat
   :target: https://anaconda.org/bioconda/flye
   :alt:   (downloads)
.. |docker_flye| image:: https://quay.io/repository/biocontainers/flye/status
   :target: https://quay.io/repository/biocontainers/flye
.. _`flye/tags`: https://quay.io/repository/biocontainers/flye?tab=tags


.. raw:: html

    <script>
        var package = "flye";
        var versions = ["2.9.6","2.9.5","2.9.5","2.9.5","2.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flye/README.html