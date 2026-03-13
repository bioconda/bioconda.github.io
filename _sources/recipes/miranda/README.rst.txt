:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miranda'
.. highlight: bash

miranda
=======

.. conda:recipe:: miranda
   :replaces_section_title:
   :noindex:

   An algorithm for finding genomic targets for microRNAs.

   :homepage: http://www.microrna.org
   :developer docs: https://github.com/hacktrackgnulinux/miranda
   :license: GPLv2 + RNAlib license (no commercial redistribution)
   :recipe: /`miranda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miranda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miranda/meta.yaml>`_

   


.. conda:package:: miranda

   |downloads_miranda| |docker_miranda|

   :versions:
      
      

      ``3.3a-9``,  ``3.3a-8``,  ``3.3a-6``,  ``3.3a-5``,  ``3.3a-4``,  ``3.3a-3``,  ``3.3a-2``,  ``3.3a-1``,  ``3.3a-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install miranda

to add into an existing workspace instead, run::

    pixi add miranda

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install miranda

Alternatively, to install into a new environment, run::

    conda create -n envname miranda

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/miranda:<tag>

(see `miranda/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_miranda| image:: https://img.shields.io/conda/dn/bioconda/miranda.svg?style=flat
   :target: https://anaconda.org/bioconda/miranda
   :alt:   (downloads)
.. |docker_miranda| image:: https://quay.io/repository/biocontainers/miranda/status
   :target: https://quay.io/repository/biocontainers/miranda
.. _`miranda/tags`: https://quay.io/repository/biocontainers/miranda?tab=tags


.. raw:: html

    <script>
        var package = "miranda";
        var versions = ["3.3a","3.3a","3.3a","3.3a","3.3a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miranda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miranda/README.html