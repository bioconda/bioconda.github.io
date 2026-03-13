:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplicontyper'
.. highlight: bash

amplicontyper
=============

.. conda:recipe:: amplicontyper
   :replaces_section_title:
   :noindex:

   Tool for training model and classifying reads from environmental ONT amplicon sequencing.

   :homepage: https://github.com/AntonS-bio/AmpliconTyper
   :license: GPL-3.0-only
   :recipe: /`amplicontyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicontyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplicontyper/meta.yaml>`_

   Tool for training model and classifying reads from environmental ONT amplicon sequencing. 



.. conda:package:: amplicontyper

   |downloads_amplicontyper| |docker_amplicontyper|

   :versions:
      
      

      ``0.1.34-0``,  ``0.1.33-0``,  ``0.1.32-0``,  ``0.1.29-0``,  ``0.1.28-0``,  ``0.1.27-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on minimap2: 
   :depends on numpy: ``>=1.20.*``
   :depends on pandas: ``>=2.0.0``
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3.10``
   :depends on requests: 
   :depends on samtools: 
   :depends on scikit-learn: ``1.5.*``
   :depends on tqdm: ``>=4.66.*``

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

    pixi global install amplicontyper

to add into an existing workspace instead, run::

    pixi add amplicontyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amplicontyper

Alternatively, to install into a new environment, run::

    conda create -n envname amplicontyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amplicontyper:<tag>

(see `amplicontyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amplicontyper| image:: https://img.shields.io/conda/dn/bioconda/amplicontyper.svg?style=flat
   :target: https://anaconda.org/bioconda/amplicontyper
   :alt:   (downloads)
.. |docker_amplicontyper| image:: https://quay.io/repository/biocontainers/amplicontyper/status
   :target: https://quay.io/repository/biocontainers/amplicontyper
.. _`amplicontyper/tags`: https://quay.io/repository/biocontainers/amplicontyper?tab=tags


.. raw:: html

    <script>
        var package = "amplicontyper";
        var versions = ["0.1.34","0.1.33","0.1.32","0.1.29","0.1.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplicontyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplicontyper/README.html