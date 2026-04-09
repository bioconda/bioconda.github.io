:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stemsage'
.. highlight: bash

stemsage
========

.. conda:recipe:: stemsage
   :replaces_section_title:
   :noindex:

   Uncovering Stem\-loop Motifs from RBP Binding Regions.

   :homepage: https://github.com/PrinceWang2018/stemsage
   :license: GPL-3.0-or-later
   :recipe: /`stemsage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stemsage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stemsage/meta.yaml>`_

   Stemage is a tool for uncovering stem\-loop motifs from RBP binding regions.



.. conda:package:: stemsage

   |downloads_stemsage| |docker_stemsage|

   :versions:
      
      

      ``0.8.8-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on cairo: 
   :depends on cairosvg: ``>=2.7.1``
   :depends on jinja2: ``>=3.0.0``
   :depends on joblib: ``>=1.1.0``
   :depends on logomaker: ``>=0.8``
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=1.3.0``
   :depends on pango: 
   :depends on python: ``>=3.8``
   :depends on python-levenshtein: ``>=0.20.0``
   :depends on scikit-learn: ``>=1.0.0``
   :depends on scipy: ``>=1.7.0``
   :depends on seaborn-base: ``>=0.11.0``
   :depends on statsmodels: ``>=0.13.0``
   :depends on tqdm: ``>=4.62.0``
   :depends on viennarna: ``>=2.7.2``
   :depends on xgboost: ``>=1.5.0``

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

    pixi global install stemsage

to add into an existing workspace instead, run::

    pixi add stemsage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stemsage

Alternatively, to install into a new environment, run::

    conda create -n envname stemsage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stemsage:<tag>

(see `stemsage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stemsage| image:: https://img.shields.io/conda/dn/bioconda/stemsage.svg?style=flat
   :target: https://anaconda.org/bioconda/stemsage
   :alt:   (downloads)
.. |docker_stemsage| image:: https://quay.io/repository/biocontainers/stemsage/status
   :target: https://quay.io/repository/biocontainers/stemsage
.. _`stemsage/tags`: https://quay.io/repository/biocontainers/stemsage?tab=tags


.. raw:: html

    <script>
        var package = "stemsage";
        var versions = ["0.8.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stemsage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stemsage/README.html