:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylodeep'
.. highlight: bash

phylodeep
=========

.. conda:recipe:: phylodeep
   :replaces_section_title:
   :noindex:

   Deep\-learning parameter estimation and model selection from phylogenetic trees.

   :homepage: https://github.com/evolbioinfo/phylodeep
   :documentation: https://github.com/evolbioinfo/phylodeep/blob/0.9/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`phylodeep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodeep/meta.yaml>`_

   PhyloDeep is a python library for parameter estimation and model selection from phylogenetic trees\, 
   based on deep learning.



.. conda:package:: phylodeep

   |downloads_phylodeep| |docker_phylodeep|

   :versions:
      
      

      ``0.9-0``,  ``0.7-0``,  ``0.6-0``

      

   
   :depends on ete3: ``>=3.1.1,<=3.1.3``
   :depends on keras: ``2.2.4``
   :depends on matplotlib-base: ``>=3.0.2,<3.7.0``
   :depends on pandas: ``>=1.0.0,<1.4.0``
   :depends on phylodeep_data_bd: ``>=0.6``
   :depends on phylodeep_data_bdei: ``>=0.4``
   :depends on phylodeep_data_bdss: ``>=0.4``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=1.0,<1.3.0``
   :depends on tensorflow: ``>=2.0.0``

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

    pixi global install phylodeep

to add into an existing workspace instead, run::

    pixi add phylodeep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylodeep

Alternatively, to install into a new environment, run::

    conda create -n envname phylodeep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylodeep:<tag>

(see `phylodeep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylodeep| image:: https://img.shields.io/conda/dn/bioconda/phylodeep.svg?style=flat
   :target: https://anaconda.org/bioconda/phylodeep
   :alt:   (downloads)
.. |docker_phylodeep| image:: https://quay.io/repository/biocontainers/phylodeep/status
   :target: https://quay.io/repository/biocontainers/phylodeep
.. _`phylodeep/tags`: https://quay.io/repository/biocontainers/phylodeep?tab=tags


.. raw:: html

    <script>
        var package = "phylodeep";
        var versions = ["0.9","0.7","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylodeep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylodeep/README.html