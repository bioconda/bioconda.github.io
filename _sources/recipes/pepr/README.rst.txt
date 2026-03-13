:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepr'
.. highlight: bash

pepr
====

.. conda:recipe:: pepr
   :replaces_section_title:
   :noindex:

   Peak\-calling and Prioritization pipeline for replicated ChIP\-Seq data

   :homepage: https://github.com/shawnzhangyx/PePr/
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`pepr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepr/meta.yaml>`_

   


.. conda:package:: pepr

   |downloads_pepr| |docker_pepr|

   :versions:
      
      

      ``1.1.24-3``,  ``1.1.24-2``,  ``1.1.24-1``,  ``1.1.24-0``,  ``1.1.18-0``,  ``1.0.9-0``

      

   
   :depends on numpy: ``>=1.6.0``
   :depends on pysam: 
   :depends on python: 
   :depends on scipy: ``>=0.14.0``
   :depends on sharedmem: 

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

    pixi global install pepr

to add into an existing workspace instead, run::

    pixi add pepr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pepr

Alternatively, to install into a new environment, run::

    conda create -n envname pepr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pepr:<tag>

(see `pepr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pepr| image:: https://img.shields.io/conda/dn/bioconda/pepr.svg?style=flat
   :target: https://anaconda.org/bioconda/pepr
   :alt:   (downloads)
.. |docker_pepr| image:: https://quay.io/repository/biocontainers/pepr/status
   :target: https://quay.io/repository/biocontainers/pepr
.. _`pepr/tags`: https://quay.io/repository/biocontainers/pepr?tab=tags


.. raw:: html

    <script>
        var package = "pepr";
        var versions = ["1.1.24","1.1.24","1.1.24","1.1.24","1.1.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepr/README.html