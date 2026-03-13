:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsearch'
.. highlight: bash

vsearch
=======

.. conda:recipe:: vsearch
   :replaces_section_title:
   :noindex:

   A versatile open source tool for metagenomics \(USEARCH alternative\).

   :homepage: https://github.com/torognes/vsearch
   :documentation: https://torognes.github.io/vsearch
   
   :license: GPL3 / GPL-3.0-or-later OR BSD-2-Clause
   :recipe: /`vsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsearch/meta.yaml>`_
   :links: biotools: :biotools:`vsearch`, usegalaxy-eu: :usegalaxy-eu:`vsearch_search`, usegalaxy-eu: :usegalaxy-eu:`vsearch_sorting`, usegalaxy-eu: :usegalaxy-eu:`vsearch_chimera_detection`, usegalaxy-eu: :usegalaxy-eu:`vsearch_clustering`, usegalaxy-eu: :usegalaxy-eu:`vsearch_masking`, usegalaxy-eu: :usegalaxy-eu:`vsearch_alignment`, usegalaxy-eu: :usegalaxy-eu:`vsearch_dereplication`, usegalaxy-eu: :usegalaxy-eu:`vsearch_shuffling`, doi: :doi:`10.7717/peerj.2584`

   


.. conda:package:: vsearch

   |downloads_vsearch| |docker_vsearch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.30.5-0</code>,  <code>2.30.4-0</code>,  <code>2.30.3-0</code>,  <code>2.30.2-0</code>,  <code>2.30.1-0</code>,  <code>2.30.0-0</code>,  <code>2.29.4-0</code>,  <code>2.29.3-0</code>,  <code>2.29.2-1</code>,  </span></summary>
      

      ``2.30.5-0``,  ``2.30.4-0``,  ``2.30.3-0``,  ``2.30.2-0``,  ``2.30.1-0``,  ``2.30.0-0``,  ``2.29.4-0``,  ``2.29.3-0``,  ``2.29.2-1``,  ``2.29.2-0``,  ``2.29.1-1``,  ``2.29.1-0``,  ``2.29.0-0``,  ``2.28.1-1``,  ``2.28.1-0``,  ``2.27.1-0``,  ``2.27.0-1``,  ``2.27.0-0``,  ``2.26.1-0``,  ``2.26.0-0``,  ``2.25.0-0``,  ``2.24.0-0``,  ``2.23.0-0``,  ``2.22.1-2``,  ``2.22.1-1``,  ``2.22.1-0``,  ``2.21.2-0``,  ``2.21.1-1``,  ``2.21.1-0``,  ``2.21.0-0``,  ``2.20.1-0``,  ``2.20.0-0``,  ``2.19.0-0``,  ``2.18.0-0``,  ``2.17.1-0``,  ``2.17.0-1``,  ``2.17.0-0``,  ``2.16.0-0``,  ``2.15.2-1``,  ``2.15.2-0``,  ``2.15.1-0``,  ``2.15.0-0``,  ``2.14.2-0``,  ``2.14.1-0``,  ``2.14.0-0``,  ``2.13.7-0``,  ``2.13.6-0``,  ``2.13.4-4``,  ``2.13.4-0``,  ``2.13.3-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.11.1-0``,  ``2.10.4-1``,  ``2.10.4-0``,  ``2.10.3-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.5-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.0-0``,  ``1.11.1-0``,  ``1.10.2-0``,  ``1.9.7-0``,  ``1.9.5-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
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

    pixi global install vsearch

to add into an existing workspace instead, run::

    pixi add vsearch

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vsearch

Alternatively, to install into a new environment, run::

    conda create -n envname vsearch

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vsearch:<tag>

(see `vsearch/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vsearch| image:: https://img.shields.io/conda/dn/bioconda/vsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/vsearch
   :alt:   (downloads)
.. |docker_vsearch| image:: https://quay.io/repository/biocontainers/vsearch/status
   :target: https://quay.io/repository/biocontainers/vsearch
.. _`vsearch/tags`: https://quay.io/repository/biocontainers/vsearch?tab=tags


.. raw:: html

    <script>
        var package = "vsearch";
        var versions = ["2.30.5","2.30.4","2.30.3","2.30.2","2.30.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsearch/README.html