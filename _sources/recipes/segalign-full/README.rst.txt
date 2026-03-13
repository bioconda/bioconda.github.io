:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segalign-full'
.. highlight: bash

segalign-full
=============

.. conda:recipe:: segalign-full
   :replaces_section_title:
   :noindex:

   SegAlign\: A Scalable GPU\-Based Whole Genome Aligner

   :homepage: https://github.com/galaxyproject/SegAlign
   :documentation: https://github.com/galaxyproject/SegAlign/blob/main/README.md
   
   :license: `MIT / MIT <https://github.com/galaxyproject/SegAlign/blob/main/LICENSE>`_
   :recipe: /`segalign-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segalign-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segalign-full/meta.yaml>`_
   :links: doi: :doi:`10.1109/SC41405.2020.00043`, doi: :doi:`10.5281/zenodo.3880947`

   SegAlign is a Scalable GPU System for Pairwise Whole Genome
   Alignments based on LASTZ\'s seed\-filter\-extend paradigm.



.. conda:package:: segalign-full

   |downloads_segalign-full| |docker_segalign-full|

   :versions:
      
      

      ``0.1.2.7-1``,  ``0.1.2.7-0``,  ``0.1.2.6-0``,  ``0.1.2.4-0``,  ``0.1.2.3-0``,  ``0.1.2.2-0``,  ``0.1.2.1-0``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends on lastz: 
   :depends on segalign: ``0.1.2.7.*``
   :depends on ucsc-fatotwobit: 

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

    pixi global install segalign-full

to add into an existing workspace instead, run::

    pixi add segalign-full

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install segalign-full

Alternatively, to install into a new environment, run::

    conda create -n envname segalign-full

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/segalign-full:<tag>

(see `segalign-full/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_segalign-full| image:: https://img.shields.io/conda/dn/bioconda/segalign-full.svg?style=flat
   :target: https://anaconda.org/bioconda/segalign-full
   :alt:   (downloads)
.. |docker_segalign-full| image:: https://quay.io/repository/biocontainers/segalign-full/status
   :target: https://quay.io/repository/biocontainers/segalign-full
.. _`segalign-full/tags`: https://quay.io/repository/biocontainers/segalign-full?tab=tags


.. raw:: html

    <script>
        var package = "segalign-full";
        var versions = ["0.1.2.7","0.1.2.7","0.1.2.6","0.1.2.4","0.1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segalign-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segalign-full/README.html