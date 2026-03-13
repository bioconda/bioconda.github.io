:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-koinar'
.. highlight: bash

bioconductor-koinar
===================

.. conda:recipe:: bioconductor-koinar
   :replaces_section_title:
   :noindex:

   KoinaR \- Remote machine learning inference using Koina

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/koinar.html
   :license: Apache License 2.0
   :recipe: /`bioconductor-koinar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-koinar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-koinar/meta.yaml>`_

   A client to simplify fetching predictions from the Koina web service. Koina is a model repository enabling the remote execution of models. Predictions are generated as a response to HTTP\/S requests\, the standard protocol used for nearly all web traffic.


.. conda:package:: bioconductor-koinar

   |downloads_bioconductor-koinar| |docker_bioconductor-koinar|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr: 
   :depends on r-jsonlite: 

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

    pixi global install bioconductor-koinar

to add into an existing workspace instead, run::

    pixi add bioconductor-koinar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-koinar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-koinar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-koinar:<tag>

(see `bioconductor-koinar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-koinar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-koinar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-koinar
   :alt:   (downloads)
.. |docker_bioconductor-koinar| image:: https://quay.io/repository/biocontainers/bioconductor-koinar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-koinar
.. _`bioconductor-koinar/tags`: https://quay.io/repository/biocontainers/bioconductor-koinar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-koinar";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-koinar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-koinar/README.html