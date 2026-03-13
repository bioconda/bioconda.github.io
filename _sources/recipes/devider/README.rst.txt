:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'devider'
.. highlight: bash

devider
=======

.. conda:recipe:: devider
   :replaces_section_title:
   :noindex:

   Haplotyping small sequences from heterogeneous long\-read sequencing samples with a SNP\-encoded positional de Bruijn graphs.

   :homepage: https://github.com/bluenote-1577/devider
   :license: MIT
   :recipe: /`devider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/devider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/devider/meta.yaml>`_

   


.. conda:package:: devider

   |downloads_devider| |docker_devider|

   :versions:
      
      

      ``0.0.1-3``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on lofreq: ``>=2.1.5``
   :depends on minimap2: 
   :depends on pysam: ``>=0.16``
   :depends on python: 
   :depends on samtools: 
   :depends on tabix: 

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

    pixi global install devider

to add into an existing workspace instead, run::

    pixi add devider

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install devider

Alternatively, to install into a new environment, run::

    conda create -n envname devider

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/devider:<tag>

(see `devider/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_devider| image:: https://img.shields.io/conda/dn/bioconda/devider.svg?style=flat
   :target: https://anaconda.org/bioconda/devider
   :alt:   (downloads)
.. |docker_devider| image:: https://quay.io/repository/biocontainers/devider/status
   :target: https://quay.io/repository/biocontainers/devider
.. _`devider/tags`: https://quay.io/repository/biocontainers/devider?tab=tags


.. raw:: html

    <script>
        var package = "devider";
        var versions = ["0.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/devider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/devider/README.html