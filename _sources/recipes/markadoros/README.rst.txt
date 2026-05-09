:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markadoros'
.. highlight: bash

markadoros
==========

.. conda:recipe:: markadoros
   :replaces_section_title:
   :noindex:

   Markadoros is a tool for the identification and assembly of barcode genes in raw sequencing data.

   :homepage: https://github.com/sanger-tol/markadoros/
   :license: MIT
   :recipe: /`markadoros <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markadoros>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markadoros/meta.yaml>`_

   


.. conda:package:: markadoros

   |downloads_markadoros| |docker_markadoros|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.86``
   :depends on click: ``>=8.3.1``
   :depends on hifiasm: ``>=0.21.0``
   :depends on jsonschema: ``>=4.26.0``
   :depends on loguru: ``>=0.7.3``
   :depends on mmseqs2: ``>=16.747c6``
   :depends on pandas: ``>=2.3.3``
   :depends on polars: ``>=1.39.3``
   :depends on pymmseqs: ``>=1.0.7``
   :depends on pysam: ``>=0.23.3``
   :depends on python: ``>=3.11``
   :depends on python-isal: ``>=1.8.0``
   :depends on requests: ``>=2.33.1``
   :depends on scikit-learn: ``>=1.8.0``
   :depends on spades: ``>=4.0.0``

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

    pixi global install markadoros

to add into an existing workspace instead, run::

    pixi add markadoros

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install markadoros

Alternatively, to install into a new environment, run::

    conda create -n envname markadoros

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/markadoros:<tag>

(see `markadoros/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_markadoros| image:: https://img.shields.io/conda/dn/bioconda/markadoros.svg?style=flat
   :target: https://anaconda.org/bioconda/markadoros
   :alt:   (downloads)
.. |docker_markadoros| image:: https://quay.io/repository/biocontainers/markadoros/status
   :target: https://quay.io/repository/biocontainers/markadoros
.. _`markadoros/tags`: https://quay.io/repository/biocontainers/markadoros?tab=tags


.. raw:: html

    <script>
        var package = "markadoros";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markadoros/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markadoros/README.html