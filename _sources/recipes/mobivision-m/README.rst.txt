:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mobivision-m'
.. highlight: bash

mobivision-m
============

.. conda:recipe:: mobivision-m
   :replaces_section_title:
   :noindex:

   MobiVision\-M is a linux based software design specifically for single\-microbe RNA sequencing analysis.

   :homepage: https://github.com/Bicyclecardcn/MobiVision-M
   :license: APACHE / Apache-2.0
   :recipe: /`mobivision-m <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobivision-m>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mobivision-m/meta.yaml>`_

   


.. conda:package:: mobivision-m

   |downloads_mobivision-m| |docker_mobivision-m|

   :versions:
      
      

      ``1.3.2-0``

      

   
   :depends on cutadapt: ``3.5``
   :depends on fastp: 
   :depends on fastqc: 
   :depends on leidenalg: 
   :depends on loguru: 
   :depends on louvain: 
   :depends on mako: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.8,<3.9.0a0``
   :depends on rtoml: 
   :depends on samtools: ``1.12``
   :depends on scanpy: ``<=1.9.8``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on star: ``2.7.10b``
   :depends on structlog: 

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

    pixi global install mobivision-m

to add into an existing workspace instead, run::

    pixi add mobivision-m

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mobivision-m

Alternatively, to install into a new environment, run::

    conda create -n envname mobivision-m

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mobivision-m:<tag>

(see `mobivision-m/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mobivision-m| image:: https://img.shields.io/conda/dn/bioconda/mobivision-m.svg?style=flat
   :target: https://anaconda.org/bioconda/mobivision-m
   :alt:   (downloads)
.. |docker_mobivision-m| image:: https://quay.io/repository/biocontainers/mobivision-m/status
   :target: https://quay.io/repository/biocontainers/mobivision-m
.. _`mobivision-m/tags`: https://quay.io/repository/biocontainers/mobivision-m?tab=tags


.. raw:: html

    <script>
        var package = "mobivision-m";
        var versions = ["1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mobivision-m/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mobivision-m/README.html