:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adverscarial'
.. highlight: bash

bioconductor-adverscarial
=========================

.. conda:recipe:: bioconductor-adverscarial
   :replaces_section_title:
   :noindex:

   adverSCarial\, generate and analyze the vulnerability of scRNA\-seq classifier to adversarial attacks

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/adverSCarial.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-adverscarial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adverscarial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adverscarial/meta.yaml>`_

   adverSCarial is an R Package designed for generating and analyzing the vulnerability of scRNA\-seq classifiers to adversarial attacks. The package is versatile and provides a format for integrating any type of classifier. It offers functions for studying and generating two types of attacks\, single gene attack and max change attack. The single\-gene attack involves making a small modification to the input to alter the classification. The max\-change attack involves making a large modification to the input without changing its classification. The package provides a comprehensive solution for evaluating the robustness of scRNA\-seq classifiers against adversarial attacks.


.. conda:package:: bioconductor-adverscarial

   |downloads_bioconductor-adverscarial| |docker_bioconductor-adverscarial|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gtools: 

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

    pixi global install bioconductor-adverscarial

to add into an existing workspace instead, run::

    pixi add bioconductor-adverscarial

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-adverscarial

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-adverscarial

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-adverscarial:<tag>

(see `bioconductor-adverscarial/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-adverscarial| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adverscarial.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adverscarial
   :alt:   (downloads)
.. |docker_bioconductor-adverscarial| image:: https://quay.io/repository/biocontainers/bioconductor-adverscarial/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adverscarial
.. _`bioconductor-adverscarial/tags`: https://quay.io/repository/biocontainers/bioconductor-adverscarial?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adverscarial";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adverscarial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adverscarial/README.html