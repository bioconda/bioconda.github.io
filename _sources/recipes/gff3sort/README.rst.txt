:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gff3sort'
.. highlight: bash

gff3sort
========

.. conda:recipe:: gff3sort
   :replaces_section_title:
   :noindex:

   A Perl Script to sort gff3 files and produce suitable results for tabix tools

   :homepage: https://github.com/billzt/gff3sort
   :license: GNU General Public License v3.0
   :recipe: /`gff3sort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3sort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gff3sort/meta.yaml>`_

   


.. conda:package:: gff3sort

   |downloads_gff3sort| |docker_gff3sort|

   :versions:
      
      

      ``0.1.a1a2bc9-2``,  ``0.1.a1a2bc9-1``,  ``0.1.a1a2bc9-0``

      

   
   :depends on perl: 
   :depends on perl-data-match: 
   :depends on perl-sort-naturally: 

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

    pixi global install gff3sort

to add into an existing workspace instead, run::

    pixi add gff3sort

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gff3sort

Alternatively, to install into a new environment, run::

    conda create -n envname gff3sort

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gff3sort:<tag>

(see `gff3sort/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gff3sort| image:: https://img.shields.io/conda/dn/bioconda/gff3sort.svg?style=flat
   :target: https://anaconda.org/bioconda/gff3sort
   :alt:   (downloads)
.. |docker_gff3sort| image:: https://quay.io/repository/biocontainers/gff3sort/status
   :target: https://quay.io/repository/biocontainers/gff3sort
.. _`gff3sort/tags`: https://quay.io/repository/biocontainers/gff3sort?tab=tags


.. raw:: html

    <script>
        var package = "gff3sort";
        var versions = ["0.1.a1a2bc9","0.1.a1a2bc9","0.1.a1a2bc9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gff3sort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gff3sort/README.html