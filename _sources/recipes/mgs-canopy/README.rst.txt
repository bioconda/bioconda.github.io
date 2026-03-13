:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgs-canopy'
.. highlight: bash

mgs-canopy
==========

.. conda:recipe:: mgs-canopy
   :replaces_section_title:
   :noindex:

   Canopy clustering algorithm

   :homepage: https://github.com/fplaza/mgs-canopy-algorithm
   :license: GPL3
   :recipe: /`mgs-canopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgs-canopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgs-canopy/meta.yaml>`_
   :links: doi: :doi:`10.1038/nbt.2939`

   


.. conda:package:: mgs-canopy

   |downloads_mgs-canopy| |docker_mgs-canopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-9</code>,  <code>1.0-8</code>,  <code>1.0-7</code>,  <code>1.0-6</code>,  <code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  </span></summary>
      

      ``1.0-9``,  ``1.0-8``,  ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install mgs-canopy

to add into an existing workspace instead, run::

    pixi add mgs-canopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mgs-canopy

Alternatively, to install into a new environment, run::

    conda create -n envname mgs-canopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mgs-canopy:<tag>

(see `mgs-canopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mgs-canopy| image:: https://img.shields.io/conda/dn/bioconda/mgs-canopy.svg?style=flat
   :target: https://anaconda.org/bioconda/mgs-canopy
   :alt:   (downloads)
.. |docker_mgs-canopy| image:: https://quay.io/repository/biocontainers/mgs-canopy/status
   :target: https://quay.io/repository/biocontainers/mgs-canopy
.. _`mgs-canopy/tags`: https://quay.io/repository/biocontainers/mgs-canopy?tab=tags


.. raw:: html

    <script>
        var package = "mgs-canopy";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgs-canopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgs-canopy/README.html