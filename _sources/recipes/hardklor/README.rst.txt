:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hardklor'
.. highlight: bash

hardklor
========

.. conda:recipe:: hardklor
   :replaces_section_title:
   :noindex:

   Analyze mass spectra.

   :homepage: https://github.com/mhoopmann/hardklor
   :license: APACHE / Apache-2.0
   :recipe: /`hardklor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hardklor/meta.yaml>`_
   :links: doi: :doi:`10.1002/0471250953.bi1318s37`

   


.. conda:package:: hardklor

   |downloads_hardklor| |docker_hardklor|

   :versions:
      
      

      ``2.3.2-6``,  ``2.3.2-5``,  ``2.3.2-4``,  ``2.3.2-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.0-1``,  ``2.3.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install hardklor

to add into an existing workspace instead, run::

    pixi add hardklor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hardklor

Alternatively, to install into a new environment, run::

    conda create -n envname hardklor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hardklor:<tag>

(see `hardklor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hardklor| image:: https://img.shields.io/conda/dn/bioconda/hardklor.svg?style=flat
   :target: https://anaconda.org/bioconda/hardklor
   :alt:   (downloads)
.. |docker_hardklor| image:: https://quay.io/repository/biocontainers/hardklor/status
   :target: https://quay.io/repository/biocontainers/hardklor
.. _`hardklor/tags`: https://quay.io/repository/biocontainers/hardklor?tab=tags


.. raw:: html

    <script>
        var package = "hardklor";
        var versions = ["2.3.2","2.3.2","2.3.2","2.3.2","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hardklor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hardklor/README.html