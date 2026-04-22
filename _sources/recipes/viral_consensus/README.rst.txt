:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viral_consensus'
.. highlight: bash

viral_consensus
===============

.. conda:recipe:: viral_consensus
   :replaces_section_title:
   :noindex:

   Fast viral consensus genome reconstruction.

   :homepage: https://niema.net/ViralConsensus
   :developer docs: https://github.com/niemasd/ViralConsensus
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`viral_consensus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_consensus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viral_consensus/meta.yaml>`_
   :links: biotools: :biotools:`viral_consensus`, doi: :doi:`10.1093/bioinformatics/btad317`, doi: :doi:`10.1093/bioinformatics/btae018`

   


.. conda:package:: viral_consensus

   |downloads_viral_consensus| |docker_viral_consensus|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.23,<1.24.0a0``
   :depends on libcurl: ``>=8.18.0,<9.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=13``
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

    pixi global install viral_consensus

to add into an existing workspace instead, run::

    pixi add viral_consensus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install viral_consensus

Alternatively, to install into a new environment, run::

    conda create -n envname viral_consensus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/viral_consensus:<tag>

(see `viral_consensus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_viral_consensus| image:: https://img.shields.io/conda/dn/bioconda/viral_consensus.svg?style=flat
   :target: https://anaconda.org/bioconda/viral_consensus
   :alt:   (downloads)
.. |docker_viral_consensus| image:: https://quay.io/repository/biocontainers/viral_consensus/status
   :target: https://quay.io/repository/biocontainers/viral_consensus
.. _`viral_consensus/tags`: https://quay.io/repository/biocontainers/viral_consensus?tab=tags


.. raw:: html

    <script>
        var package = "viral_consensus";
        var versions = ["1.0.1","1.0.0","0.0.6","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viral_consensus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viral_consensus/README.html