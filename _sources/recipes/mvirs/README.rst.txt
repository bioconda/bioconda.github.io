:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mvirs'
.. highlight: bash

mvirs
=====

.. conda:recipe:: mvirs
   :replaces_section_title:
   :noindex:

   mVIRs\: Localisation of inducible prophages using NGS data

   :homepage: https://github.com/SushiLab/mVIRs
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`mvirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvirs/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1186/s40168-021-01033-w`

   


.. conda:package:: mvirs

   |downloads_mvirs| |docker_mvirs|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends on bwa: ``>=0.7.17``
   :depends on pysam: ``>=0.15.2``
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.9``

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

    pixi global install mvirs

to add into an existing workspace instead, run::

    pixi add mvirs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mvirs

Alternatively, to install into a new environment, run::

    conda create -n envname mvirs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mvirs:<tag>

(see `mvirs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mvirs| image:: https://img.shields.io/conda/dn/bioconda/mvirs.svg?style=flat
   :target: https://anaconda.org/bioconda/mvirs
   :alt:   (downloads)
.. |docker_mvirs| image:: https://quay.io/repository/biocontainers/mvirs/status
   :target: https://quay.io/repository/biocontainers/mvirs
.. _`mvirs/tags`: https://quay.io/repository/biocontainers/mvirs?tab=tags


.. raw:: html

    <script>
        var package = "mvirs";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mvirs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mvirs/README.html