:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minialign'
.. highlight: bash

minialign
=========

.. conda:recipe:: minialign
   :replaces_section_title:
   :noindex:

   Fast and accurate alignment tool for PacBio and Nanopore long reads.

   :homepage: https://github.com/ocxtal/minialign
   :documentation: https://github.com/ocxtal/minialign/blob/0.6.0/README.md
   
   :license: MIT / MIT
   :recipe: /`minialign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minialign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minialign/meta.yaml>`_

   Minialign is a little bit fast and moderately accurate nucleotide sequence
   alignment tool designed for PacBio and Nanopore long reads. It is built on
   three key algorithms\, minimizer\-based index of the minimap overlapper\,
   array\-based seed chaining\, and SIMD\-parallel Smith\-Waterman\-Gotoh extension.



.. conda:package:: minialign

   |downloads_minialign| |docker_minialign|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.0-0``,  ``0.3.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install minialign

to add into an existing workspace instead, run::

    pixi add minialign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minialign

Alternatively, to install into a new environment, run::

    conda create -n envname minialign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minialign:<tag>

(see `minialign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minialign| image:: https://img.shields.io/conda/dn/bioconda/minialign.svg?style=flat
   :target: https://anaconda.org/bioconda/minialign
   :alt:   (downloads)
.. |docker_minialign| image:: https://quay.io/repository/biocontainers/minialign/status
   :target: https://quay.io/repository/biocontainers/minialign
.. _`minialign/tags`: https://quay.io/repository/biocontainers/minialign?tab=tags


.. raw:: html

    <script>
        var package = "minialign";
        var versions = ["0.6.0","0.5.3","0.5.3","0.5.3","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minialign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minialign/README.html