:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanorama'
.. highlight: bash

scanorama
=========

.. conda:recipe:: scanorama
   :replaces_section_title:
   :noindex:

   Panoramic stitching of heterogeneous single\-cell transcriptomic data

   :homepage: https://github.com/brianhie/scanorama/
   :license: MIT / MIT
   :recipe: /`scanorama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanorama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanorama/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-019-0113-3`

   


.. conda:package:: scanorama

   |downloads_scanorama| |docker_scanorama|

   :versions:
      
      

      ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.1-0``,  ``1.7-0``,  ``1.6-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5-0``

      

   
   :depends on fbpca: ``>=1.0``
   :depends on geosketch: ``>=1``
   :depends on intervaltree: ``>=3.1.0``
   :depends on matplotlib-base: ``>=2.0.2``
   :depends on numpy: ``>=1.12``
   :depends on python: ``>=3.6``
   :depends on python-annoy: ``>=1.11.5``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1``

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

    pixi global install scanorama

to add into an existing workspace instead, run::

    pixi add scanorama

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scanorama

Alternatively, to install into a new environment, run::

    conda create -n envname scanorama

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scanorama:<tag>

(see `scanorama/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scanorama| image:: https://img.shields.io/conda/dn/bioconda/scanorama.svg?style=flat
   :target: https://anaconda.org/bioconda/scanorama
   :alt:   (downloads)
.. |docker_scanorama| image:: https://quay.io/repository/biocontainers/scanorama/status
   :target: https://quay.io/repository/biocontainers/scanorama
.. _`scanorama/tags`: https://quay.io/repository/biocontainers/scanorama?tab=tags


.. raw:: html

    <script>
        var package = "scanorama";
        var versions = ["1.7.4","1.7.3","1.7.1","1.7","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanorama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanorama/README.html