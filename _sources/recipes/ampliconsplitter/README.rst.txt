:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampliconsplitter'
.. highlight: bash

ampliconsplitter
================

.. conda:recipe:: ampliconsplitter
   :replaces_section_title:
   :noindex:

   Split highly similar collapsed amplicons to obtain all amplicons from a sample.

   :homepage: https://github.com/RolandFaure/AmpliconSplitter
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ampliconsplitter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsplitter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconsplitter/meta.yaml>`_

   


.. conda:package:: ampliconsplitter

   |downloads_ampliconsplitter| |docker_ampliconsplitter|

   :versions:
      
      

      ``1.9.22-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on minigraph: ``>=0.20``
   :depends on minimap2: 
   :depends on numpy: 
   :depends on python: 
   :depends on racon: 
   :depends on raven-assembler: 
   :depends on samtools: ``>=1.16``
   :depends on scipy: 

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

    pixi global install ampliconsplitter

to add into an existing workspace instead, run::

    pixi add ampliconsplitter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ampliconsplitter

Alternatively, to install into a new environment, run::

    conda create -n envname ampliconsplitter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ampliconsplitter:<tag>

(see `ampliconsplitter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ampliconsplitter| image:: https://img.shields.io/conda/dn/bioconda/ampliconsplitter.svg?style=flat
   :target: https://anaconda.org/bioconda/ampliconsplitter
   :alt:   (downloads)
.. |docker_ampliconsplitter| image:: https://quay.io/repository/biocontainers/ampliconsplitter/status
   :target: https://quay.io/repository/biocontainers/ampliconsplitter
.. _`ampliconsplitter/tags`: https://quay.io/repository/biocontainers/ampliconsplitter?tab=tags


.. raw:: html

    <script>
        var package = "ampliconsplitter";
        var versions = ["1.9.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampliconsplitter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampliconsplitter/README.html