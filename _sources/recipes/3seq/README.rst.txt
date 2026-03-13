:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '3seq'
.. highlight: bash

3seq
====

.. conda:recipe:: 3seq
   :replaces_section_title:
   :noindex:

   3SEQ tests all sequence triplets in an alignment for a mosaic recombination signal.

   :homepage: https://mol.ax/software/3seq
   :developer docs: https://gitlab.com/lamhm/3seq
   :license: CC-BY-NC-SA-4.0
   :recipe: /`3seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/3seq/meta.yaml>`_

   


.. conda:package:: 3seq

   |downloads_3seq| |docker_3seq|

   :versions:
      
      

      ``1.8-6``,  ``1.8-5``,  ``1.8-4``,  ``1.8-3``,  ``1.8-2``,  ``1.8-1``,  ``1.8-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install 3seq

to add into an existing workspace instead, run::

    pixi add 3seq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install 3seq

Alternatively, to install into a new environment, run::

    conda create -n envname 3seq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/3seq:<tag>

(see `3seq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_3seq| image:: https://img.shields.io/conda/dn/bioconda/3seq.svg?style=flat
   :target: https://anaconda.org/bioconda/3seq
   :alt:   (downloads)
.. |docker_3seq| image:: https://quay.io/repository/biocontainers/3seq/status
   :target: https://quay.io/repository/biocontainers/3seq
.. _`3seq/tags`: https://quay.io/repository/biocontainers/3seq?tab=tags


.. raw:: html

    <script>
        var package = "3seq";
        var versions = ["1.8","1.8","1.8","1.8","1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/3seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/3seq/README.html