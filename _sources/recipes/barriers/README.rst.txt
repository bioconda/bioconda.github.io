:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barriers'
.. highlight: bash

barriers
========

.. conda:recipe:: barriers
   :replaces_section_title:
   :noindex:

   Compute local minima and energy barriers of a landscape.

   :homepage: https://www.tbi.univie.ac.at/RNA/Barriers
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`barriers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barriers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barriers/meta.yaml>`_

   


.. conda:package:: barriers

   |downloads_barriers| |docker_barriers|

   :versions:
      
      

      ``1.8.1-4``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on viennarna: ``>=2.7.0,<2.8.0a0``

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

    pixi global install barriers

to add into an existing workspace instead, run::

    pixi add barriers

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install barriers

Alternatively, to install into a new environment, run::

    conda create -n envname barriers

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/barriers:<tag>

(see `barriers/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_barriers| image:: https://img.shields.io/conda/dn/bioconda/barriers.svg?style=flat
   :target: https://anaconda.org/bioconda/barriers
   :alt:   (downloads)
.. |docker_barriers| image:: https://quay.io/repository/biocontainers/barriers/status
   :target: https://quay.io/repository/biocontainers/barriers
.. _`barriers/tags`: https://quay.io/repository/biocontainers/barriers?tab=tags


.. raw:: html

    <script>
        var package = "barriers";
        var versions = ["1.8.1","1.8.1","1.8.1","1.8.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barriers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barriers/README.html