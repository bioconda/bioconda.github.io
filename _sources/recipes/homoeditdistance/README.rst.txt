:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homoeditdistance'
.. highlight: bash

homoeditdistance
================

.. conda:recipe:: homoeditdistance
   :replaces_section_title:
   :noindex:

   An implementation of the homo\-edit distance algorithm.

   :homepage: https://github.com/AlBi-HHU/homo-edit-distance
   :license: MIT
   :recipe: /`homoeditdistance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homoeditdistance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homoeditdistance/meta.yaml>`_

   A homo\-insertion is an insertion of a string of equal characters\, which we also call a block\, into another string. A homo\-deletion is the inverse operation\, that is\, the deletion of such a block. We consider the following problem\: Given two strings\, what is the minimum number of homo\-insertions or homo\-deletions needed to convert one into the other\? We refer to this number as the homo\-edit distance.


.. conda:package:: homoeditdistance

   |downloads_homoeditdistance| |docker_homoeditdistance|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends on numpy: 
   :depends on python: ``>=3``

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

    pixi global install homoeditdistance

to add into an existing workspace instead, run::

    pixi add homoeditdistance

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install homoeditdistance

Alternatively, to install into a new environment, run::

    conda create -n envname homoeditdistance

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/homoeditdistance:<tag>

(see `homoeditdistance/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_homoeditdistance| image:: https://img.shields.io/conda/dn/bioconda/homoeditdistance.svg?style=flat
   :target: https://anaconda.org/bioconda/homoeditdistance
   :alt:   (downloads)
.. |docker_homoeditdistance| image:: https://quay.io/repository/biocontainers/homoeditdistance/status
   :target: https://quay.io/repository/biocontainers/homoeditdistance
.. _`homoeditdistance/tags`: https://quay.io/repository/biocontainers/homoeditdistance?tab=tags


.. raw:: html

    <script>
        var package = "homoeditdistance";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homoeditdistance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homoeditdistance/README.html