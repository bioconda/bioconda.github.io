:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abyss'
.. highlight: bash

abyss
=====

.. conda:recipe:: abyss
   :replaces_section_title:
   :noindex:

   Assembly By Short Sequences \- a de novo\, parallel\, paired\-end short read sequence assembler.

   :homepage: https://www.bcgsc.ca/platform/bioinfo/software/abyss
   :documentation: https://github.com/bcgsc/abyss/blob/v2.3.10/README.md
   
   :developer docs: https://github.com/bcgsc/abyss
   :license: GPL3 / GPL-3.0-only
   :recipe: /`abyss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abyss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abyss/meta.yaml>`_
   :links: biotools: :biotools:`abyss`, usegalaxy-eu: :usegalaxy-eu:`abyss-pe`, doi: :doi:`10.1101/gr.214346.116`, doi: :doi:`10.1101/gr.089532.108`

   


.. conda:package:: abyss

   |downloads_abyss| |docker_abyss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.10-2</code>,  <code>2.3.10-1</code>,  <code>2.3.10-0</code>,  <code>2.3.9-0</code>,  <code>2.3.8-1</code>,  <code>2.3.8-0</code>,  <code>2.3.7-4</code>,  <code>2.3.7-3</code>,  <code>2.3.7-2</code>,  </span></summary>
      

      ``2.3.10-2``,  ``2.3.10-1``,  ``2.3.10-0``,  ``2.3.9-0``,  ``2.3.8-1``,  ``2.3.8-0``,  ``2.3.7-4``,  ``2.3.7-3``,  ``2.3.7-2``,  ``2.3.7-1``,  ``2.3.7-0``,  ``2.3.6-1``,  ``2.3.6-0``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.3-2``,  ``2.2.3-1``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.5-1``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.9.0-7``,  ``1.9.0-6``,  ``1.9.0-5``,  ``1.9.0-4``,  ``1.9.0-3``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.5.2-5``,  ``1.5.2-4``,  ``1.5.2-3``,  ``1.5.2-2``,  ``1.5.2-1``,  ``1.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on btllib: ``>=1.7.5,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on make: 
   :depends on openmpi: ``>=4.1.6,<5.0a0``
   :depends on perl: 
   :depends on util-linux: 

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

    pixi global install abyss

to add into an existing workspace instead, run::

    pixi add abyss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abyss

Alternatively, to install into a new environment, run::

    conda create -n envname abyss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abyss:<tag>

(see `abyss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abyss| image:: https://img.shields.io/conda/dn/bioconda/abyss.svg?style=flat
   :target: https://anaconda.org/bioconda/abyss
   :alt:   (downloads)
.. |docker_abyss| image:: https://quay.io/repository/biocontainers/abyss/status
   :target: https://quay.io/repository/biocontainers/abyss
.. _`abyss/tags`: https://quay.io/repository/biocontainers/abyss?tab=tags


.. raw:: html

    <script>
        var package = "abyss";
        var versions = ["2.3.10","2.3.10","2.3.10","2.3.9","2.3.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abyss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abyss/README.html