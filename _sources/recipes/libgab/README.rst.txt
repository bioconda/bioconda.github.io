:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libgab'
.. highlight: bash

libgab
======

.. conda:recipe:: libgab
   :replaces_section_title:
   :noindex:

   Several C\+\+ subroutines useful for bioinformatics

   :homepage: https://github.com/grenaud/libgab
   :license: GPL
   :recipe: /`libgab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgab/meta.yaml>`_

   


.. conda:package:: libgab

   |downloads_libgab| |docker_libgab|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-15</code>,  <code>1.0.5-14</code>,  <code>1.0.5-13</code>,  <code>1.0.5-12</code>,  <code>1.0.5-11</code>,  <code>1.0.5-10</code>,  <code>1.0.5-9</code>,  <code>1.0.5-8</code>,  <code>1.0.5-7</code>,  </span></summary>
      

      ``1.0.5-15``,  ``1.0.5-14``,  ``1.0.5-13``,  ``1.0.5-12``,  ``1.0.5-11``,  ``1.0.5-10``,  ``1.0.5-9``,  ``1.0.5-8``,  ``1.0.5-7``,  ``1.0.5-6``,  ``1.0.5-5``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.2,<2.6.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install libgab

to add into an existing workspace instead, run::

    pixi add libgab

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install libgab

Alternatively, to install into a new environment, run::

    conda create -n envname libgab

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/libgab:<tag>

(see `libgab/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_libgab| image:: https://img.shields.io/conda/dn/bioconda/libgab.svg?style=flat
   :target: https://anaconda.org/bioconda/libgab
   :alt:   (downloads)
.. |docker_libgab| image:: https://quay.io/repository/biocontainers/libgab/status
   :target: https://quay.io/repository/biocontainers/libgab
.. _`libgab/tags`: https://quay.io/repository/biocontainers/libgab?tab=tags


.. raw:: html

    <script>
        var package = "libgab";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgab/README.html