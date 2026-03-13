:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cctyper'
.. highlight: bash

cctyper
=======

.. conda:recipe:: cctyper
   :replaces_section_title:
   :noindex:

   CRISPRCasTyper\: Automatic detection and subtyping of CRISPR\-Cas operons

   :homepage: https://github.com/Russel88/CRISPRCasTyper
   :license: MIT
   :recipe: /`cctyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cctyper/meta.yaml>`_
   :links: doi: :doi:`10.1089/crispr.2020.0059`

   


.. conda:package:: cctyper

   |downloads_cctyper| |docker_cctyper|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``

      

   
   :depends on biopython: ``>=1.78,<=1.79``
   :depends on blast: ``>=2.5,<3``
   :depends on cairosvg: 
   :depends on drawsvg: ``>=1.8.0,<2``
   :depends on grep: 
   :depends on hmmer: ``>=3.0,<4``
   :depends on imageio: 
   :depends on libxgboost: ``>=1.7,<2``
   :depends on minced: ``>=0.4.2,<0.5``
   :depends on multiprocess: ``>=0.70.14,<=0.70.15``
   :depends on numpy: ``>=1.16,<=1.24.3``
   :depends on pandas: ``>=1.3,<=2.0.3``
   :depends on prodigal: ``>=2.0,<=2.6.2``
   :depends on py-xgboost: ``>=1.4,<2``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``>=1.1.3,<=1.3.0``
   :depends on scipy: ``>=1,<=1.10.1``
   :depends on sed: 
   :depends on tqdm: ``>=4.64.1,<=4.66.5``

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

    pixi global install cctyper

to add into an existing workspace instead, run::

    pixi add cctyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cctyper

Alternatively, to install into a new environment, run::

    conda create -n envname cctyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cctyper:<tag>

(see `cctyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cctyper| image:: https://img.shields.io/conda/dn/bioconda/cctyper.svg?style=flat
   :target: https://anaconda.org/bioconda/cctyper
   :alt:   (downloads)
.. |docker_cctyper| image:: https://quay.io/repository/biocontainers/cctyper/status
   :target: https://quay.io/repository/biocontainers/cctyper
.. _`cctyper/tags`: https://quay.io/repository/biocontainers/cctyper?tab=tags


.. raw:: html

    <script>
        var package = "cctyper";
        var versions = ["1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cctyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cctyper/README.html