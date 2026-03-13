:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whokaryote'
.. highlight: bash

whokaryote
==========

.. conda:recipe:: whokaryote
   :replaces_section_title:
   :noindex:

   Classify metagenomic contigs as eukaryotic or prokaryotic

   :homepage: https://github.com/LottePronk/whokaryote
   :developer docs: https://git.wageningenur.nl/lotte.pronk/whokaryote
   :license: GPL / AGPL-3.0
   :recipe: /`whokaryote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whokaryote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whokaryote/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.1099/mgen.0.000823`

   Whokaryote uses a random forest classifier that uses gene\-structure based
   features and optionally Tiara predictions to predict whether a contig is
   from a eukaryote or from a prokaryote. You can use Whokaryote to determine
   which contigs need eukaryotic gene prediction and which need prokaryotic
   gene prediction.



.. conda:package:: whokaryote

   |downloads_whokaryote| |docker_whokaryote|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends on biopython: 
   :depends on joblib: 
   :depends on numpy: ``1.19.4.*``
   :depends on pandas: 
   :depends on pathlib: 
   :depends on prodigal: 
   :depends on python: ``3.8.*``
   :depends on scikit-learn: ``1.0.2.*``
   :depends on tiara: 

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

    pixi global install whokaryote

to add into an existing workspace instead, run::

    pixi add whokaryote

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install whokaryote

Alternatively, to install into a new environment, run::

    conda create -n envname whokaryote

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/whokaryote:<tag>

(see `whokaryote/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_whokaryote| image:: https://img.shields.io/conda/dn/bioconda/whokaryote.svg?style=flat
   :target: https://anaconda.org/bioconda/whokaryote
   :alt:   (downloads)
.. |docker_whokaryote| image:: https://quay.io/repository/biocontainers/whokaryote/status
   :target: https://quay.io/repository/biocontainers/whokaryote
.. _`whokaryote/tags`: https://quay.io/repository/biocontainers/whokaryote?tab=tags


.. raw:: html

    <script>
        var package = "whokaryote";
        var versions = ["1.1.2","1.1.1","1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whokaryote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whokaryote/README.html