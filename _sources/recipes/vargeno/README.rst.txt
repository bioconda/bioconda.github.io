:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vargeno'
.. highlight: bash

vargeno
=======

.. conda:recipe:: vargeno
   :replaces_section_title:
   :noindex:

   Fast SNP genotyping tool for whole genome sequence data and large SNP database.

   :homepage: https://github.com/medvedevgroup/vargeno
   :license: MIT
   :recipe: /`vargeno <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vargeno>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vargeno/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty641`

   


.. conda:package:: vargeno

   |downloads_vargeno| |docker_vargeno|

   :versions:
      
      

      ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install vargeno

to add into an existing workspace instead, run::

    pixi add vargeno

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vargeno

Alternatively, to install into a new environment, run::

    conda create -n envname vargeno

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vargeno:<tag>

(see `vargeno/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vargeno| image:: https://img.shields.io/conda/dn/bioconda/vargeno.svg?style=flat
   :target: https://anaconda.org/bioconda/vargeno
   :alt:   (downloads)
.. |docker_vargeno| image:: https://quay.io/repository/biocontainers/vargeno/status
   :target: https://quay.io/repository/biocontainers/vargeno
.. _`vargeno/tags`: https://quay.io/repository/biocontainers/vargeno?tab=tags


.. raw:: html

    <script>
        var package = "vargeno";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vargeno/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vargeno/README.html