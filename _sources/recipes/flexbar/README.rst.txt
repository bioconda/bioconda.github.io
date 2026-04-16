:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexbar'
.. highlight: bash

flexbar
=======

.. conda:recipe:: flexbar
   :replaces_section_title:
   :noindex:

   Flexible barcode and adapter removal.

   :homepage: https://github.com/seqan/flexbar
   :documentation: https://github.com/seqan/flexbar/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`flexbar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexbar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexbar/meta.yaml>`_
   :links: biotools: :biotools:`flexbar`, doi: :doi:`10.3390/biology1030895`, doi: :doi:`10.1093/bioinformatics/btx330`

   


.. conda:package:: flexbar

   |downloads_flexbar| |docker_flexbar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-12</code>,  <code>3.5.0-11</code>,  <code>3.5.0-10</code>,  <code>3.5.0-9</code>,  <code>3.5.0-8</code>,  <code>3.5.0-6</code>,  <code>3.5.0-5</code>,  <code>3.5.0-4</code>,  <code>3.5.0-3</code>,  </span></summary>
      

      ``3.5.0-12``,  ``3.5.0-11``,  ``3.5.0-10``,  ``3.5.0-9``,  ``3.5.0-8``,  ``3.5.0-6``,  ``3.5.0-5``,  ``3.5.0-4``,  ``3.5.0-3``,  ``3.5.0-2``,  ``3.3.0-1``,  ``2.5.0-5``,  ``2.5.0-4``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on seqan-library: 
   :depends on tbb: ``>=2021.13.0``

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

    pixi global install flexbar

to add into an existing workspace instead, run::

    pixi add flexbar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flexbar

Alternatively, to install into a new environment, run::

    conda create -n envname flexbar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flexbar:<tag>

(see `flexbar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flexbar| image:: https://img.shields.io/conda/dn/bioconda/flexbar.svg?style=flat
   :target: https://anaconda.org/bioconda/flexbar
   :alt:   (downloads)
.. |docker_flexbar| image:: https://quay.io/repository/biocontainers/flexbar/status
   :target: https://quay.io/repository/biocontainers/flexbar
.. _`flexbar/tags`: https://quay.io/repository/biocontainers/flexbar?tab=tags


.. raw:: html

    <script>
        var package = "flexbar";
        var versions = ["3.5.0","3.5.0","3.5.0","3.5.0","3.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexbar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexbar/README.html