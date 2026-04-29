:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coverm'
.. highlight: bash

coverm
======

.. conda:recipe:: coverm
   :replaces_section_title:
   :noindex:

   CoverM aims to be a configurable\, easy to use and fast DNA read coverage and relative abundance calculator focused on metagenomics applications.

   :homepage: https://github.com/wwood/CoverM
   :documentation: https://github.com/wwood/CoverM/blob/v0.7.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`coverm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverm/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btaf147`, biotools: :biotools:`coverm`, usegalaxy-eu: :usegalaxy-eu:`coverm_contig`, usegalaxy-eu: :usegalaxy-eu:`coverm_genome`

   CoverM aims to be a configurable\, easy to use and fast DNA read coverage and relative abundance calculator focused on metagenomics application.


.. conda:package:: coverm

   |downloads_coverm| |docker_coverm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-4</code>,  <code>0.7.0-3</code>,  <code>0.7.0-2</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-6</code>,  <code>0.6.1-5</code>,  <code>0.6.1-4</code>,  <code>0.6.1-3</code>,  </span></summary>
      

      ``0.7.0-4``,  ``0.7.0-3``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0.alpha7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bwa: ``>=0.7.17``
   :depends on fastani: ``>=1.31``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on minimap2: ``>=2.28``
   :depends on openblas: 
   :depends on python-dashing: 
   :depends on samtools: ``>=1.9``
   :depends on starcode: 
   :depends on strobealign: ``>=0.11.0``

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

    pixi global install coverm

to add into an existing workspace instead, run::

    pixi add coverm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coverm

Alternatively, to install into a new environment, run::

    conda create -n envname coverm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coverm:<tag>

(see `coverm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coverm| image:: https://img.shields.io/conda/dn/bioconda/coverm.svg?style=flat
   :target: https://anaconda.org/bioconda/coverm
   :alt:   (downloads)
.. |docker_coverm| image:: https://quay.io/repository/biocontainers/coverm/status
   :target: https://quay.io/repository/biocontainers/coverm
.. _`coverm/tags`: https://quay.io/repository/biocontainers/coverm?tab=tags


.. raw:: html

    <script>
        var package = "coverm";
        var versions = ["0.7.0","0.7.0","0.7.0","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coverm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coverm/README.html