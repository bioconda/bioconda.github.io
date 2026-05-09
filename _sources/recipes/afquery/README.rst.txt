:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afquery'
.. highlight: bash

afquery
=======

.. conda:recipe:: afquery
   :replaces_section_title:
   :noindex:

   Genomic allele frequency query engine with bitmap\-encoded genotypes

   :homepage: https://github.com/dlopez-bioinfo/afquery
   :license: MIT
   :recipe: /`afquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afquery/meta.yaml>`_

   


.. conda:package:: afquery

   |downloads_afquery| |docker_afquery|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.2-0``

      

   
   :depends on click: ``>=8.1``
   :depends on cyvcf2: ``>=0.30``
   :depends on duckdb: ``>=0.10``
   :depends on pyarrow: ``>=14.0``
   :depends on pyranges: ``>=0.1.2,<0.2``
   :depends on pyroaring: ``>=0.4.8``
   :depends on python: ``>=3.10``
   :depends on tqdm: ``>=4.60``

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

    pixi global install afquery

to add into an existing workspace instead, run::

    pixi add afquery

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install afquery

Alternatively, to install into a new environment, run::

    conda create -n envname afquery

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/afquery:<tag>

(see `afquery/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_afquery| image:: https://img.shields.io/conda/dn/bioconda/afquery.svg?style=flat
   :target: https://anaconda.org/bioconda/afquery
   :alt:   (downloads)
.. |docker_afquery| image:: https://quay.io/repository/biocontainers/afquery/status
   :target: https://quay.io/repository/biocontainers/afquery
.. _`afquery/tags`: https://quay.io/repository/biocontainers/afquery?tab=tags


.. raw:: html

    <script>
        var package = "afquery";
        var versions = ["0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afquery/README.html