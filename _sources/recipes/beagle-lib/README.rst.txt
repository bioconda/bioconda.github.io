:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beagle-lib'
.. highlight: bash

beagle-lib
==========

.. conda:recipe:: beagle-lib
   :replaces_section_title:
   :noindex:

   A general purpose library for evaluating the likelihood of sequence evolution on phylogenetic trees.

   :homepage: https://github.com/beagle-dev/beagle-lib
   :documentation: https://github.com/beagle-dev/beagle-lib/blob/v4.0.1/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`beagle-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beagle-lib/meta.yaml>`_
   :links: biotools: :biotools:`beagle-lib`, doi: :doi:`10.1093/sysbio/syr100`

   


.. conda:package:: beagle-lib

   |downloads_beagle-lib| |docker_beagle-lib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.1-3</code>,  <code>4.0.1-2</code>,  <code>4.0.1-1</code>,  <code>4.0.1-0</code>,  <code>4.0.0-2</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.1.2-5</code>,  <code>3.1.2-4</code>,  </span></summary>
      

      ``4.0.1-3``,  ``4.0.1-2``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.1.2-5``,  ``3.1.2-4``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``2.1.2-7``,  ``2.1.2-6``,  ``2.1.2-5``,  ``2.1.2-4``,  ``2.1.2-3``,  ``2.1.2-2``,  ``2.1.2-1``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install beagle-lib

to add into an existing workspace instead, run::

    pixi add beagle-lib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install beagle-lib

Alternatively, to install into a new environment, run::

    conda create -n envname beagle-lib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/beagle-lib:<tag>

(see `beagle-lib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_beagle-lib| image:: https://img.shields.io/conda/dn/bioconda/beagle-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/beagle-lib
   :alt:   (downloads)
.. |docker_beagle-lib| image:: https://quay.io/repository/biocontainers/beagle-lib/status
   :target: https://quay.io/repository/biocontainers/beagle-lib
.. _`beagle-lib/tags`: https://quay.io/repository/biocontainers/beagle-lib?tab=tags


.. raw:: html

    <script>
        var package = "beagle-lib";
        var versions = ["4.0.1","4.0.1","4.0.1","4.0.1","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beagle-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beagle-lib/README.html