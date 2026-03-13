:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'telosearchlr'
.. highlight: bash

telosearchlr
============

.. conda:recipe:: telosearchlr
   :replaces_section_title:
   :noindex:

   TeloSearchLR \(telomere search using long sequencing reads\) is a Python script for aiding the identificaiton of telomeric repeat motifs.

   :homepage: https://github.com/gchchung/TeloSearchLR
   :license: Academic and Non-Commercial Research Use
   :recipe: /`telosearchlr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telosearchlr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telosearchlr/meta.yaml>`_

   


.. conda:package:: telosearchlr

   |downloads_telosearchlr| |docker_telosearchlr|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on bio: 
   :depends on pillow: 
   :depends on plotly: 
   :depends on python: ``>=3.9``
   :depends on svgutils: 
   :depends on tidehunter: 

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

    pixi global install telosearchlr

to add into an existing workspace instead, run::

    pixi add telosearchlr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install telosearchlr

Alternatively, to install into a new environment, run::

    conda create -n envname telosearchlr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/telosearchlr:<tag>

(see `telosearchlr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_telosearchlr| image:: https://img.shields.io/conda/dn/bioconda/telosearchlr.svg?style=flat
   :target: https://anaconda.org/bioconda/telosearchlr
   :alt:   (downloads)
.. |docker_telosearchlr| image:: https://quay.io/repository/biocontainers/telosearchlr/status
   :target: https://quay.io/repository/biocontainers/telosearchlr
.. _`telosearchlr/tags`: https://quay.io/repository/biocontainers/telosearchlr?tab=tags


.. raw:: html

    <script>
        var package = "telosearchlr";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telosearchlr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telosearchlr/README.html