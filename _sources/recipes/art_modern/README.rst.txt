:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'art_modern'
.. highlight: bash

art_modern
==========

.. conda:recipe:: art_modern
   :replaces_section_title:
   :noindex:

   Modernized ART simulator of diverse Next\-Generation Sequencing reads

   :homepage: https://github.com/YU-Zhejian/art_modern
   :documentation: https://github.com/YU-Zhejian/art_modern/releases/download/1.3.4/art_modern.pdf
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`art_modern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art_modern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art_modern/meta.yaml>`_

   


.. conda:package:: art_modern

   |downloads_art_modern| |docker_art_modern|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-1</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.10-0</code>,  </span></summary>
      

      ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on fmt: ``>=12.0.0,<12.1.0a0``
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libboost: ``>=1.86,<1.87``
   :depends on libboost: ``>=1.86.0,<1.87.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
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

    pixi global install art_modern

to add into an existing workspace instead, run::

    pixi add art_modern

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install art_modern

Alternatively, to install into a new environment, run::

    conda create -n envname art_modern

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/art_modern:<tag>

(see `art_modern/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_art_modern| image:: https://img.shields.io/conda/dn/bioconda/art_modern.svg?style=flat
   :target: https://anaconda.org/bioconda/art_modern
   :alt:   (downloads)
.. |docker_art_modern| image:: https://quay.io/repository/biocontainers/art_modern/status
   :target: https://quay.io/repository/biocontainers/art_modern
.. _`art_modern/tags`: https://quay.io/repository/biocontainers/art_modern?tab=tags


.. raw:: html

    <script>
        var package = "art_modern";
        var versions = ["1.3.4","1.3.3","1.3.2","1.3.1","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/art_modern/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/art_modern/README.html