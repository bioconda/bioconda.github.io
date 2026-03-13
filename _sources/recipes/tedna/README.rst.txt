:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tedna'
.. highlight: bash

tedna
=====

.. conda:recipe:: tedna
   :replaces_section_title:
   :noindex:

   Tedna is a lightweight de novo transposable element assembler.

   :homepage: https://github.com/mzytnicki/tedna
   :documentation: https://github.com/mzytnicki/tedna/blob/1.3.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tedna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tedna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tedna/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu365`, biotools: :biotools:`tedna`

   


.. conda:package:: tedna

   |downloads_tedna| |docker_tedna|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.2-2``,  ``1.2.2-1``,  ``1.2.2-0``

      

   
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

    pixi global install tedna

to add into an existing workspace instead, run::

    pixi add tedna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tedna

Alternatively, to install into a new environment, run::

    conda create -n envname tedna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tedna:<tag>

(see `tedna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tedna| image:: https://img.shields.io/conda/dn/bioconda/tedna.svg?style=flat
   :target: https://anaconda.org/bioconda/tedna
   :alt:   (downloads)
.. |docker_tedna| image:: https://quay.io/repository/biocontainers/tedna/status
   :target: https://quay.io/repository/biocontainers/tedna
.. _`tedna/tags`: https://quay.io/repository/biocontainers/tedna?tab=tags


.. raw:: html

    <script>
        var package = "tedna";
        var versions = ["1.3.1","1.2.2","1.2.2","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tedna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tedna/README.html