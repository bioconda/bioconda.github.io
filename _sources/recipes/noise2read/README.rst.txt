:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'noise2read'
.. highlight: bash

noise2read
==========

.. conda:recipe:: noise2read
   :replaces_section_title:
   :noindex:

   Turn noise to read

   :homepage: https://github.com/Jappy0/noise2read
   :license: MIT
   :recipe: /`noise2read <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noise2read>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noise2read/meta.yaml>`_

   noise2read\, originated in a computable rule translated from PCR erring mechanism that\: a rare read is erroneous if it has a neighboring read of high abundance\, turns erroneous reads into their original state without bringing up any non\-existing sequences into the short read set\(\&lt 300bp\) including DNA and RNA sequencing \(DNA\/RNA\-seq\)\, small RNA\, unique molecular identifiers \(UMI\) and amplicon sequencing data.



.. conda:package:: noise2read

   |downloads_noise2read| |docker_noise2read|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.10-0``,  ``0.2.7-0``

      

   
   :depends on bcool: 
   :depends on biopython: ``1.79``
   :depends on editdistance: ``>=0.6.0``
   :depends on imbalanced-learn: ``>=0.9.1``
   :depends on matplotlib-base: ``>=3.5.2``
   :depends on mpire: ``>=2.8.0``
   :depends on networkx: ``2.8.5``
   :depends on optuna: ``>=3.1.1``
   :depends on pandas: ``>=1.4.3``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``>=1.1.1``
   :depends on seqtk: 
   :depends on xgboost: ``1.6.1``
   :depends on xlsxwriter: ``>=3.0.3``

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

    pixi global install noise2read

to add into an existing workspace instead, run::

    pixi add noise2read

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install noise2read

Alternatively, to install into a new environment, run::

    conda create -n envname noise2read

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/noise2read:<tag>

(see `noise2read/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_noise2read| image:: https://img.shields.io/conda/dn/bioconda/noise2read.svg?style=flat
   :target: https://anaconda.org/bioconda/noise2read
   :alt:   (downloads)
.. |docker_noise2read| image:: https://quay.io/repository/biocontainers/noise2read/status
   :target: https://quay.io/repository/biocontainers/noise2read
.. _`noise2read/tags`: https://quay.io/repository/biocontainers/noise2read?tab=tags


.. raw:: html

    <script>
        var package = "noise2read";
        var versions = ["0.3.0","0.2.10","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/noise2read/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/noise2read/README.html