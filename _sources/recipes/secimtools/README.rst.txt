:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'secimtools'
.. highlight: bash

secimtools
==========

.. conda:recipe:: secimtools
   :replaces_section_title:
   :noindex:

   Metabolomics tools from the SECIM project

   :homepage: https://github.com/secimTools/SECIMTools
   :license: MIT / MIT License
   :recipe: /`secimtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/secimtools/meta.yaml>`_

   suite of standalone and Galaxy tools for processing of metabolomics data.


.. conda:package:: secimtools

   |downloads_secimtools| |docker_secimtools|

   :versions:
      
      

      ``22.3.23-0``,  ``21.6.3-0``,  ``21.3.4.2-0``,  ``1.0.0-4``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-impute: 
   :depends on lxml: 
   :depends on matplotlib-base: 
   :depends on matplotlib-venn: 
   :depends on numpy: ``>=1.16``
   :depends on palettable: 
   :depends on pandas: 
   :depends on perl-vcftools-vcf: 
   :depends on pymc: 
   :depends on python: ``>=3.7``
   :depends on r-glmnet: 
   :depends on rpy2: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 

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

    pixi global install secimtools

to add into an existing workspace instead, run::

    pixi add secimtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install secimtools

Alternatively, to install into a new environment, run::

    conda create -n envname secimtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/secimtools:<tag>

(see `secimtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_secimtools| image:: https://img.shields.io/conda/dn/bioconda/secimtools.svg?style=flat
   :target: https://anaconda.org/bioconda/secimtools
   :alt:   (downloads)
.. |docker_secimtools| image:: https://quay.io/repository/biocontainers/secimtools/status
   :target: https://quay.io/repository/biocontainers/secimtools
.. _`secimtools/tags`: https://quay.io/repository/biocontainers/secimtools?tab=tags


.. raw:: html

    <script>
        var package = "secimtools";
        var versions = ["22.3.23","21.6.3","21.3.4.2","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/secimtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/secimtools/README.html