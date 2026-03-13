:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-somascan.db'
.. highlight: bash

bioconductor-somascan.db
========================

.. conda:recipe:: bioconductor-somascan.db
   :replaces_section_title:
   :noindex:

   Somalogic SomaScan Annotation Data

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/SomaScan.db.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-somascan.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somascan.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-somascan.db/meta.yaml>`_

   An R package providing extended biological annotations for the SomaScan Assay\, a proteomics platform developed by SomaLogic Operating Co.\, Inc. The annotations in this package were assembled using data from public repositories. For more information about the SomaScan assay and its data\, please reference the \'SomaLogic\/SomaLogic\-Data\' GitHub repository.


.. conda:package:: bioconductor-somascan.db

   |downloads_bioconductor-somascan.db| |docker_bioconductor-somascan.db|

   :versions:
      
      

      ``0.99.10-1``,  ``0.99.10-0``,  ``0.99.7-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 

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

    pixi global install bioconductor-somascan.db

to add into an existing workspace instead, run::

    pixi add bioconductor-somascan.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-somascan.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-somascan.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-somascan.db:<tag>

(see `bioconductor-somascan.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-somascan.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-somascan.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-somascan.db
   :alt:   (downloads)
.. |docker_bioconductor-somascan.db| image:: https://quay.io/repository/biocontainers/bioconductor-somascan.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-somascan.db
.. _`bioconductor-somascan.db/tags`: https://quay.io/repository/biocontainers/bioconductor-somascan.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-somascan.db";
        var versions = ["0.99.10","0.99.10","0.99.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-somascan.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-somascan.db/README.html