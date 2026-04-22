:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgadem'
.. highlight: bash

bioconductor-rgadem
===================

.. conda:recipe:: bioconductor-rgadem
   :replaces_section_title:
   :noindex:

   de novo motif discovery

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rGADEM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgadem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgadem/meta.yaml>`_
   :links: biotools: :biotools:`rgadem`, doi: :doi:`10.1371/journal.pone.0016432`

   rGADEM is an efficient de novo motif discovery tool for large\-scale genomic sequence data. It is an open\-source R package\, which is based on the GADEM software.


.. conda:package:: bioconductor-rgadem

   |downloads_bioconductor-rgadem| |docker_bioconductor-rgadem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.54.0-1</code>,  <code>2.54.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-1</code>,  <code>2.46.0-0</code>,  <code>2.42.0-2</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  </span></summary>
      

      ``2.54.0-1``,  ``2.54.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.46.0-0``,  ``2.42.0-2``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-seqlogo: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-seqlogo: ``>=1.72.0,<1.73.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-rgadem

to add into an existing workspace instead, run::

    pixi add bioconductor-rgadem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgadem

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgadem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgadem:<tag>

(see `bioconductor-rgadem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgadem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgadem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgadem
   :alt:   (downloads)
.. |docker_bioconductor-rgadem| image:: https://quay.io/repository/biocontainers/bioconductor-rgadem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgadem
.. _`bioconductor-rgadem/tags`: https://quay.io/repository/biocontainers/bioconductor-rgadem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgadem";
        var versions = ["2.54.0","2.54.0","2.50.0","2.48.0","2.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgadem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgadem/README.html