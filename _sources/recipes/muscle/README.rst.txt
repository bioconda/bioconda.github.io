:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'muscle'
.. highlight: bash

muscle
======

.. conda:recipe:: muscle
   :replaces_section_title:
   :noindex:

   Multiple sequence and structure alignment with top benchmark scores scalable to thousands of sequences.

   :homepage: https://github.com/rcedgar/muscle
   :documentation: https://drive5.com/muscle5
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`muscle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muscle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muscle/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-022-34630-w`, biotools: :biotools:`muscle`, usegalaxy-eu: :usegalaxy-eu:`muscle`

   


.. conda:package:: muscle

   |downloads_muscle| |docker_muscle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.3-3</code>,  <code>5.3-2</code>,  <code>5.3-1</code>,  <code>5.3-0</code>,  <code>5.2-0</code>,  <code>5.1-3</code>,  <code>5.1-2</code>,  <code>5.1-1</code>,  <code>5.1.0-1</code>,  </span></summary>
      

      ``5.3-3``,  ``5.3-2``,  ``5.3-1``,  ``5.3-0``,  ``5.2-0``,  ``5.1-3``,  ``5.1-2``,  ``5.1-1``,  ``5.1.0-1``,  ``5.1.0-0``,  ``5.1-0``,  ``3.8.1551-9``,  ``3.8.1551-8``,  ``3.8.1551-7``,  ``3.8.1551-6``,  ``3.8.1551-5``,  ``3.8.1551-4``,  ``3.8.1551-3``,  ``3.8.1551-2``,  ``3.8.1551-1``,  ``3.8.31-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``

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

    pixi global install muscle

to add into an existing workspace instead, run::

    pixi add muscle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install muscle

Alternatively, to install into a new environment, run::

    conda create -n envname muscle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/muscle:<tag>

(see `muscle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_muscle| image:: https://img.shields.io/conda/dn/bioconda/muscle.svg?style=flat
   :target: https://anaconda.org/bioconda/muscle
   :alt:   (downloads)
.. |docker_muscle| image:: https://quay.io/repository/biocontainers/muscle/status
   :target: https://quay.io/repository/biocontainers/muscle
.. _`muscle/tags`: https://quay.io/repository/biocontainers/muscle?tab=tags


.. raw:: html

    <script>
        var package = "muscle";
        var versions = ["5.3","5.3","5.3","5.3","5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muscle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muscle/README.html