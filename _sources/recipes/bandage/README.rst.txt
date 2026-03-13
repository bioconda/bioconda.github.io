:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandage'
.. highlight: bash

bandage
=======

.. conda:recipe:: bandage
   :replaces_section_title:
   :noindex:

   Bandage \- a Bioinformatics Application for Navigating De novo Assembly Graphs Easily.

   :homepage: https://github.com/rrwick/Bandage
   :documentation: https://rrwick.github.io/Bandage
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bandage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandage/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv383`, biotools: :biotools:`bandage`, usegalaxy-eu: :usegalaxy-eu:`bandage_image`, usegalaxy-eu: :usegalaxy-eu:`bandage_info`

   


.. conda:package:: bandage

   |downloads_bandage| |docker_bandage|

   :versions:
      
      

      ``0.9.0-0``,  ``0.8.1-4``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``

      

   
   :depends on fonts-conda-ecosystem: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on qt: ``>=5.15.2``
   :depends on xorg-libxrender: 

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

    pixi global install bandage

to add into an existing workspace instead, run::

    pixi add bandage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bandage

Alternatively, to install into a new environment, run::

    conda create -n envname bandage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bandage:<tag>

(see `bandage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bandage| image:: https://img.shields.io/conda/dn/bioconda/bandage.svg?style=flat
   :target: https://anaconda.org/bioconda/bandage
   :alt:   (downloads)
.. |docker_bandage| image:: https://quay.io/repository/biocontainers/bandage/status
   :target: https://quay.io/repository/biocontainers/bandage
.. _`bandage/tags`: https://quay.io/repository/biocontainers/bandage?tab=tags


.. raw:: html

    <script>
        var package = "bandage";
        var versions = ["0.9.0","0.8.1","0.8.1","0.8.1","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandage/README.html