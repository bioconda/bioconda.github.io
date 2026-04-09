:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'copybara-cf'
.. highlight: bash

copybara-cf
===========

.. conda:recipe:: copybara-cf
   :replaces_section_title:
   :noindex:

   COPYBARA \- copy number analysis for long\-read cfDNA sequencing data

   :homepage: https://github.com/cortes-ciriano-lab/copybara-cf
   :license: APACHE / Apache-2.0
   :recipe: /`copybara-cf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/copybara-cf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/copybara-cf/meta.yaml>`_

   


.. conda:package:: copybara-cf

   |downloads_copybara-cf| |docker_copybara-cf|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on intervaltree: 
   :depends on matplotlib-base: ``>=3.7.1``
   :depends on numpy: 
   :depends on pandas: ``>=2.0.0``
   :depends on pybedtools: ``>=0.9.0``
   :depends on pysam: ``>=0.20.0``
   :depends on python: ``>=3.9``
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 

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

    pixi global install copybara-cf

to add into an existing workspace instead, run::

    pixi add copybara-cf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install copybara-cf

Alternatively, to install into a new environment, run::

    conda create -n envname copybara-cf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/copybara-cf:<tag>

(see `copybara-cf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_copybara-cf| image:: https://img.shields.io/conda/dn/bioconda/copybara-cf.svg?style=flat
   :target: https://anaconda.org/bioconda/copybara-cf
   :alt:   (downloads)
.. |docker_copybara-cf| image:: https://quay.io/repository/biocontainers/copybara-cf/status
   :target: https://quay.io/repository/biocontainers/copybara-cf
.. _`copybara-cf/tags`: https://quay.io/repository/biocontainers/copybara-cf?tab=tags


.. raw:: html

    <script>
        var package = "copybara-cf";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/copybara-cf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/copybara-cf/README.html