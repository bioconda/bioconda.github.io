:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gmap-fusion'
.. highlight: bash

gmap-fusion
===========

.. conda:recipe:: gmap-fusion
   :replaces_section_title:
   :noindex:

   GMAP\-fusion is a utility for identifying candidate fusion transcripts based on transcript sequences reconstructed via RNA\-Seq de novo transcriptome assembly.

   :homepage: https://github.com/GMAP-fusion/GMAP-fusion
   :license: BSD-3-Clause
   :recipe: /`gmap-fusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap-fusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gmap-fusion/meta.yaml>`_

   


.. conda:package:: gmap-fusion

   |downloads_gmap-fusion| |docker_gmap-fusion|

   :versions:
      
      

      ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-0``,  ``0.3.0-1``

      

   
   :depends on bowtie2: ``>=2.1``
   :depends on gmap: ``>=2017.11.15``
   :depends on perl: 
   :depends on perl-db_file: 
   :depends on perl-set-intervaltree: 
   :depends on samtools: ``>=1.3``

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

    pixi global install gmap-fusion

to add into an existing workspace instead, run::

    pixi add gmap-fusion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gmap-fusion

Alternatively, to install into a new environment, run::

    conda create -n envname gmap-fusion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gmap-fusion:<tag>

(see `gmap-fusion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gmap-fusion| image:: https://img.shields.io/conda/dn/bioconda/gmap-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/gmap-fusion
   :alt:   (downloads)
.. |docker_gmap-fusion| image:: https://quay.io/repository/biocontainers/gmap-fusion/status
   :target: https://quay.io/repository/biocontainers/gmap-fusion
.. _`gmap-fusion/tags`: https://quay.io/repository/biocontainers/gmap-fusion?tab=tags


.. raw:: html

    <script>
        var package = "gmap-fusion";
        var versions = ["0.4.0","0.4.0","0.4.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gmap-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gmap-fusion/README.html