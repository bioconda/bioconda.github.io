:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atol-reference-data-lookups'
.. highlight: bash

atol-reference-data-lookups
===========================

.. conda:recipe:: atol-reference-data-lookups
   :replaces_section_title:
   :noindex:

   Look up reference datasets by NCBI TaxId.

   :homepage: https://github.com/TomHarrop/atol-reference-data-lookups
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`atol-reference-data-lookups <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-reference-data-lookups>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atol-reference-data-lookups/meta.yaml>`_

   


.. conda:package:: atol-reference-data-lookups

   |downloads_atol-reference-data-lookups| |docker_atol-reference-data-lookups|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on python: ``>=3.13,<3.15``
   :depends on scikit-bio: ``>=0.6.3``
   :depends on snakemake: ``>=9.16.3,<10``

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

    pixi global install atol-reference-data-lookups

to add into an existing workspace instead, run::

    pixi add atol-reference-data-lookups

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atol-reference-data-lookups

Alternatively, to install into a new environment, run::

    conda create -n envname atol-reference-data-lookups

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atol-reference-data-lookups:<tag>

(see `atol-reference-data-lookups/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atol-reference-data-lookups| image:: https://img.shields.io/conda/dn/bioconda/atol-reference-data-lookups.svg?style=flat
   :target: https://anaconda.org/bioconda/atol-reference-data-lookups
   :alt:   (downloads)
.. |docker_atol-reference-data-lookups| image:: https://quay.io/repository/biocontainers/atol-reference-data-lookups/status
   :target: https://quay.io/repository/biocontainers/atol-reference-data-lookups
.. _`atol-reference-data-lookups/tags`: https://quay.io/repository/biocontainers/atol-reference-data-lookups?tab=tags


.. raw:: html

    <script>
        var package = "atol-reference-data-lookups";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atol-reference-data-lookups/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atol-reference-data-lookups/README.html