:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplotaglr'
.. highlight: bash

haplotaglr
==========

.. conda:recipe:: haplotaglr
   :replaces_section_title:
   :noindex:

   Haplotagging individual long reads using known haplotype information.

   :homepage: https://github.com/Boyle-Lab/HaplotagLR
   :documentation: https://github.com/Boyle-Lab/HaplotagLR/blob/v1.1.13/README.md
   
   :license: MIT / MIT
   :recipe: /`haplotaglr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotaglr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotaglr/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0298688`

   


.. conda:package:: haplotaglr

   |downloads_haplotaglr| |docker_haplotaglr|

   :versions:
      
      

      ``1.1.13-0``,  ``1.1.12-0``,  ``1.1.10-0``,  ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.5-0``,  ``1.1.4-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on numpy: ``>=1.20.1``
   :depends on powerlaw: ``>=1.4.6``
   :depends on pyliftover: ``>=0.4``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.7,<3.13``
   :depends on requests: ``>=2.26.0``

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

    pixi global install haplotaglr

to add into an existing workspace instead, run::

    pixi add haplotaglr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haplotaglr

Alternatively, to install into a new environment, run::

    conda create -n envname haplotaglr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haplotaglr:<tag>

(see `haplotaglr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haplotaglr| image:: https://img.shields.io/conda/dn/bioconda/haplotaglr.svg?style=flat
   :target: https://anaconda.org/bioconda/haplotaglr
   :alt:   (downloads)
.. |docker_haplotaglr| image:: https://quay.io/repository/biocontainers/haplotaglr/status
   :target: https://quay.io/repository/biocontainers/haplotaglr
.. _`haplotaglr/tags`: https://quay.io/repository/biocontainers/haplotaglr?tab=tags


.. raw:: html

    <script>
        var package = "haplotaglr";
        var versions = ["1.1.13","1.1.12","1.1.10","1.1.9","1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplotaglr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplotaglr/README.html