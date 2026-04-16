:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bedops'
.. highlight: bash

bedops
======

.. conda:recipe:: bedops
   :replaces_section_title:
   :noindex:

   High\-performance genomic feature operations.

   :homepage: https://github.com/bedops/bedops
   :documentation: https://bedops.readthedocs.io
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`bedops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bedops/meta.yaml>`_
   :links: biotools: :biotools:`Bedops`, usegalaxy-eu: :usegalaxy-eu:`bedops-sort-bed`, doi: :doi:`10.1093/bioinformatics/bts277`

   


.. conda:package:: bedops

   |downloads_bedops| |docker_bedops|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.42-1</code>,  <code>2.4.42-0</code>,  <code>2.4.41-3</code>,  <code>2.4.41-2</code>,  <code>2.4.41-1</code>,  <code>2.4.41-0</code>,  <code>2.4.40-0</code>,  <code>2.4.39-1</code>,  <code>2.4.39-0</code>,  </span></summary>
      

      ``2.4.42-1``,  ``2.4.42-0``,  ``2.4.41-3``,  ``2.4.41-2``,  ``2.4.41-1``,  ``2.4.41-0``,  ``2.4.40-0``,  ``2.4.39-1``,  ``2.4.39-0``,  ``2.4.38-0``,  ``2.4.37-0``,  ``2.4.36-1``,  ``2.4.36-0``,  ``2.4.35-2``,  ``2.4.35-1``,  ``2.4.35-0``,  ``2.4.34-0``,  ``2.4.33-0``,  ``2.4.32-0``,  ``2.4.30-0``,  ``2.4.27-0``,  ``2.4.26-0``,  ``2.4.25-0``,  ``2.4.24-0``,  ``2.4.23-0``,  ``2.4.22-0``,  ``2.4.21-0``,  ``2.4.20-0``,  ``2.4.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on jansson: ``>=2.14.1,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on samtools: 

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

    pixi global install bedops

to add into an existing workspace instead, run::

    pixi add bedops

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bedops

Alternatively, to install into a new environment, run::

    conda create -n envname bedops

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bedops:<tag>

(see `bedops/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bedops| image:: https://img.shields.io/conda/dn/bioconda/bedops.svg?style=flat
   :target: https://anaconda.org/bioconda/bedops
   :alt:   (downloads)
.. |docker_bedops| image:: https://quay.io/repository/biocontainers/bedops/status
   :target: https://quay.io/repository/biocontainers/bedops
.. _`bedops/tags`: https://quay.io/repository/biocontainers/bedops?tab=tags


.. raw:: html

    <script>
        var package = "bedops";
        var versions = ["2.4.42","2.4.42","2.4.41","2.4.41","2.4.41"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bedops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bedops/README.html