:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lz-ani'
.. highlight: bash

lz-ani
======

.. conda:recipe:: lz-ani
   :replaces_section_title:
   :noindex:

   Fast and accurate tool for calculating Average Nucleotide Identity \(ANI\) among virus and bacteria genomes

   :homepage: https://github.com/refresh-bio/lz-ani
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`lz-ani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz-ani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz-ani/meta.yaml>`_

   


.. conda:package:: lz-ani

   |downloads_lz-ani| |docker_lz-ani|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.0-0``

      

   

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

    pixi global install lz-ani

to add into an existing workspace instead, run::

    pixi add lz-ani

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lz-ani

Alternatively, to install into a new environment, run::

    conda create -n envname lz-ani

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lz-ani:<tag>

(see `lz-ani/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lz-ani| image:: https://img.shields.io/conda/dn/bioconda/lz-ani.svg?style=flat
   :target: https://anaconda.org/bioconda/lz-ani
   :alt:   (downloads)
.. |docker_lz-ani| image:: https://quay.io/repository/biocontainers/lz-ani/status
   :target: https://quay.io/repository/biocontainers/lz-ani
.. _`lz-ani/tags`: https://quay.io/repository/biocontainers/lz-ani?tab=tags


.. raw:: html

    <script>
        var package = "lz-ani";
        var versions = ["1.2.3","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lz-ani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lz-ani/README.html