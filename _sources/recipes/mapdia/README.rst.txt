:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapdia'
.. highlight: bash

mapdia
======

.. conda:recipe:: mapdia
   :replaces_section_title:
   :noindex:

   Performs essential data preprocessing\, including novel retention time\-based normalization method and a sequence of peptide\/fragment selection steps\, and more importantly\, hierarchical model\-based statistical significance analysis for multi\-group comparisons under representative experimental designs.

   :homepage: https://sourceforge.net/projects/mapdia
   :license: file
   :recipe: /`mapdia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapdia/meta.yaml>`_
   :links: biotools: :biotools:`MAPDIA`, doi: :doi:`10.1016/j.jprot.2015.09.013`

   


.. conda:package:: mapdia

   |downloads_mapdia| |docker_mapdia|

   :versions:
      
      

      ``3.1.0-7``,  ``3.1.0-6``,  ``3.1.0-5``,  ``3.1.0-4``,  ``3.1.0-3``,  ``3.1.0-2``,  ``3.1.0-1``,  ``3.1.0-0``,  ``1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install mapdia

to add into an existing workspace instead, run::

    pixi add mapdia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mapdia

Alternatively, to install into a new environment, run::

    conda create -n envname mapdia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mapdia:<tag>

(see `mapdia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mapdia| image:: https://img.shields.io/conda/dn/bioconda/mapdia.svg?style=flat
   :target: https://anaconda.org/bioconda/mapdia
   :alt:   (downloads)
.. |docker_mapdia| image:: https://quay.io/repository/biocontainers/mapdia/status
   :target: https://quay.io/repository/biocontainers/mapdia
.. _`mapdia/tags`: https://quay.io/repository/biocontainers/mapdia?tab=tags


.. raw:: html

    <script>
        var package = "mapdia";
        var versions = ["3.1.0","3.1.0","3.1.0","3.1.0","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapdia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapdia/README.html