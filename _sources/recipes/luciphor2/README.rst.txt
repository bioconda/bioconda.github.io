:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'luciphor2'
.. highlight: bash

luciphor2
=========

.. conda:recipe:: luciphor2
   :replaces_section_title:
   :noindex:

   Luciphor2 performs PTM\-site localization on MS\/MS data

   :homepage: http://luciphor2.sourceforge.net/
   :license: Apache-2.0
   :recipe: /`luciphor2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/luciphor2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/luciphor2/meta.yaml>`_

   


.. conda:package:: luciphor2

   |downloads_luciphor2| |docker_luciphor2|

   :versions:
      
      

      ``2020_04_03-1``,  ``2020_04_03-0``,  ``2018_06_28-1``,  ``2018_06_28-0``

      

   
   :depends on openjdk: ``>=6``

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

    pixi global install luciphor2

to add into an existing workspace instead, run::

    pixi add luciphor2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install luciphor2

Alternatively, to install into a new environment, run::

    conda create -n envname luciphor2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/luciphor2:<tag>

(see `luciphor2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_luciphor2| image:: https://img.shields.io/conda/dn/bioconda/luciphor2.svg?style=flat
   :target: https://anaconda.org/bioconda/luciphor2
   :alt:   (downloads)
.. |docker_luciphor2| image:: https://quay.io/repository/biocontainers/luciphor2/status
   :target: https://quay.io/repository/biocontainers/luciphor2
.. _`luciphor2/tags`: https://quay.io/repository/biocontainers/luciphor2?tab=tags


.. raw:: html

    <script>
        var package = "luciphor2";
        var versions = ["2020_04_03","2020_04_03","2018_06_28","2018_06_28"];
    </script>





Notes
-----
Adds a wrapper shell script \"luciphor2\".
This shell wrapper is called \"luciphor2\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run with \"luciphor \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/luciphor2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/luciphor2/README.html