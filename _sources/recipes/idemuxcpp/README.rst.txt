:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'idemuxcpp'
.. highlight: bash

idemuxcpp
=========

.. conda:recipe:: idemuxcpp
   :replaces_section_title:
   :noindex:

   A Lexogen tool for demultiplexing and index error correcting fastq files. Works with Lexogen i7\, i5 and i1 barcodes.

   :homepage: https://github.com/Lexogen-Tools/idemuxcpp
   :license: OTHER / custom
   :recipe: /`idemuxcpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemuxcpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/idemuxcpp/meta.yaml>`_

   


.. conda:package:: idemuxcpp

   |downloads_idemuxcpp| |docker_idemuxcpp|

   :versions:
      
      

      ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``

      

   
   :depends on bamtools: ``>=2.5.1``
   :depends on bamtools: ``>=2.5.2,<2.6.0a0``
   :depends on boost-cpp: ``>=1.55``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install idemuxcpp

to add into an existing workspace instead, run::

    pixi add idemuxcpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install idemuxcpp

Alternatively, to install into a new environment, run::

    conda create -n envname idemuxcpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/idemuxcpp:<tag>

(see `idemuxcpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_idemuxcpp| image:: https://img.shields.io/conda/dn/bioconda/idemuxcpp.svg?style=flat
   :target: https://anaconda.org/bioconda/idemuxcpp
   :alt:   (downloads)
.. |docker_idemuxcpp| image:: https://quay.io/repository/biocontainers/idemuxcpp/status
   :target: https://quay.io/repository/biocontainers/idemuxcpp
.. _`idemuxcpp/tags`: https://quay.io/repository/biocontainers/idemuxcpp?tab=tags


.. raw:: html

    <script>
        var package = "idemuxcpp";
        var versions = ["0.3.0","0.3.0","0.3.0","0.2.0","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/idemuxcpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/idemuxcpp/README.html