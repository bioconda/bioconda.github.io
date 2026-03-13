:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'discount'
.. highlight: bash

discount
========

.. conda:recipe:: discount
   :replaces_section_title:
   :noindex:

   Discount is a very scalable k\-mer counting and indexing tool based on Apache Spark.

   :homepage: https://github.com/jtnystrom/Discount
   :documentation: https://github.com/jtnystrom/Discount/blob/v3.0.1/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`discount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/discount/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab156`

   


.. conda:package:: discount

   |downloads_discount| |docker_discount|

   :versions:
      
      

      ``3.0.1-0``

      

   
   :depends on openjdk: ``>=17,<22``
   :depends on pyspark: ``>=3.1.0,<4.0.0``

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

    pixi global install discount

to add into an existing workspace instead, run::

    pixi add discount

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install discount

Alternatively, to install into a new environment, run::

    conda create -n envname discount

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/discount:<tag>

(see `discount/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_discount| image:: https://img.shields.io/conda/dn/bioconda/discount.svg?style=flat
   :target: https://anaconda.org/bioconda/discount
   :alt:   (downloads)
.. |docker_discount| image:: https://quay.io/repository/biocontainers/discount/status
   :target: https://quay.io/repository/biocontainers/discount
.. _`discount/tags`: https://quay.io/repository/biocontainers/discount?tab=tags


.. raw:: html

    <script>
        var package = "discount";
        var versions = ["3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/discount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/discount/README.html