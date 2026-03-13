:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit'
.. highlight: bash

jvarkit
=======

.. conda:recipe:: jvarkit
   :replaces_section_title:
   :noindex:

   Java utilities for Bioinformatics.

   :homepage: https://github.com/lindenb/jvarkit
   :license: MIT / MIT License
   :recipe: /`jvarkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit/meta.yaml>`_
   :links: biotools: :biotools:`jvarkit`, doi: :doi:`10.6084/m9.figshare.1425030`

   


.. conda:package:: jvarkit

   |downloads_jvarkit| |docker_jvarkit|

   :versions:
      
      

      ``2024.08.25-2``,  ``2024.08.25-1``,  ``2024.08.25-0``,  ``2024.08.01-0``,  ``2024.04.20-0``,  ``2023.09.07-0``

      

   
   :depends on bcftools: ``>=1.20``
   :depends on openjdk: ``>=11``
   :depends on samtools: ``>=1.20``

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

    pixi global install jvarkit

to add into an existing workspace instead, run::

    pixi add jvarkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jvarkit

Alternatively, to install into a new environment, run::

    conda create -n envname jvarkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jvarkit:<tag>

(see `jvarkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jvarkit| image:: https://img.shields.io/conda/dn/bioconda/jvarkit.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit
   :alt:   (downloads)
.. |docker_jvarkit| image:: https://quay.io/repository/biocontainers/jvarkit/status
   :target: https://quay.io/repository/biocontainers/jvarkit
.. _`jvarkit/tags`: https://quay.io/repository/biocontainers/jvarkit?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit";
        var versions = ["2024.08.25","2024.08.25","2024.08.25","2024.08.01","2024.04.20"];
    </script>





Notes
-----
jvarkit is Java program that comes with a custom wrapper shell script. This shell wrapper is called \"jvarkit\" and is on \$PATH by default. By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can specify these values directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \"jvarkit \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit/README.html