:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gor_pyspark'
.. highlight: bash

gor_pyspark
===========

.. conda:recipe:: gor_pyspark
   :replaces_section_title:
   :noindex:

   Python helper function for gor\-spark

   :homepage: https://github.com/gorpipe/gor-pyspark
   :license: APACHE / Apache Software
   :recipe: /`gor_pyspark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gor_pyspark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gor_pyspark/meta.yaml>`_

   


.. conda:package:: gor_pyspark

   |downloads_gor_pyspark| |docker_gor_pyspark|

   :versions:
      
      

      ``3.22.6-0``

      

   
   :depends on pyspark: ``>=3.2.1``
   :depends on python: 

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

    pixi global install gor_pyspark

to add into an existing workspace instead, run::

    pixi add gor_pyspark

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gor_pyspark

Alternatively, to install into a new environment, run::

    conda create -n envname gor_pyspark

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gor_pyspark:<tag>

(see `gor_pyspark/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gor_pyspark| image:: https://img.shields.io/conda/dn/bioconda/gor_pyspark.svg?style=flat
   :target: https://anaconda.org/bioconda/gor_pyspark
   :alt:   (downloads)
.. |docker_gor_pyspark| image:: https://quay.io/repository/biocontainers/gor_pyspark/status
   :target: https://quay.io/repository/biocontainers/gor_pyspark
.. _`gor_pyspark/tags`: https://quay.io/repository/biocontainers/gor_pyspark?tab=tags


.. raw:: html

    <script>
        var package = "gor_pyspark";
        var versions = ["3.22.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gor_pyspark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gor_pyspark/README.html