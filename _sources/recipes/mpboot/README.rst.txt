:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mpboot'
.. highlight: bash

mpboot
======

.. conda:recipe:: mpboot
   :replaces_section_title:
   :noindex:

   Fast phylogenetic maximum parsimony tree inference and bootstrap approximation.

   :homepage: https://github.com/diepthihoang/mpboot
   :documentation: http://www.cibiv.at/software/mpboot
   
   :license: GPL2 / GPL-2.0-only
   :recipe: /`mpboot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpboot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mpboot/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12862-018-1131-3`

   


.. conda:package:: mpboot

   |downloads_mpboot| |docker_mpboot|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install mpboot

to add into an existing workspace instead, run::

    pixi add mpboot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mpboot

Alternatively, to install into a new environment, run::

    conda create -n envname mpboot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mpboot:<tag>

(see `mpboot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mpboot| image:: https://img.shields.io/conda/dn/bioconda/mpboot.svg?style=flat
   :target: https://anaconda.org/bioconda/mpboot
   :alt:   (downloads)
.. |docker_mpboot| image:: https://quay.io/repository/biocontainers/mpboot/status
   :target: https://quay.io/repository/biocontainers/mpboot
.. _`mpboot/tags`: https://quay.io/repository/biocontainers/mpboot?tab=tags


.. raw:: html

    <script>
        var package = "mpboot";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mpboot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mpboot/README.html