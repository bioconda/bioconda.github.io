:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'n50'
.. highlight: bash

n50
===

.. conda:recipe:: n50
   :replaces_section_title:
   :noindex:

   A command\-line tool to calculate the N50 value of a set of sequences and other utilities.

   :homepage: https://github.com/quadram-institute-bioscience/n50
   :documentation: https://github.com/quadram-institute-bioscience/n50/blob/v1.9.3/README.md
   
   :license: MIT / MIT
   :recipe: /`n50 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/n50>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/n50/meta.yaml>`_
   :links: biotools: :biotools:`n50`, doi: :doi:`10.3390/bioengineering8050059`

   This repository provides tools for N50 calculation and dataset simulation.


.. conda:package:: n50

   |downloads_n50| |docker_n50|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.3-0</code>,  <code>1.7.0-0</code>,  <code>1.5.8-0</code>,  <code>1.5.6-0</code>,  <code>1.5.5-0</code>,  <code>1.5.4-0</code>,  <code>1.5.0-0</code>,  <code>1.4.10-1</code>,  <code>1.4.10-0</code>,  </span></summary>
      

      ``1.9.3-0``,  ``1.7.0-0``,  ``1.5.8-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.0-0``,  ``1.4.10-1``,  ``1.4.10-0``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-0``,  ``0.92-0``,  ``0.90-0``,  ``0.83-0``,  ``0.82-0``,  ``0.80-0``,  ``0.60-3``,  ``0.60-2``,  ``0.60-1``,  ``0.60-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install n50

to add into an existing workspace instead, run::

    pixi add n50

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install n50

Alternatively, to install into a new environment, run::

    conda create -n envname n50

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/n50:<tag>

(see `n50/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_n50| image:: https://img.shields.io/conda/dn/bioconda/n50.svg?style=flat
   :target: https://anaconda.org/bioconda/n50
   :alt:   (downloads)
.. |docker_n50| image:: https://quay.io/repository/biocontainers/n50/status
   :target: https://quay.io/repository/biocontainers/n50
.. _`n50/tags`: https://quay.io/repository/biocontainers/n50?tab=tags


.. raw:: html

    <script>
        var package = "n50";
        var versions = ["1.9.3","1.7.0","1.5.8","1.5.6","1.5.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/n50/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/n50/README.html