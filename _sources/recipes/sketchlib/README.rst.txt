:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sketchlib'
.. highlight: bash

sketchlib
=========

.. conda:recipe:: sketchlib
   :replaces_section_title:
   :noindex:

   Fast sequence distance estimates

   :homepage: https://github.com/bacpop/sketchlib.rust
   :license: APACHE / Apache-2.0
   :recipe: /`sketchlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sketchlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sketchlib/meta.yaml>`_

   


.. conda:package:: sketchlib

   |downloads_sketchlib| |docker_sketchlib|

   :versions:
      
      

      ``0.2.4-0``

      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install sketchlib

to add into an existing workspace instead, run::

    pixi add sketchlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sketchlib

Alternatively, to install into a new environment, run::

    conda create -n envname sketchlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sketchlib:<tag>

(see `sketchlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sketchlib| image:: https://img.shields.io/conda/dn/bioconda/sketchlib.svg?style=flat
   :target: https://anaconda.org/bioconda/sketchlib
   :alt:   (downloads)
.. |docker_sketchlib| image:: https://quay.io/repository/biocontainers/sketchlib/status
   :target: https://quay.io/repository/biocontainers/sketchlib
.. _`sketchlib/tags`: https://quay.io/repository/biocontainers/sketchlib?tab=tags


.. raw:: html

    <script>
        var package = "sketchlib";
        var versions = ["0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sketchlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sketchlib/README.html