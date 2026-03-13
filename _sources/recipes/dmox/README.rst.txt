:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dmox'
.. highlight: bash

dmox
====

.. conda:recipe:: dmox
   :replaces_section_title:
   :noindex:

   Rust\-based demultiplexing of haplotagging linked\-read data.

   :homepage: https://gitlab.mbb.cnrs.fr/ibonnici/dmox
   :documentation: https://gitlab.mbb.cnrs.fr/ibonnici/dmox/-/blob/v0.2.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`dmox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmox/meta.yaml>`_

   dmox is a drop\-in replacement for the haplotagging linked\-read demultiplexing module implemented in Harpy.
   It\'s used within Harpy itself\, but also functions as a standalone\, efficient demultiplexing software.



.. conda:package:: dmox

   |downloads_dmox| |docker_dmox|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install dmox

to add into an existing workspace instead, run::

    pixi add dmox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dmox

Alternatively, to install into a new environment, run::

    conda create -n envname dmox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dmox:<tag>

(see `dmox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dmox| image:: https://img.shields.io/conda/dn/bioconda/dmox.svg?style=flat
   :target: https://anaconda.org/bioconda/dmox
   :alt:   (downloads)
.. |docker_dmox| image:: https://quay.io/repository/biocontainers/dmox/status
   :target: https://quay.io/repository/biocontainers/dmox
.. _`dmox/tags`: https://quay.io/repository/biocontainers/dmox?tab=tags


.. raw:: html

    <script>
        var package = "dmox";
        var versions = ["0.2.1","0.2.0","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dmox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dmox/README.html