:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scspectra'
.. highlight: bash

scspectra
=========

.. conda:recipe:: scspectra
   :replaces_section_title:
   :noindex:

   Supervised discovery of interpretable gene programs from single\-cell data.

   :homepage: https://github.com/dpeerlab/spectra
   :license: MIT / MIT
   :recipe: /`scspectra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scspectra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scspectra/meta.yaml>`_

   


.. conda:package:: scspectra

   |downloads_scspectra| |docker_scspectra|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends on numpy: ``>=2.0.0,<3.0.0``
   :depends on opt-einsum: ``>=3.3.0``
   :depends on pandas: ``>=2.0.0,<3.0.0``
   :depends on python: ``>=3.8``
   :depends on pytorch: ``>=2.0.0,<3.0.0``
   :depends on pyvis: ``>=0.1.9,<0.2.0``
   :depends on scanpy: ``>=1.8.2``
   :depends on scipy: ``>=1.7.3``
   :depends on tqdm: ``>=4.62.3``

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

    pixi global install scspectra

to add into an existing workspace instead, run::

    pixi add scspectra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scspectra

Alternatively, to install into a new environment, run::

    conda create -n envname scspectra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scspectra:<tag>

(see `scspectra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scspectra| image:: https://img.shields.io/conda/dn/bioconda/scspectra.svg?style=flat
   :target: https://anaconda.org/bioconda/scspectra
   :alt:   (downloads)
.. |docker_scspectra| image:: https://quay.io/repository/biocontainers/scspectra/status
   :target: https://quay.io/repository/biocontainers/scspectra
.. _`scspectra/tags`: https://quay.io/repository/biocontainers/scspectra?tab=tags


.. raw:: html

    <script>
        var package = "scspectra";
        var versions = ["0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scspectra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scspectra/README.html