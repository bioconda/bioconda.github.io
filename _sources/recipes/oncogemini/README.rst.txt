:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncogemini'
.. highlight: bash

oncogemini
==========

.. conda:recipe:: oncogemini
   :replaces_section_title:
   :noindex:

   OncoGEMINI is an adaptation of GEMINI intended for the improved identification of biologically and clincally relevant tumor variants from multi\-sample and longitudinal tumor sequencing data

   :homepage: https://github.com/fakedrtom/oncogemini
   :license: MIT
   :recipe: /`oncogemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncogemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncogemini/meta.yaml>`_

   


.. conda:package:: oncogemini

   |downloads_oncogemini| |docker_oncogemini|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on cyordereddict: ``0.2.2``
   :depends on inheritance: ``>=0.1.3``
   :depends on numpy: ``>=1.7.1,<=1.15.4``
   :depends on pybedtools: ``>=0.6.2``
   :depends on pysam: ``>=0.6``
   :depends on python: 
   :depends on pyyaml: ``>=3.10``
   :depends on scipy: ``>=0.12.0``
   :depends on sqlalchemy: ``>=1``
   :depends on unidecode: ``>=0.04.14``
   :depends on vcf2db: 
   :depends on vcfanno: 

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

    pixi global install oncogemini

to add into an existing workspace instead, run::

    pixi add oncogemini

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oncogemini

Alternatively, to install into a new environment, run::

    conda create -n envname oncogemini

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oncogemini:<tag>

(see `oncogemini/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oncogemini| image:: https://img.shields.io/conda/dn/bioconda/oncogemini.svg?style=flat
   :target: https://anaconda.org/bioconda/oncogemini
   :alt:   (downloads)
.. |docker_oncogemini| image:: https://quay.io/repository/biocontainers/oncogemini/status
   :target: https://quay.io/repository/biocontainers/oncogemini
.. _`oncogemini/tags`: https://quay.io/repository/biocontainers/oncogemini?tab=tags


.. raw:: html

    <script>
        var package = "oncogemini";
        var versions = ["1.0.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncogemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncogemini/README.html