:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapmap'
.. highlight: bash

rapmap
======

.. conda:recipe:: rapmap
   :replaces_section_title:
   :noindex:

   Rapid sensitive and accurate read mapping via quasi\-mapping

   :homepage: https://github.com/COMBINE-lab/RapMap
   :license: GPL
   :recipe: /`rapmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapmap/meta.yaml>`_

   


.. conda:package:: rapmap

   |downloads_rapmap| |docker_rapmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-6</code>,  <code>0.6.0-5</code>,  <code>0.6.0-4</code>,  <code>0.6.0-3</code>,  <code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>v0.2.1-2</code>,  </span></summary>
      

      ``0.6.0-6``,  ``0.6.0-5``,  ``0.6.0-4``,  ``0.6.0-3``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.0-0``,  ``v0.2.1-2``,  ``v0.2.1-1``,  ``v0.2.0-1``,  ``v0.1.0pre-3``,  ``v0.1.0pre-2``,  ``v0.1.0pre-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on jemalloc: ``>=5.1.0``
   :depends on libgcc: ``>=13``
   :depends on libjemalloc: ``>=5.3.0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on tbb: 
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

    pixi global install rapmap

to add into an existing workspace instead, run::

    pixi add rapmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rapmap

Alternatively, to install into a new environment, run::

    conda create -n envname rapmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rapmap:<tag>

(see `rapmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rapmap| image:: https://img.shields.io/conda/dn/bioconda/rapmap.svg?style=flat
   :target: https://anaconda.org/bioconda/rapmap
   :alt:   (downloads)
.. |docker_rapmap| image:: https://quay.io/repository/biocontainers/rapmap/status
   :target: https://quay.io/repository/biocontainers/rapmap
.. _`rapmap/tags`: https://quay.io/repository/biocontainers/rapmap?tab=tags


.. raw:: html

    <script>
        var package = "rapmap";
        var versions = ["0.6.0","0.6.0","0.6.0","0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapmap/README.html