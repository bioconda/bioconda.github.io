:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segmentation-fold'
.. highlight: bash

segmentation-fold
=================

.. conda:recipe:: segmentation-fold
   :replaces_section_title:
   :noindex:

   RNA\-Folding with predefined segments including K\-turns and loop\-E\-motifs

   :homepage: https://github.com/yhoogstrate/segmentation-fold
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`segmentation-fold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmentation-fold/meta.yaml>`_

   


.. conda:package:: segmentation-fold

   |downloads_segmentation-fold| |docker_segmentation-fold|

   :versions:
      
      

      ``1.7.0-4``,  ``1.7.0-3``,  ``1.7.0-2``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.8-0``

      

   
   :depends on boost: ``>=1.63.0,<1.63.1.0a0``
   :depends on click: ``>=4.0``
   :depends on htseq: ``>=0.6.1``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on pysam: ``>=0.8.1,<=0.8.3``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``

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

    pixi global install segmentation-fold

to add into an existing workspace instead, run::

    pixi add segmentation-fold

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install segmentation-fold

Alternatively, to install into a new environment, run::

    conda create -n envname segmentation-fold

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/segmentation-fold:<tag>

(see `segmentation-fold/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_segmentation-fold| image:: https://img.shields.io/conda/dn/bioconda/segmentation-fold.svg?style=flat
   :target: https://anaconda.org/bioconda/segmentation-fold
   :alt:   (downloads)
.. |docker_segmentation-fold| image:: https://quay.io/repository/biocontainers/segmentation-fold/status
   :target: https://quay.io/repository/biocontainers/segmentation-fold
.. _`segmentation-fold/tags`: https://quay.io/repository/biocontainers/segmentation-fold?tab=tags


.. raw:: html

    <script>
        var package = "segmentation-fold";
        var versions = ["1.7.0","1.7.0","1.7.0","1.7.0","1.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segmentation-fold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segmentation-fold/README.html