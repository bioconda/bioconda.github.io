:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svdss'
.. highlight: bash

svdss
=====

.. conda:recipe:: svdss
   :replaces_section_title:
   :noindex:

   Structural Variant Discovery from Sample\-specific Strings.

   :homepage: https://github.com/Parsoa/SVDSS
   :documentation: https://github.com/Parsoa/SVDSS/blob/v2.1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`svdss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svdss/meta.yaml>`_
   :links: biotools: :biotools:`svdss`, doi: :doi:`10.1038/s41592-022-01674-1`

   


.. conda:package:: svdss

   |downloads_svdss| |docker_svdss|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bcftools: ``>=1.9``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on kanpig: 
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on samtools: ``>=1.9``

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

    pixi global install svdss

to add into an existing workspace instead, run::

    pixi add svdss

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svdss

Alternatively, to install into a new environment, run::

    conda create -n envname svdss

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svdss:<tag>

(see `svdss/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svdss| image:: https://img.shields.io/conda/dn/bioconda/svdss.svg?style=flat
   :target: https://anaconda.org/bioconda/svdss
   :alt:   (downloads)
.. |docker_svdss| image:: https://quay.io/repository/biocontainers/svdss/status
   :target: https://quay.io/repository/biocontainers/svdss
.. _`svdss/tags`: https://quay.io/repository/biocontainers/svdss?tab=tags


.. raw:: html

    <script>
        var package = "svdss";
        var versions = ["2.1.0","2.0.0","2.0.0","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svdss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svdss/README.html