:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svanalyzer'
.. highlight: bash

svanalyzer
==========

.. conda:recipe:: svanalyzer
   :replaces_section_title:
   :noindex:

   SVanalyzer\: tools for the analysis of structural variation in genomes

   :homepage: http://svanalyzer.readthedocs.io/
   :license: CC0
   :recipe: /`svanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svanalyzer/meta.yaml>`_

   


.. conda:package:: svanalyzer

   |downloads_svanalyzer| |docker_svanalyzer|

   :versions:
      
      

      ``0.36-2``,  ``0.36-1``,  ``0.36-0``,  ``0.35-0``,  ``0.34-0``,  ``0.33-0``,  ``0.32-0``,  ``0.31-0``,  ``0.3-0``

      

   
   :depends on bedtools: 
   :depends on edlib: 
   :depends on mummer: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-list-moreutils: 
   :depends on perl-log-log4perl: 
   :depends on samtools: 

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

    pixi global install svanalyzer

to add into an existing workspace instead, run::

    pixi add svanalyzer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install svanalyzer

Alternatively, to install into a new environment, run::

    conda create -n envname svanalyzer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/svanalyzer:<tag>

(see `svanalyzer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_svanalyzer| image:: https://img.shields.io/conda/dn/bioconda/svanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/svanalyzer
   :alt:   (downloads)
.. |docker_svanalyzer| image:: https://quay.io/repository/biocontainers/svanalyzer/status
   :target: https://quay.io/repository/biocontainers/svanalyzer
.. _`svanalyzer/tags`: https://quay.io/repository/biocontainers/svanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "svanalyzer";
        var versions = ["0.36","0.36","0.36","0.35","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svanalyzer/README.html