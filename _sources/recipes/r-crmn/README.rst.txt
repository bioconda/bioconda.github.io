:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-crmn'
.. highlight: bash

r-crmn
======

.. conda:recipe:: r-crmn
   :replaces_section_title:
   :noindex:

   Implements the Cross\-contribution Compensating Multiple standard Normalization \(CCMN\) method described in Redestig et al. \(2009\) Analytical Chemistry \<doi\:10.1021\/ac901143w\> and other normalization algorithms.

   :homepage: https://github.com/hredestig/crmn
   :license: GPL3 / GPL-3
   :recipe: /`r-crmn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crmn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crmn/meta.yaml>`_

   


.. conda:package:: r-crmn

   |downloads_r-crmn| |docker_r-crmn|

   :versions:
      
      

      ``0.0.21-6``,  ``0.0.21-5``,  ``0.0.21-4``,  ``0.0.21-3``,  ``0.0.21-2``,  ``0.0.21-1``,  ``0.0.21-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on bioconductor-pcamethods: ``>=1.56.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install r-crmn

to add into an existing workspace instead, run::

    pixi add r-crmn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-crmn

Alternatively, to install into a new environment, run::

    conda create -n envname r-crmn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-crmn:<tag>

(see `r-crmn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-crmn| image:: https://img.shields.io/conda/dn/bioconda/r-crmn.svg?style=flat
   :target: https://anaconda.org/bioconda/r-crmn
   :alt:   (downloads)
.. |docker_r-crmn| image:: https://quay.io/repository/biocontainers/r-crmn/status
   :target: https://quay.io/repository/biocontainers/r-crmn
.. _`r-crmn/tags`: https://quay.io/repository/biocontainers/r-crmn?tab=tags


.. raw:: html

    <script>
        var package = "r-crmn";
        var versions = ["0.0.21","0.0.21","0.0.21","0.0.21","0.0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-crmn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-crmn/README.html