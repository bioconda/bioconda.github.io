:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hal2vg'
.. highlight: bash

hal2vg
======

.. conda:recipe:: hal2vg
   :replaces_section_title:
   :noindex:

   A tool for converting from hal to vg format\, as well as other tools generally useful for cactus.

   :homepage: https://github.com/ComparativeGenomicsToolkit/hal2vg
   :documentation: https://github.com/ComparativeGenomicsToolkit/hal2vg/blob/v1.1.8/README.md
   
   :license: MIT / MIT
   :recipe: /`hal2vg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hal2vg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hal2vg/meta.yaml>`_

   


.. conda:package:: hal2vg

   |downloads_hal2vg| |docker_hal2vg|

   :versions:
      
      

      ``1.1.8-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on hdf5: ``>=1.14.3,<1.14.4.0a0``
   :depends on jansson: ``>=2.14.1,<3.0a0``
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

    pixi global install hal2vg

to add into an existing workspace instead, run::

    pixi add hal2vg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hal2vg

Alternatively, to install into a new environment, run::

    conda create -n envname hal2vg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hal2vg:<tag>

(see `hal2vg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hal2vg| image:: https://img.shields.io/conda/dn/bioconda/hal2vg.svg?style=flat
   :target: https://anaconda.org/bioconda/hal2vg
   :alt:   (downloads)
.. |docker_hal2vg| image:: https://quay.io/repository/biocontainers/hal2vg/status
   :target: https://quay.io/repository/biocontainers/hal2vg
.. _`hal2vg/tags`: https://quay.io/repository/biocontainers/hal2vg?tab=tags


.. raw:: html

    <script>
        var package = "hal2vg";
        var versions = ["1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hal2vg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hal2vg/README.html