:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locus_processing'
.. highlight: bash

locus_processing
================

.. conda:recipe:: locus_processing
   :replaces_section_title:
   :noindex:

   Tools for working with locus definition files

   :homepage: https://github.com/LUMC/locus_processing
   :license: MIT / MIT License
   :recipe: /`locus_processing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locus_processing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locus_processing/meta.yaml>`_

   


.. conda:package:: locus_processing

   |downloads_locus_processing| |docker_locus_processing|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends on click: ``>=6.7``
   :depends on marshmallow: ``2.13.5``
   :depends on python: ``>=3.6``
   :depends on pyyaml: ``>=3.12``
   :depends on requests: ``>=2.18.1``

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

    pixi global install locus_processing

to add into an existing workspace instead, run::

    pixi add locus_processing

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install locus_processing

Alternatively, to install into a new environment, run::

    conda create -n envname locus_processing

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/locus_processing:<tag>

(see `locus_processing/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_locus_processing| image:: https://img.shields.io/conda/dn/bioconda/locus_processing.svg?style=flat
   :target: https://anaconda.org/bioconda/locus_processing
   :alt:   (downloads)
.. |docker_locus_processing| image:: https://quay.io/repository/biocontainers/locus_processing/status
   :target: https://quay.io/repository/biocontainers/locus_processing
.. _`locus_processing/tags`: https://quay.io/repository/biocontainers/locus_processing?tab=tags


.. raw:: html

    <script>
        var package = "locus_processing";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locus_processing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locus_processing/README.html