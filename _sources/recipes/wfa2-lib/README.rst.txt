:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wfa2-lib'
.. highlight: bash

wfa2-lib
========

.. conda:recipe:: wfa2-lib
   :replaces_section_title:
   :noindex:

   Wavefront alignment algorithm library v2.

   :homepage: https://github.com/smarco/WFA2-lib
   :documentation: https://github.com/smarco/WFA2-lib/blob/v2.3.5/README.md
   
   :license: MIT / MIT
   :recipe: /`wfa2-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfa2-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wfa2-lib/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaa777`, doi: :doi:`10.1101/2022.04.14.488380`

   


.. conda:package:: wfa2-lib

   |downloads_wfa2-lib| |docker_wfa2-lib|

   :versions:
      
      

      ``2.3.5-3``,  ``2.3.5-2``,  ``2.3.5-1``,  ``2.3.5-0``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
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

    pixi global install wfa2-lib

to add into an existing workspace instead, run::

    pixi add wfa2-lib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install wfa2-lib

Alternatively, to install into a new environment, run::

    conda create -n envname wfa2-lib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/wfa2-lib:<tag>

(see `wfa2-lib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_wfa2-lib| image:: https://img.shields.io/conda/dn/bioconda/wfa2-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/wfa2-lib
   :alt:   (downloads)
.. |docker_wfa2-lib| image:: https://quay.io/repository/biocontainers/wfa2-lib/status
   :target: https://quay.io/repository/biocontainers/wfa2-lib
.. _`wfa2-lib/tags`: https://quay.io/repository/biocontainers/wfa2-lib?tab=tags


.. raw:: html

    <script>
        var package = "wfa2-lib";
        var versions = ["2.3.5","2.3.5","2.3.5","2.3.5","2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wfa2-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wfa2-lib/README.html