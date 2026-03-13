:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mashtree'
.. highlight: bash

mashtree
========

.. conda:recipe:: mashtree
   :replaces_section_title:
   :noindex:

   Create a tree using Mash distances.

   :homepage: https://github.com/lskatz/mashtree
   :documentation: https://github.com/lskatz/mashtree/blob/v1.4.6/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mashtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashtree/meta.yaml>`_

   


.. conda:package:: mashtree

   |downloads_mashtree| |docker_mashtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.6-4</code>,  <code>1.4.6-3</code>,  <code>1.4.6-2</code>,  <code>1.4.6-1</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.3-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.4.6-4``,  ``1.4.6-3``,  ``1.4.6-2``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1-0``,  ``1.0.4-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.57-1``,  ``0.57-0``,  ``0.55-0``,  ``0.37-0``,  ``0.36-0``,  ``0.35.4-0``,  ``0.30-2``,  ``0.30-0``,  ``0.28-0``,  ``0.26-0``,  ``0.25-0``,  ``0.21-0``,  ``0.20-0``,  ``0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=14``
   :depends on mash: ``>=2``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bioperl: 
   :depends on perl-file-which: 
   :depends on perl-module-build: ``0.4234.*``
   :depends on quicktree: 

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

    pixi global install mashtree

to add into an existing workspace instead, run::

    pixi add mashtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mashtree

Alternatively, to install into a new environment, run::

    conda create -n envname mashtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mashtree:<tag>

(see `mashtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mashtree| image:: https://img.shields.io/conda/dn/bioconda/mashtree.svg?style=flat
   :target: https://anaconda.org/bioconda/mashtree
   :alt:   (downloads)
.. |docker_mashtree| image:: https://quay.io/repository/biocontainers/mashtree/status
   :target: https://quay.io/repository/biocontainers/mashtree
.. _`mashtree/tags`: https://quay.io/repository/biocontainers/mashtree?tab=tags


.. raw:: html

    <script>
        var package = "mashtree";
        var versions = ["1.4.6","1.4.6","1.4.6","1.4.6","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mashtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mashtree/README.html