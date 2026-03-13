:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jarvis3'
.. highlight: bash

jarvis3
=======

.. conda:recipe:: jarvis3
   :replaces_section_title:
   :noindex:

   Improved encoder for genomic sequences.

   :homepage: https://github.com/cobilab/jarvis3
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`jarvis3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis3/meta.yaml>`_

   


.. conda:package:: jarvis3

   |downloads_jarvis3| |docker_jarvis3|

   :versions:
      
      

      ``3.7-3``,  ``3.7-2``,  ``3.7-1``,  ``3.7-0``

      

   
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

    pixi global install jarvis3

to add into an existing workspace instead, run::

    pixi add jarvis3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jarvis3

Alternatively, to install into a new environment, run::

    conda create -n envname jarvis3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jarvis3:<tag>

(see `jarvis3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jarvis3| image:: https://img.shields.io/conda/dn/bioconda/jarvis3.svg?style=flat
   :target: https://anaconda.org/bioconda/jarvis3
   :alt:   (downloads)
.. |docker_jarvis3| image:: https://quay.io/repository/biocontainers/jarvis3/status
   :target: https://quay.io/repository/biocontainers/jarvis3
.. _`jarvis3/tags`: https://quay.io/repository/biocontainers/jarvis3?tab=tags


.. raw:: html

    <script>
        var package = "jarvis3";
        var versions = ["3.7","3.7","3.7","3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jarvis3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jarvis3/README.html