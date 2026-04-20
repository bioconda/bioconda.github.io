:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ghostx'
.. highlight: bash

ghostx
======

.. conda:recipe:: ghostx
   :replaces_section_title:
   :noindex:

   GHOSTX is a homology search tool which can detect remote homologues like BLAST and is about 100 times more efficient than BLAST by using suffix arrays. GHOSTX outputs search results in the format similar to BLAST\-tabular format.

   :homepage: http://www.bi.cs.titech.ac.jp/ghostx/
   :license: BSD-2-Clause
   :recipe: /`ghostx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghostx/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0103833`

   


.. conda:package:: ghostx

   |downloads_ghostx| |docker_ghostx|

   :versions:
      
      

      ``1.3.7-2``,  ``1.3.7-1``,  ``1.3.7-0``

      

   
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

    pixi global install ghostx

to add into an existing workspace instead, run::

    pixi add ghostx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ghostx

Alternatively, to install into a new environment, run::

    conda create -n envname ghostx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ghostx:<tag>

(see `ghostx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ghostx| image:: https://img.shields.io/conda/dn/bioconda/ghostx.svg?style=flat
   :target: https://anaconda.org/bioconda/ghostx
   :alt:   (downloads)
.. |docker_ghostx| image:: https://quay.io/repository/biocontainers/ghostx/status
   :target: https://quay.io/repository/biocontainers/ghostx
.. _`ghostx/tags`: https://quay.io/repository/biocontainers/ghostx?tab=tags


.. raw:: html

    <script>
        var package = "ghostx";
        var versions = ["1.3.7","1.3.7","1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghostx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghostx/README.html