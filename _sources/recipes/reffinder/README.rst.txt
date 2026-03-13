:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reffinder'
.. highlight: bash

reffinder
=========

.. conda:recipe:: reffinder
   :replaces_section_title:
   :noindex:

   refFinder\: Fast Lightweighttool for extracting nucleotides from fastafile using streams.

   :homepage: https://github.com/ANGSD/refFinder
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`reffinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reffinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reffinder/meta.yaml>`_

   


.. conda:package:: reffinder

   |downloads_reffinder| |docker_reffinder|

   :versions:
      
      

      ``0.81-4``,  ``0.81-3``,  ``0.81-2``,  ``0.81-1``,  ``0.81-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install reffinder

to add into an existing workspace instead, run::

    pixi add reffinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reffinder

Alternatively, to install into a new environment, run::

    conda create -n envname reffinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reffinder:<tag>

(see `reffinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reffinder| image:: https://img.shields.io/conda/dn/bioconda/reffinder.svg?style=flat
   :target: https://anaconda.org/bioconda/reffinder
   :alt:   (downloads)
.. |docker_reffinder| image:: https://quay.io/repository/biocontainers/reffinder/status
   :target: https://quay.io/repository/biocontainers/reffinder
.. _`reffinder/tags`: https://quay.io/repository/biocontainers/reffinder?tab=tags


.. raw:: html

    <script>
        var package = "reffinder";
        var versions = ["0.81","0.81","0.81","0.81","0.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reffinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reffinder/README.html