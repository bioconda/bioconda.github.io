:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapointfinder'
.. highlight: bash

metapointfinder
===============

.. conda:recipe:: metapointfinder
   :replaces_section_title:
   :noindex:

   MetaPointFinder is a tool for detecting and scoring resistance\- associated point mutations directly from long\-read and short\-read metagenomics sequencing data\, using the AMRFinder database as reference.

   :homepage: https://github.com/aldertzomer/metapointfinder
   :license: Apache / Apache-2.0
   :recipe: /`metapointfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapointfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapointfinder/meta.yaml>`_

   


.. conda:package:: metapointfinder

   |downloads_metapointfinder| |docker_metapointfinder|

   :versions:
      
      

      ``1.01-0``

      

   
   :depends on bioconductor-biostrings: ``2.74.0.*``
   :depends on bioconductor-pwalign: ``1.2.0.*``
   :depends on diamond: ``2.1.14.*``
   :depends on kma: ``1.4.15.*``
   :depends on python: ``>=3.14,<3.15.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on wget: ``1.21.4.*``

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

    pixi global install metapointfinder

to add into an existing workspace instead, run::

    pixi add metapointfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metapointfinder

Alternatively, to install into a new environment, run::

    conda create -n envname metapointfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metapointfinder:<tag>

(see `metapointfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metapointfinder| image:: https://img.shields.io/conda/dn/bioconda/metapointfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/metapointfinder
   :alt:   (downloads)
.. |docker_metapointfinder| image:: https://quay.io/repository/biocontainers/metapointfinder/status
   :target: https://quay.io/repository/biocontainers/metapointfinder
.. _`metapointfinder/tags`: https://quay.io/repository/biocontainers/metapointfinder?tab=tags


.. raw:: html

    <script>
        var package = "metapointfinder";
        var versions = ["1.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapointfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapointfinder/README.html