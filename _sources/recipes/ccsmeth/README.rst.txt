:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccsmeth'
.. highlight: bash

ccsmeth
=======

.. conda:recipe:: ccsmeth
   :replaces_section_title:
   :noindex:

   Detecting DNA methylation from PacBio CCS read

   :homepage: https://github.com/PengNi/ccsmeth
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`ccsmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccsmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccsmeth/meta.yaml>`_

   


.. conda:package:: ccsmeth

   |downloads_ccsmeth| |docker_ccsmeth|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``

      

   
   :depends on bedtools: ``2.30.0.*``
   :depends on numpy: ``>=1.20.0``
   :depends on pbccs: ``>=6.4.0``
   :depends on pbmm2: ``>=1.9.0``
   :depends on pybedtools: ``>=0.8.1``
   :depends on pysam: ``>=0.19.0``
   :depends on pytabix: ``>=0.1``
   :depends on python: ``>=3.8``
   :depends on pytorch: ``>=1.2.0,<=2.1.0``
   :depends on samtools: ``>=1.12``
   :depends on scikit-learn: ``>=1.0.2``
   :depends on setuptools: 
   :depends on statsmodels: ``>=0.13.2``
   :depends on tqdm: ``>=4.64.0``

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

    pixi global install ccsmeth

to add into an existing workspace instead, run::

    pixi add ccsmeth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ccsmeth

Alternatively, to install into a new environment, run::

    conda create -n envname ccsmeth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ccsmeth:<tag>

(see `ccsmeth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ccsmeth| image:: https://img.shields.io/conda/dn/bioconda/ccsmeth.svg?style=flat
   :target: https://anaconda.org/bioconda/ccsmeth
   :alt:   (downloads)
.. |docker_ccsmeth| image:: https://quay.io/repository/biocontainers/ccsmeth/status
   :target: https://quay.io/repository/biocontainers/ccsmeth
.. _`ccsmeth/tags`: https://quay.io/repository/biocontainers/ccsmeth?tab=tags


.. raw:: html

    <script>
        var package = "ccsmeth";
        var versions = ["0.5.0","0.4.1","0.4.0","0.3.4","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccsmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccsmeth/README.html