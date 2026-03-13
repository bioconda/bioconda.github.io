:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msexperiment'
.. highlight: bash

bioconductor-msexperiment
=========================

.. conda:recipe:: bioconductor-msexperiment
   :replaces_section_title:
   :noindex:

   Infrastructure for Mass Spectrometry Experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsExperiment.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msexperiment/meta.yaml>`_

   Infrastructure to store and manage all aspects related to a complete proteomics or metabolomics mass spectrometry \(MS\) experiment. The MsExperiment package provides light\-weight and flexible containers for MS experiments building on the new MS infrastructure provided by the Spectra\, QFeatures and related packages. Along with raw data representations\, links to original data files and sample annotations\, additional metadata or annotations can also be stored within the MsExperiment container. To guarantee maximum flexibility only minimal constraints are put on the type and content of the data within the containers.


.. conda:package:: bioconductor-msexperiment

   |downloads_bioconductor-msexperiment| |docker_bioconductor-msexperiment|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-protgenerics: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-qfeatures: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-msexperiment

to add into an existing workspace instead, run::

    pixi add bioconductor-msexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msexperiment:<tag>

(see `bioconductor-msexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msexperiment
   :alt:   (downloads)
.. |docker_bioconductor-msexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-msexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msexperiment
.. _`bioconductor-msexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-msexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msexperiment";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msexperiment/README.html