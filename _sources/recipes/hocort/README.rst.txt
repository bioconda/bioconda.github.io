:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hocort'
.. highlight: bash

hocort
======

.. conda:recipe:: hocort
   :replaces_section_title:
   :noindex:

   HoCoRT \- Host Contamination Removal Tool

   :homepage: https://github.com/ignasrum/hocort
   :license: MIT / MIT
   :recipe: /`hocort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hocort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hocort/meta.yaml>`_

   


.. conda:package:: hocort

   |downloads_hocort| |docker_hocort|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.3.3-0``,  ``0.3.2-0``

      

   
   :depends on bbmap: 
   :depends on biobloomtools: 
   :depends on bowtie2: 
   :depends on bwa-mem2: 
   :depends on hisat2: 
   :depends on kraken2: ``>=2.1.2``
   :depends on minimap2: 
   :depends on python: ``>=3.7,<3.10``
   :depends on samtools: ``>=1.8``
   :depends on tbb: ``2020.2.*``

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

    pixi global install hocort

to add into an existing workspace instead, run::

    pixi add hocort

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hocort

Alternatively, to install into a new environment, run::

    conda create -n envname hocort

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hocort:<tag>

(see `hocort/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hocort| image:: https://img.shields.io/conda/dn/bioconda/hocort.svg?style=flat
   :target: https://anaconda.org/bioconda/hocort
   :alt:   (downloads)
.. |docker_hocort| image:: https://quay.io/repository/biocontainers/hocort/status
   :target: https://quay.io/repository/biocontainers/hocort
.. _`hocort/tags`: https://quay.io/repository/biocontainers/hocort?tab=tags


.. raw:: html

    <script>
        var package = "hocort";
        var versions = ["1.2.2","1.2.1","1.2.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hocort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hocort/README.html