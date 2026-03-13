:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyamilyseq'
.. highlight: bash

pyamilyseq
==========

.. conda:recipe:: pyamilyseq
   :replaces_section_title:
   :noindex:

   PyamilySeq\: A pangenome investigation tool

   :homepage: https://github.com/NickJD/PyamilySeq
   :license: GPL-3.0-only
   :recipe: /`pyamilyseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyamilyseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyamilyseq/meta.yaml>`_

   PyamilySeq \- A tool to investigate gene\-centric prokaryote pangenomes built with 
   clustering methods such as CD\-HIT\, DIAMOND\, BLAST or MMseqs2.



.. conda:package:: pyamilyseq

   |downloads_pyamilyseq| |docker_pyamilyseq|

   :versions:
      
      

      ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``

      

   
   :depends on python: ``>=3.10``
   :depends on python-levenshtein: 

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

    pixi global install pyamilyseq

to add into an existing workspace instead, run::

    pixi add pyamilyseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyamilyseq

Alternatively, to install into a new environment, run::

    conda create -n envname pyamilyseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyamilyseq:<tag>

(see `pyamilyseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyamilyseq| image:: https://img.shields.io/conda/dn/bioconda/pyamilyseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pyamilyseq
   :alt:   (downloads)
.. |docker_pyamilyseq| image:: https://quay.io/repository/biocontainers/pyamilyseq/status
   :target: https://quay.io/repository/biocontainers/pyamilyseq
.. _`pyamilyseq/tags`: https://quay.io/repository/biocontainers/pyamilyseq?tab=tags


.. raw:: html

    <script>
        var package = "pyamilyseq";
        var versions = ["1.3.4","1.3.3","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyamilyseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyamilyseq/README.html