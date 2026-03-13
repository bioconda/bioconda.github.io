:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoinsight'
.. highlight: bash

nanoinsight
===========

.. conda:recipe:: nanoinsight
   :replaces_section_title:
   :noindex:

   Repeat annotation tool for insertions called by NanoVar

   :homepage: https://github.com/AsmaaSamyMohamedMahmoud/nanoinsight
   :license: GPL-3.0-or-later
   :recipe: /`nanoinsight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoinsight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoinsight/meta.yaml>`_

   


.. conda:package:: nanoinsight

   |downloads_nanoinsight| |docker_nanoinsight|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends on biopython: ``>=1.82``
   :depends on mafft: 
   :depends on pandas: ``>=1.5.3``
   :depends on python: ``>=3.8``
   :depends on repeatmasker: 
   :depends on scikit-allel: ``>=1.3.7``

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

    pixi global install nanoinsight

to add into an existing workspace instead, run::

    pixi add nanoinsight

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanoinsight

Alternatively, to install into a new environment, run::

    conda create -n envname nanoinsight

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanoinsight:<tag>

(see `nanoinsight/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanoinsight| image:: https://img.shields.io/conda/dn/bioconda/nanoinsight.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoinsight
   :alt:   (downloads)
.. |docker_nanoinsight| image:: https://quay.io/repository/biocontainers/nanoinsight/status
   :target: https://quay.io/repository/biocontainers/nanoinsight
.. _`nanoinsight/tags`: https://quay.io/repository/biocontainers/nanoinsight?tab=tags


.. raw:: html

    <script>
        var package = "nanoinsight";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoinsight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoinsight/README.html