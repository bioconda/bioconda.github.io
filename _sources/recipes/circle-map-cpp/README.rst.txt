:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circle-map-cpp'
.. highlight: bash

circle-map-cpp
==============

.. conda:recipe:: circle-map-cpp
   :replaces_section_title:
   :noindex:

   Circle\-Map\-cpp is the C\+\+ version of Circle\-Map.

   :homepage: https://github.com/BGI-Qingdao/Circle-Map-cpp
   :license: GPL3 / GPL-3.0-only
   :recipe: /`circle-map-cpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map-cpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circle-map-cpp/meta.yaml>`_

   


.. conda:package:: circle-map-cpp

   |downloads_circle-map-cpp| |docker_circle-map-cpp|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.0-1``,  ``0.5.0-0``

      

   
   :depends on bedtools: 
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on pysam: ``>=0.20.0``
   :depends on python: 

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

    pixi global install circle-map-cpp

to add into an existing workspace instead, run::

    pixi add circle-map-cpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circle-map-cpp

Alternatively, to install into a new environment, run::

    conda create -n envname circle-map-cpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circle-map-cpp:<tag>

(see `circle-map-cpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circle-map-cpp| image:: https://img.shields.io/conda/dn/bioconda/circle-map-cpp.svg?style=flat
   :target: https://anaconda.org/bioconda/circle-map-cpp
   :alt:   (downloads)
.. |docker_circle-map-cpp| image:: https://quay.io/repository/biocontainers/circle-map-cpp/status
   :target: https://quay.io/repository/biocontainers/circle-map-cpp
.. _`circle-map-cpp/tags`: https://quay.io/repository/biocontainers/circle-map-cpp?tab=tags


.. raw:: html

    <script>
        var package = "circle-map-cpp";
        var versions = ["1.0.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circle-map-cpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circle-map-cpp/README.html