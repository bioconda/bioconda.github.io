:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cov-lineages'
.. highlight: bash

cov-lineages
============

.. conda:recipe:: cov-lineages
   :replaces_section_title:
   :noindex:

   A dynamic nomenclature proposal for SARS\-CoV\-2 to assist genomic epidemiology

   :homepage: https://github.com/cov-lineages/lineages
   :license: GPL3 / GPL-3.0
   :recipe: /`cov-lineages <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cov-lineages>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cov-lineages/meta.yaml>`_

   


.. conda:package:: cov-lineages

   |downloads_cov-lineages| |docker_cov-lineages|

   :versions:
      
      

      ``2020.05.19.2-0``

      

   
   :depends on python: 

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

    pixi global install cov-lineages

to add into an existing workspace instead, run::

    pixi add cov-lineages

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cov-lineages

Alternatively, to install into a new environment, run::

    conda create -n envname cov-lineages

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cov-lineages:<tag>

(see `cov-lineages/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cov-lineages| image:: https://img.shields.io/conda/dn/bioconda/cov-lineages.svg?style=flat
   :target: https://anaconda.org/bioconda/cov-lineages
   :alt:   (downloads)
.. |docker_cov-lineages| image:: https://quay.io/repository/biocontainers/cov-lineages/status
   :target: https://quay.io/repository/biocontainers/cov-lineages
.. _`cov-lineages/tags`: https://quay.io/repository/biocontainers/cov-lineages?tab=tags


.. raw:: html

    <script>
        var package = "cov-lineages";
        var versions = ["2020.05.19.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cov-lineages/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cov-lineages/README.html