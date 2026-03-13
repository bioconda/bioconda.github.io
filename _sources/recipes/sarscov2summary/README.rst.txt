:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sarscov2summary'
.. highlight: bash

sarscov2summary
===============

.. conda:recipe:: sarscov2summary
   :replaces_section_title:
   :noindex:

   Formatter for Galaxy SARS\-CoV2 Selection Analysis Workflow

   :homepage: https://github.com/nickeener/sarscov2formatter
   :documentation: https://github.com/nickeener/sarscov2formatter/README.md
   
   :license: OTHER / Academic Free (AFL)
   :recipe: /`sarscov2summary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sarscov2summary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sarscov2summary/meta.yaml>`_

   


.. conda:package:: sarscov2summary

   |downloads_sarscov2summary| |docker_sarscov2summary|

   :versions:
      
      

      ``0.5-1``,  ``0.5-0``

      

   
   :depends on biopython: 
   :depends on python: ``>=3.6``

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

    pixi global install sarscov2summary

to add into an existing workspace instead, run::

    pixi add sarscov2summary

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sarscov2summary

Alternatively, to install into a new environment, run::

    conda create -n envname sarscov2summary

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sarscov2summary:<tag>

(see `sarscov2summary/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sarscov2summary| image:: https://img.shields.io/conda/dn/bioconda/sarscov2summary.svg?style=flat
   :target: https://anaconda.org/bioconda/sarscov2summary
   :alt:   (downloads)
.. |docker_sarscov2summary| image:: https://quay.io/repository/biocontainers/sarscov2summary/status
   :target: https://quay.io/repository/biocontainers/sarscov2summary
.. _`sarscov2summary/tags`: https://quay.io/repository/biocontainers/sarscov2summary?tab=tags


.. raw:: html

    <script>
        var package = "sarscov2summary";
        var versions = ["0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sarscov2summary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sarscov2summary/README.html