:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parebrick'
.. highlight: bash

parebrick
=========

.. conda:recipe:: parebrick
   :replaces_section_title:
   :noindex:

   A bioinf tool for finding genome rearrangements in bacterial genomes.

   :homepage: https://github.com/ctlab/parallel-rearrangements
   :license: MIT / MIT
   :recipe: /`parebrick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parebrick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parebrick/meta.yaml>`_

   


.. conda:package:: parebrick

   |downloads_parebrick| |docker_parebrick|

   :versions:
      
      

      ``0.5.7-0``,  ``0.5.5-0``,  ``0.4-0``,  ``0.3.7-0``

      

   
   :depends on bg: 
   :depends on ete3: 
   :depends on pyqt: 
   :depends on python: ``>=3.6,<3.9``
   :depends on scikit-learn: 
   :depends on seaborn-base: ``>=0.11.0``

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

    pixi global install parebrick

to add into an existing workspace instead, run::

    pixi add parebrick

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parebrick

Alternatively, to install into a new environment, run::

    conda create -n envname parebrick

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parebrick:<tag>

(see `parebrick/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parebrick| image:: https://img.shields.io/conda/dn/bioconda/parebrick.svg?style=flat
   :target: https://anaconda.org/bioconda/parebrick
   :alt:   (downloads)
.. |docker_parebrick| image:: https://quay.io/repository/biocontainers/parebrick/status
   :target: https://quay.io/repository/biocontainers/parebrick
.. _`parebrick/tags`: https://quay.io/repository/biocontainers/parebrick?tab=tags


.. raw:: html

    <script>
        var package = "parebrick";
        var versions = ["0.5.7","0.5.5","0.4","0.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parebrick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parebrick/README.html