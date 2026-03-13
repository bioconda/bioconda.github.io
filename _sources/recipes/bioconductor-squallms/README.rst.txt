:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-squallms'
.. highlight: bash

bioconductor-squallms
=====================

.. conda:recipe:: bioconductor-squallms
   :replaces_section_title:
   :noindex:

   Speedy quality assurance via lasso labeling for LC\-MS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/squallms.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-squallms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squallms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-squallms/meta.yaml>`_

   squallms is a Bioconductor R package that implements a \"semi\-labeled\" approach to untargeted mass spectrometry data. It pulls in raw data from mass\-spec files to calculate several metrics that are then used to label MS features in bulk as high or low quality. These metrics of peak quality are then passed to a simple logistic model that produces a fully\-labeled dataset suitable for downstream analysis.


.. conda:package:: bioconductor-squallms

   |downloads_bioconductor-squallms| |docker_bioconductor-squallms|

   :versions:
      
      

      

      

   

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

    pixi global install bioconductor-squallms

to add into an existing workspace instead, run::

    pixi add bioconductor-squallms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-squallms

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-squallms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-squallms:<tag>

(see `bioconductor-squallms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-squallms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-squallms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-squallms
   :alt:   (downloads)
.. |docker_bioconductor-squallms| image:: https://quay.io/repository/biocontainers/bioconductor-squallms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-squallms
.. _`bioconductor-squallms/tags`: https://quay.io/repository/biocontainers/bioconductor-squallms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-squallms";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-squallms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-squallms/README.html