:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gotohscan'
.. highlight: bash

gotohscan
=========

.. conda:recipe:: gotohscan
   :replaces_section_title:
   :noindex:

   A search tool that finds shorter sequences \(usually genes\) in large database sequences \(chromosomes\, genomes\, ..\) by computing all semi\-global alignments.

   :homepage: https://www.bioinf.uni-leipzig.de
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gotohscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotohscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotohscan/meta.yaml>`_

   


.. conda:package:: gotohscan

   |downloads_gotohscan| |docker_gotohscan|

   :versions:
      
      

      ``2.0-0``,  ``1.3-7``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install gotohscan

to add into an existing workspace instead, run::

    pixi add gotohscan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gotohscan

Alternatively, to install into a new environment, run::

    conda create -n envname gotohscan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gotohscan:<tag>

(see `gotohscan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gotohscan| image:: https://img.shields.io/conda/dn/bioconda/gotohscan.svg?style=flat
   :target: https://anaconda.org/bioconda/gotohscan
   :alt:   (downloads)
.. |docker_gotohscan| image:: https://quay.io/repository/biocontainers/gotohscan/status
   :target: https://quay.io/repository/biocontainers/gotohscan
.. _`gotohscan/tags`: https://quay.io/repository/biocontainers/gotohscan?tab=tags


.. raw:: html

    <script>
        var package = "gotohscan";
        var versions = ["2.0","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gotohscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gotohscan/README.html