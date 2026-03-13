:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-validatevcf'
.. highlight: bash

biopet-validatevcf
==================

.. conda:recipe:: biopet-validatevcf
   :replaces_section_title:
   :noindex:

   ValidateVcf validates a VCF file against a reference genomes.

   :homepage: https://github.com/biopet/validatevcf
   :license: MIT
   :recipe: /`biopet-validatevcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatevcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-validatevcf/meta.yaml>`_

   ValidateVcf validates a VCF file against a reference genomes. It checks if the positions
   present in the VCF are also present on the reference genoome.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/validatevcf


.. conda:package:: biopet-validatevcf

   |downloads_biopet-validatevcf| |docker_biopet-validatevcf|

   :versions:
      
      

      ``0.1-1``,  ``0.1-0``

      

   
   :depends on openjdk: ``>=8,<9``
   :depends on python: 

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

    pixi global install biopet-validatevcf

to add into an existing workspace instead, run::

    pixi add biopet-validatevcf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-validatevcf

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-validatevcf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-validatevcf:<tag>

(see `biopet-validatevcf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-validatevcf| image:: https://img.shields.io/conda/dn/bioconda/biopet-validatevcf.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-validatevcf
   :alt:   (downloads)
.. |docker_biopet-validatevcf| image:: https://quay.io/repository/biocontainers/biopet-validatevcf/status
   :target: https://quay.io/repository/biocontainers/biopet-validatevcf
.. _`biopet-validatevcf/tags`: https://quay.io/repository/biocontainers/biopet-validatevcf?tab=tags


.. raw:: html

    <script>
        var package = "biopet-validatevcf";
        var versions = ["0.1","0.1"];
    </script>





Notes
-----
biopet\-validatevcf is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-validatevcf\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-validatevcf \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-validatevcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-validatevcf/README.html