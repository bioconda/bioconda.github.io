:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bed2gff'
.. highlight: bash

bed2gff
=======

.. conda:recipe:: bed2gff
   :replaces_section_title:
   :noindex:

   BED\-to\-GFF3 converter that runs in parallel

   :homepage: https://github.com/alejandrogzi/bed2gff
   :license: MIT / MIT
   :recipe: /`bed2gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bed2gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bed2gff/meta.yaml>`_

   


.. conda:package:: bed2gff

   |downloads_bed2gff| |docker_bed2gff|

   :versions:
      
      

      ``0.1.5-1``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install bed2gff

to add into an existing workspace instead, run::

    pixi add bed2gff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bed2gff

Alternatively, to install into a new environment, run::

    conda create -n envname bed2gff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bed2gff:<tag>

(see `bed2gff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bed2gff| image:: https://img.shields.io/conda/dn/bioconda/bed2gff.svg?style=flat
   :target: https://anaconda.org/bioconda/bed2gff
   :alt:   (downloads)
.. |docker_bed2gff| image:: https://quay.io/repository/biocontainers/bed2gff/status
   :target: https://quay.io/repository/biocontainers/bed2gff
.. _`bed2gff/tags`: https://quay.io/repository/biocontainers/bed2gff?tab=tags


.. raw:: html

    <script>
        var package = "bed2gff";
        var versions = ["0.1.5","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bed2gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bed2gff/README.html