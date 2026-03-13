:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimap'
.. highlight: bash

minimap
=======

.. conda:recipe:: minimap
   :replaces_section_title:
   :noindex:

   Experimental tool to find approximate mapping positions between long sequences

   :homepage: https://github.com/lh3/minimap
   :license: MIT
   :recipe: /`minimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap/meta.yaml>`_

   


.. conda:package:: minimap

   |downloads_minimap| |docker_minimap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2-0</code>,  <code>0.2_r124-8</code>,  <code>0.2_r124-7</code>,  <code>0.2_r124-6</code>,  <code>0.2_r124-5</code>,  <code>0.2_r124-4</code>,  <code>0.2_r124-3</code>,  <code>0.2_r124-2</code>,  <code>0.2_r124-1</code>,  </span></summary>
      

      ``0.2-0``,  ``0.2_r124-8``,  ``0.2_r124-7``,  ``0.2_r124-6``,  ``0.2_r124-5``,  ``0.2_r124-4``,  ``0.2_r124-3``,  ``0.2_r124-2``,  ``0.2_r124-1``,  ``0.2_r124-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: 

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

    pixi global install minimap

to add into an existing workspace instead, run::

    pixi add minimap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minimap

Alternatively, to install into a new environment, run::

    conda create -n envname minimap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minimap:<tag>

(see `minimap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minimap| image:: https://img.shields.io/conda/dn/bioconda/minimap.svg?style=flat
   :target: https://anaconda.org/bioconda/minimap
   :alt:   (downloads)
.. |docker_minimap| image:: https://quay.io/repository/biocontainers/minimap/status
   :target: https://quay.io/repository/biocontainers/minimap
.. _`minimap/tags`: https://quay.io/repository/biocontainers/minimap?tab=tags


.. raw:: html

    <script>
        var package = "minimap";
        var versions = ["0.2","0.2_r124","0.2_r124","0.2_r124","0.2_r124"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap/README.html