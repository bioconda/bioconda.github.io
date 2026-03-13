:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samblaster'
.. highlight: bash

samblaster
==========

.. conda:recipe:: samblaster
   :replaces_section_title:
   :noindex:

   Mark duplicates in and extract discordant and split reads from SAM files.

   :homepage: https://github.com/GregoryFaust/samblaster
   :documentation: https://github.com/GregoryFaust/samblaster/blob/v.0.1.26/README.md
   
   :license: MIT / MIT
   :recipe: /`samblaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samblaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samblaster/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu314`, biotools: :biotools:`samblaster`

   


.. conda:package:: samblaster

   |downloads_samblaster| |docker_samblaster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.26-7</code>,  <code>0.1.26-6</code>,  <code>0.1.26-5</code>,  <code>0.1.26-4</code>,  <code>0.1.26-3</code>,  <code>0.1.26-2</code>,  <code>0.1.26-1</code>,  <code>0.1.26-0</code>,  <code>0.1.25-0</code>,  </span></summary>
      

      ``0.1.26-7``,  ``0.1.26-6``,  ``0.1.26-5``,  ``0.1.26-4``,  ``0.1.26-3``,  ``0.1.26-2``,  ``0.1.26-1``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.24-3``,  ``0.1.24-2``,  ``0.1.24-1``,  ``0.1.24-0``,  ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.20-5``,  ``0.1.20-4``,  ``0.1.20-3``,  ``0.1.20-2``,  ``0.1.20-1``,  ``0.1.20-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install samblaster

to add into an existing workspace instead, run::

    pixi add samblaster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install samblaster

Alternatively, to install into a new environment, run::

    conda create -n envname samblaster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/samblaster:<tag>

(see `samblaster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_samblaster| image:: https://img.shields.io/conda/dn/bioconda/samblaster.svg?style=flat
   :target: https://anaconda.org/bioconda/samblaster
   :alt:   (downloads)
.. |docker_samblaster| image:: https://quay.io/repository/biocontainers/samblaster/status
   :target: https://quay.io/repository/biocontainers/samblaster
.. _`samblaster/tags`: https://quay.io/repository/biocontainers/samblaster?tab=tags


.. raw:: html

    <script>
        var package = "samblaster";
        var versions = ["0.1.26","0.1.26","0.1.26","0.1.26","0.1.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samblaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samblaster/README.html