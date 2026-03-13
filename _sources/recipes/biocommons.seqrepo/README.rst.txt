:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biocommons.seqrepo'
.. highlight: bash

biocommons.seqrepo
==================

.. conda:recipe:: biocommons.seqrepo
   :replaces_section_title:
   :noindex:

   Python package for writing and reading a local collection of biological sequences.

   :homepage: https://github.com/biocommons/biocommons.seqrepo
   :documentation: https://github.com/biocommons/biocommons.seqrepo/blob/0.6.11/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`biocommons.seqrepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocommons.seqrepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biocommons.seqrepo/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0239883`

   


.. conda:package:: biocommons.seqrepo

   |downloads_biocommons.seqrepo| |docker_biocommons.seqrepo|

   :versions:
      
      

      ``0.6.11-0``,  ``0.6.9-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``

      

   
   :depends on bioutils: ``>0.4``
   :depends on coloredlogs: 
   :depends on ipython: 
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on requests: 
   :depends on requests-html: 
   :depends on tqdm: 
   :depends on typing-extensions: 
   :depends on yoyo-migrations: 

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

    pixi global install biocommons.seqrepo

to add into an existing workspace instead, run::

    pixi add biocommons.seqrepo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biocommons.seqrepo

Alternatively, to install into a new environment, run::

    conda create -n envname biocommons.seqrepo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biocommons.seqrepo:<tag>

(see `biocommons.seqrepo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biocommons.seqrepo| image:: https://img.shields.io/conda/dn/bioconda/biocommons.seqrepo.svg?style=flat
   :target: https://anaconda.org/bioconda/biocommons.seqrepo
   :alt:   (downloads)
.. |docker_biocommons.seqrepo| image:: https://quay.io/repository/biocontainers/biocommons.seqrepo/status
   :target: https://quay.io/repository/biocontainers/biocommons.seqrepo
.. _`biocommons.seqrepo/tags`: https://quay.io/repository/biocontainers/biocommons.seqrepo?tab=tags


.. raw:: html

    <script>
        var package = "biocommons.seqrepo";
        var versions = ["0.6.11","0.6.9","0.6.7","0.6.6","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biocommons.seqrepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biocommons.seqrepo/README.html