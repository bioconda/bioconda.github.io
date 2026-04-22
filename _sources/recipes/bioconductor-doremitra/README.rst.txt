:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-doremitra'
.. highlight: bash

bioconductor-doremitra
======================

.. conda:recipe:: bioconductor-doremitra
   :replaces_section_title:
   :noindex:

   Orchestrating Blood Radiation Transcriptomic Data

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/DoReMiTra.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-doremitra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doremitra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-doremitra/meta.yaml>`_

   DoReMiTra is an R data package providing access to curated transcriptomic datasets related to blood radiation\, with a focus on neutron\, x\-ray\, and gamma ray studies. It is designed to facilitate radiation biology research and support data exploration and reproducibility in radiation transcriptomics. All datasets are provided as SummarizedExperiment objects\, allowing seamless integration with the Bioconductor ecosystem.


.. conda:package:: bioconductor-doremitra

   |downloads_bioconductor-doremitra| |docker_bioconductor-doremitra|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-glue: 

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

    pixi global install bioconductor-doremitra

to add into an existing workspace instead, run::

    pixi add bioconductor-doremitra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-doremitra

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-doremitra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-doremitra:<tag>

(see `bioconductor-doremitra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-doremitra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-doremitra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-doremitra
   :alt:   (downloads)
.. |docker_bioconductor-doremitra| image:: https://quay.io/repository/biocontainers/bioconductor-doremitra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-doremitra
.. _`bioconductor-doremitra/tags`: https://quay.io/repository/biocontainers/bioconductor-doremitra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-doremitra";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-doremitra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-doremitra/README.html