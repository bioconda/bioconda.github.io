:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kronik'
.. highlight: bash

kronik
======

.. conda:recipe:: kronik
   :replaces_section_title:
   :noindex:

   Utility for processing Hardklor features to find candidate peptides by chromatographic profiling.

   :homepage: https://github.com/mhoopmann/kronik
   :license: APACHE / Apache-2.0
   :recipe: /`kronik <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronik>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronik/meta.yaml>`_
   :links: doi: :doi:`10.1002/0471250953.bi1318s37`

   


.. conda:package:: kronik

   |downloads_kronik| |docker_kronik|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20-9</code>,  <code>2.20-8</code>,  <code>2.20-7</code>,  <code>2.20-6</code>,  <code>2.20-5</code>,  <code>2.20-4</code>,  <code>2.20-3</code>,  <code>2.20-2</code>,  <code>2.20-1</code>,  </span></summary>
      

      ``2.20-9``,  ``2.20-8``,  ``2.20-7``,  ``2.20-6``,  ``2.20-5``,  ``2.20-4``,  ``2.20-3``,  ``2.20-2``,  ``2.20-1``,  ``2.20-0``

      
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

    pixi global install kronik

to add into an existing workspace instead, run::

    pixi add kronik

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kronik

Alternatively, to install into a new environment, run::

    conda create -n envname kronik

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kronik:<tag>

(see `kronik/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kronik| image:: https://img.shields.io/conda/dn/bioconda/kronik.svg?style=flat
   :target: https://anaconda.org/bioconda/kronik
   :alt:   (downloads)
.. |docker_kronik| image:: https://quay.io/repository/biocontainers/kronik/status
   :target: https://quay.io/repository/biocontainers/kronik
.. _`kronik/tags`: https://quay.io/repository/biocontainers/kronik?tab=tags


.. raw:: html

    <script>
        var package = "kronik";
        var versions = ["2.20","2.20","2.20","2.20","2.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kronik/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kronik/README.html