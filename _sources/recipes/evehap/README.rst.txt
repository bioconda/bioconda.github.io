:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evehap'
.. highlight: bash

evehap
======

.. conda:recipe:: evehap
   :replaces_section_title:
   :noindex:

   Universal mtDNA haplogroup classifier for ancient and modern DNA

   :homepage: https://github.com/trianglegrrl/eveHap
   :license: PolyForm-Noncommercial-1.0.0
   :recipe: /`evehap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evehap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evehap/meta.yaml>`_

   eveHap is a universal mtDNA \(mitochondrial DNA\) haplogroup classifier.
   It classifies ancient and modern DNA samples against phylogenetic haplogroup
   references\, supporting multiple input formats \(BAM\, VCF\, FASTA\, HSD\, microarray\)
   and providing both high\-coverage \(Kulczynski scoring\) and low\-coverage
   \(tree traversal\) classification methods.



.. conda:package:: evehap

   |downloads_evehap| |docker_evehap|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on biopython: ``>=1.80``
   :depends on click: ``>=8.0``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.8``

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

    pixi global install evehap

to add into an existing workspace instead, run::

    pixi add evehap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install evehap

Alternatively, to install into a new environment, run::

    conda create -n envname evehap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/evehap:<tag>

(see `evehap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_evehap| image:: https://img.shields.io/conda/dn/bioconda/evehap.svg?style=flat
   :target: https://anaconda.org/bioconda/evehap
   :alt:   (downloads)
.. |docker_evehap| image:: https://quay.io/repository/biocontainers/evehap/status
   :target: https://quay.io/repository/biocontainers/evehap
.. _`evehap/tags`: https://quay.io/repository/biocontainers/evehap?tab=tags


.. raw:: html

    <script>
        var package = "evehap";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evehap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evehap/README.html