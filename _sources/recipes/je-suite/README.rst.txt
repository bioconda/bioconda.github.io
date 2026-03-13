:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'je-suite'
.. highlight: bash

je-suite
========

.. conda:recipe:: je-suite
   :replaces_section_title:
   :noindex:

   Je is a suite to handle barcoded fastq files with \(or without\) Unique Molecule Identifiers \(UMIs\) and filter
   read duplicates using these UMIs


   :homepage: https://gbcs.embl.de/Je
   :license: MIT / MIT License
   :recipe: /`je-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/je-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/je-suite/meta.yaml>`_

   


.. conda:package:: je-suite

   |downloads_je-suite| |docker_je-suite|

   :versions:
      
      

      ``2.0.RC-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends on openjdk: ``>=8``

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

    pixi global install je-suite

to add into an existing workspace instead, run::

    pixi add je-suite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install je-suite

Alternatively, to install into a new environment, run::

    conda create -n envname je-suite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/je-suite:<tag>

(see `je-suite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_je-suite| image:: https://img.shields.io/conda/dn/bioconda/je-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/je-suite
   :alt:   (downloads)
.. |docker_je-suite| image:: https://quay.io/repository/biocontainers/je-suite/status
   :target: https://quay.io/repository/biocontainers/je-suite
.. _`je-suite/tags`: https://quay.io/repository/biocontainers/je-suite?tab=tags


.. raw:: html

    <script>
        var package = "je-suite";
        var versions = ["2.0.RC","1.2","1.2","1.2"];
    </script>





Notes
-----
Je is Java program that comes with a wrapper shell script.
By default \"\-Xmx4G \-Xms256m\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"je \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/je-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/je-suite/README.html