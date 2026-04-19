:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'debwt'
.. highlight: bash

debwt
=====

.. conda:recipe:: debwt
   :replaces_section_title:
   :noindex:

   A efficient method to construct BWT index of a given DNA sequence\, especially
   useful for gigantic and high similar genome.
   DeBWT has good scalability to construct BWT in parallel computing.
   It is well\-suited to run on multiple core servers or clusters to
   construct the BWT of large collections of genome sequences.

   :homepage: https://github.com/DixianZhu/deBWT
   :license: Unknown
   :recipe: /`debwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/debwt/meta.yaml>`_

   


.. conda:package:: debwt

   |downloads_debwt| |docker_debwt|

   :versions:
      
      

      ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install debwt

to add into an existing workspace instead, run::

    pixi add debwt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install debwt

Alternatively, to install into a new environment, run::

    conda create -n envname debwt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/debwt:<tag>

(see `debwt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_debwt| image:: https://img.shields.io/conda/dn/bioconda/debwt.svg?style=flat
   :target: https://anaconda.org/bioconda/debwt
   :alt:   (downloads)
.. |docker_debwt| image:: https://quay.io/repository/biocontainers/debwt/status
   :target: https://quay.io/repository/biocontainers/debwt
.. _`debwt/tags`: https://quay.io/repository/biocontainers/debwt?tab=tags


.. raw:: html

    <script>
        var package = "debwt";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/debwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/debwt/README.html