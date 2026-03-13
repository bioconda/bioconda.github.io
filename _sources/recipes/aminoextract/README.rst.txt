:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aminoextract'
.. highlight: bash

aminoextract
============

.. conda:recipe:: aminoextract
   :replaces_section_title:
   :noindex:

   Extract amino acid sequences from a fasta file based on a GFF

   :homepage: https://github.com/RIVM-bioinformatics/AminoExtract
   :license: MIT / MIT
   :recipe: /`aminoextract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aminoextract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aminoextract/meta.yaml>`_

   


.. conda:package:: aminoextract

   |downloads_aminoextract| |docker_aminoextract|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on pandas: 
   :depends on python: ``>=3.10``
   :depends on python-magic: ``0.4.*``
   :depends on rich: ``13.*``

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

    pixi global install aminoextract

to add into an existing workspace instead, run::

    pixi add aminoextract

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aminoextract

Alternatively, to install into a new environment, run::

    conda create -n envname aminoextract

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aminoextract:<tag>

(see `aminoextract/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aminoextract| image:: https://img.shields.io/conda/dn/bioconda/aminoextract.svg?style=flat
   :target: https://anaconda.org/bioconda/aminoextract
   :alt:   (downloads)
.. |docker_aminoextract| image:: https://quay.io/repository/biocontainers/aminoextract/status
   :target: https://quay.io/repository/biocontainers/aminoextract
.. _`aminoextract/tags`: https://quay.io/repository/biocontainers/aminoextract?tab=tags


.. raw:: html

    <script>
        var package = "aminoextract";
        var versions = ["0.4.1","0.4.0","0.3.1","0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aminoextract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aminoextract/README.html