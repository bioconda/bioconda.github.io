:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chum'
.. highlight: bash

chum
====

.. conda:recipe:: chum
   :replaces_section_title:
   :noindex:

   Evaluate the effectiveness of baits in a hybrid selection panel.

   :homepage: https://github.com/clintval/chum
   :documentation: https://github.com/clintval/chum/blob/0.2.0/README.md
   
   :license: MIT / MIT
   :recipe: /`chum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chum/meta.yaml>`_

   


.. conda:package:: chum

   |downloads_chum| |docker_chum|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on blast: ``>=2.0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on viennarna: ``>=2.0``

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

    pixi global install chum

to add into an existing workspace instead, run::

    pixi add chum

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chum

Alternatively, to install into a new environment, run::

    conda create -n envname chum

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chum:<tag>

(see `chum/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chum| image:: https://img.shields.io/conda/dn/bioconda/chum.svg?style=flat
   :target: https://anaconda.org/bioconda/chum
   :alt:   (downloads)
.. |docker_chum| image:: https://quay.io/repository/biocontainers/chum/status
   :target: https://quay.io/repository/biocontainers/chum
.. _`chum/tags`: https://quay.io/repository/biocontainers/chum?tab=tags


.. raw:: html

    <script>
        var package = "chum";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chum/README.html