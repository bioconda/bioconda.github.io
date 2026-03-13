:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hubpub'
.. highlight: bash

bioconductor-hubpub
===================

.. conda:recipe:: bioconductor-hubpub
   :replaces_section_title:
   :noindex:

   Utilities to create and use Bioconductor Hubs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HubPub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hubpub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubpub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubpub/meta.yaml>`_

   HubPub provides users with functionality to help with the Bioconductor Hub structures. The package provides the ability to create a skeleton of a Hub style package that the user can then populate with the necessary information. There are also functions to help add resources to the Hub package metadata files as well as publish data to the Bioconductor S3 bucket.


.. conda:package:: bioconductor-hubpub

   |downloads_bioconductor-hubpub| |docker_bioconductor-hubpub|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocthis: ``>=1.20.0,<1.21.0``
   :depends on r-available: 
   :depends on r-aws.s3: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-dplyr: 
   :depends on r-fs: 
   :depends on r-usethis: 

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

    pixi global install bioconductor-hubpub

to add into an existing workspace instead, run::

    pixi add bioconductor-hubpub

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hubpub

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hubpub

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hubpub:<tag>

(see `bioconductor-hubpub/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hubpub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hubpub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hubpub
   :alt:   (downloads)
.. |docker_bioconductor-hubpub| image:: https://quay.io/repository/biocontainers/bioconductor-hubpub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hubpub
.. _`bioconductor-hubpub/tags`: https://quay.io/repository/biocontainers/bioconductor-hubpub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hubpub";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hubpub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hubpub/README.html