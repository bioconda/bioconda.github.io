:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srnamapper'
.. highlight: bash

srnamapper
==========

.. conda:recipe:: srnamapper
   :replaces_section_title:
   :noindex:

   Mapping small RNA data to a genome.

   :homepage: https://github.com/mzytnicki/srnaMapper
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`srnamapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnamapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnamapper/meta.yaml>`_

   


.. conda:package:: srnamapper

   |downloads_srnamapper| |docker_srnamapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.12-0</code>,  <code>1.0.11-1</code>,  <code>1.0.11-0</code>,  <code>1.0.10-1</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-2</code>,  <code>1.0.8-1</code>,  <code>1.0.8-0</code>,  </span></summary>
      

      ``1.0.12-0``,  ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``

      
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

    pixi global install srnamapper

to add into an existing workspace instead, run::

    pixi add srnamapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install srnamapper

Alternatively, to install into a new environment, run::

    conda create -n envname srnamapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/srnamapper:<tag>

(see `srnamapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_srnamapper| image:: https://img.shields.io/conda/dn/bioconda/srnamapper.svg?style=flat
   :target: https://anaconda.org/bioconda/srnamapper
   :alt:   (downloads)
.. |docker_srnamapper| image:: https://quay.io/repository/biocontainers/srnamapper/status
   :target: https://quay.io/repository/biocontainers/srnamapper
.. _`srnamapper/tags`: https://quay.io/repository/biocontainers/srnamapper?tab=tags


.. raw:: html

    <script>
        var package = "srnamapper";
        var versions = ["1.0.12","1.0.11","1.0.11","1.0.10","1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srnamapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srnamapper/README.html