:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'centroid_rna_package'
.. highlight: bash

centroid_rna_package
====================

.. conda:recipe:: centroid_rna_package
   :replaces_section_title:
   :noindex:

   Collection of RNA secondary structure prediction programs based on gamma\-centroid estimator \(Hamada et. al. 2009\)

   :homepage: https://github.com/satoken/centroid-rna-package
   :license: GPL-V2
   :recipe: /`centroid_rna_package <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centroid_rna_package>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/centroid_rna_package/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btn601`, doi: :doi:`10.1093/bioinformatics/btp228`, doi: :doi:`10.1093/nar/gkq792`

   


.. conda:package:: centroid_rna_package

   |downloads_centroid_rna_package| |docker_centroid_rna_package|

   :versions:
      
      

      ``0.0.16-1``,  ``0.0.16-0``,  ``0.0.15-0``

      

   
   :depends on viennarna: ``>=1.8``

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

    pixi global install centroid_rna_package

to add into an existing workspace instead, run::

    pixi add centroid_rna_package

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install centroid_rna_package

Alternatively, to install into a new environment, run::

    conda create -n envname centroid_rna_package

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/centroid_rna_package:<tag>

(see `centroid_rna_package/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_centroid_rna_package| image:: https://img.shields.io/conda/dn/bioconda/centroid_rna_package.svg?style=flat
   :target: https://anaconda.org/bioconda/centroid_rna_package
   :alt:   (downloads)
.. |docker_centroid_rna_package| image:: https://quay.io/repository/biocontainers/centroid_rna_package/status
   :target: https://quay.io/repository/biocontainers/centroid_rna_package
.. _`centroid_rna_package/tags`: https://quay.io/repository/biocontainers/centroid_rna_package?tab=tags


.. raw:: html

    <script>
        var package = "centroid_rna_package";
        var versions = ["0.0.16","0.0.16","0.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/centroid_rna_package/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/centroid_rna_package/README.html