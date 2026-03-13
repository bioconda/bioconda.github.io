:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psytrans'
.. highlight: bash

psytrans
========

.. conda:recipe:: psytrans
   :replaces_section_title:
   :noindex:

   psytrans.py \- Parasite \& Symbiont Transcriptome Separation

   :homepage: https://github.com/rivera10/psytrans
   :license: GPLv3
   :recipe: /`psytrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psytrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psytrans/meta.yaml>`_

   psytrans.py separates the sequences of a host species from those of its main symbiont\(s\) or parasite\(s\) based on Support Vector Machine classification.
   The program takes as input a file in fasta format with the sequences to be classified.
   The program also requires a file with sequences of a species related to the host\, and a file with sequences related to the symbiont \(or parasite\).
   The queries will be compared to these two files using BLASTX.
   Alternatively\, the user can provide the output of pre\-computed BLASTX searches \(in tabular format\: \-outfmt 6 or 7\).
   The classification is then carried out using the command line tools from libsvm.



.. conda:package:: psytrans

   |downloads_psytrans| |docker_psytrans|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on blast: ``>=2.2.31``
   :depends on libsvm: ``>=3.16``
   :depends on python: ``>3.6``

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

    pixi global install psytrans

to add into an existing workspace instead, run::

    pixi add psytrans

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psytrans

Alternatively, to install into a new environment, run::

    conda create -n envname psytrans

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psytrans:<tag>

(see `psytrans/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psytrans| image:: https://img.shields.io/conda/dn/bioconda/psytrans.svg?style=flat
   :target: https://anaconda.org/bioconda/psytrans
   :alt:   (downloads)
.. |docker_psytrans| image:: https://quay.io/repository/biocontainers/psytrans/status
   :target: https://quay.io/repository/biocontainers/psytrans
.. _`psytrans/tags`: https://quay.io/repository/biocontainers/psytrans?tab=tags


.. raw:: html

    <script>
        var package = "psytrans";
        var versions = ["2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psytrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psytrans/README.html