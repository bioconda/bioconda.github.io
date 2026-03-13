:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'start-asap'
.. highlight: bash

start-asap
==========

.. conda:recipe:: start-asap
   :replaces_section_title:
   :noindex:

   Prepare project directory and project sheet for ASA3P

   :homepage: http://github.com/quadram-institute-bioscience/start-asap/
   :license: MIT
   :recipe: /`start-asap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/start-asap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/start-asap/meta.yaml>`_
   :links: biotools: :biotools:`start-asap`

   Prepare the input directory for \'ASA3P\'\, creating automatically a \_config.xls\_ file from the reads provided.
   Requires one or more reference files \(.gbk recommended\) and a directory with FASTQ files \(.fq or .fastq\, gzipped\).
   Metadata can be supplied via command line or with a JSON file.



.. conda:package:: start-asap

   |downloads_start-asap| |docker_start-asap|

   :versions:
      
      

      ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on perl: 
   :depends on perl-getopt-long: 
   :depends on perl-json-pp: 
   :depends on perl-pod-usage: 
   :depends on perl-spreadsheet-writeexcel: 

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

    pixi global install start-asap

to add into an existing workspace instead, run::

    pixi add start-asap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install start-asap

Alternatively, to install into a new environment, run::

    conda create -n envname start-asap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/start-asap:<tag>

(see `start-asap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_start-asap| image:: https://img.shields.io/conda/dn/bioconda/start-asap.svg?style=flat
   :target: https://anaconda.org/bioconda/start-asap
   :alt:   (downloads)
.. |docker_start-asap| image:: https://quay.io/repository/biocontainers/start-asap/status
   :target: https://quay.io/repository/biocontainers/start-asap
.. _`start-asap/tags`: https://quay.io/repository/biocontainers/start-asap?tab=tags


.. raw:: html

    <script>
        var package = "start-asap";
        var versions = ["1.3.0","1.3.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/start-asap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/start-asap/README.html