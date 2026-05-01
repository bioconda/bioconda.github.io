:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quaqc'
.. highlight: bash

quaqc
=====

.. conda:recipe:: quaqc
   :replaces_section_title:
   :noindex:

   Quick ATAC\-seq Quality Control.

   :homepage: https://github.com/bjmt/quaqc
   :documentation: https://github.com/bjmt/quaqc/blob/v1.5/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`quaqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quaqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quaqc/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btae649`

   


.. conda:package:: quaqc

   |downloads_quaqc| |docker_quaqc|

   :versions:
      
      

      ``1.5-0``,  ``1.4-0``,  ``1.3g-0``,  ``1.3e-0``,  ``1.3d-1``,  ``1.3d-0``

      

   
   :depends on htslib: ``>=1.17``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
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

    pixi global install quaqc

to add into an existing workspace instead, run::

    pixi add quaqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install quaqc

Alternatively, to install into a new environment, run::

    conda create -n envname quaqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/quaqc:<tag>

(see `quaqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_quaqc| image:: https://img.shields.io/conda/dn/bioconda/quaqc.svg?style=flat
   :target: https://anaconda.org/bioconda/quaqc
   :alt:   (downloads)
.. |docker_quaqc| image:: https://quay.io/repository/biocontainers/quaqc/status
   :target: https://quay.io/repository/biocontainers/quaqc
.. _`quaqc/tags`: https://quay.io/repository/biocontainers/quaqc?tab=tags


.. raw:: html

    <script>
        var package = "quaqc";
        var versions = ["1.5","1.4","1.3g","1.3e","1.3d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quaqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quaqc/README.html