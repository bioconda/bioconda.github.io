:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msdatahub'
.. highlight: bash

bioconductor-msdatahub
======================

.. conda:recipe:: bioconductor-msdatahub
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data on ExperimentHub

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MsDataHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msdatahub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdatahub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msdatahub/meta.yaml>`_

   The MsDataHub package uses the ExperimentHub infrastructure to distribute raw mass spectrometry data files\, peptide spectrum matches or quantitative data from proteomics and metabolomics experiments.


.. conda:package:: bioconductor-msdatahub

   |downloads_bioconductor-msdatahub| |docker_bioconductor-msdatahub|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-msdatahub

to add into an existing workspace instead, run::

    pixi add bioconductor-msdatahub

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msdatahub

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msdatahub

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msdatahub:<tag>

(see `bioconductor-msdatahub/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msdatahub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msdatahub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msdatahub
   :alt:   (downloads)
.. |docker_bioconductor-msdatahub| image:: https://quay.io/repository/biocontainers/bioconductor-msdatahub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msdatahub
.. _`bioconductor-msdatahub/tags`: https://quay.io/repository/biocontainers/bioconductor-msdatahub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msdatahub";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msdatahub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msdatahub/README.html