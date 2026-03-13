:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylonium'
.. highlight: bash

phylonium
=========

.. conda:recipe:: phylonium
   :replaces_section_title:
   :noindex:

   Fast estimation of evolutionary distances from similar genomes

   :homepage: https://github.com/evolbioinf/phylonium
   :license: GPL-3.0-or-later
   :recipe: /`phylonium <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylonium>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylonium/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz903`

   


.. conda:package:: phylonium

   |downloads_phylonium| |docker_phylonium|

   :versions:
      
      

      ``1.7-0``

      

   
   :depends on libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

   :additional platforms:
      

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

    pixi global install phylonium

to add into an existing workspace instead, run::

    pixi add phylonium

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylonium

Alternatively, to install into a new environment, run::

    conda create -n envname phylonium

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylonium:<tag>

(see `phylonium/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylonium| image:: https://img.shields.io/conda/dn/bioconda/phylonium.svg?style=flat
   :target: https://anaconda.org/bioconda/phylonium
   :alt:   (downloads)
.. |docker_phylonium| image:: https://quay.io/repository/biocontainers/phylonium/status
   :target: https://quay.io/repository/biocontainers/phylonium
.. _`phylonium/tags`: https://quay.io/repository/biocontainers/phylonium?tab=tags


.. raw:: html

    <script>
        var package = "phylonium";
        var versions = ["1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylonium/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylonium/README.html