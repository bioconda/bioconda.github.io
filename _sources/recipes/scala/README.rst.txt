:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scala'
.. highlight: bash

scala
=====

.. conda:recipe:: scala
   :replaces_section_title:
   :noindex:

   Scala combines object\-oriented and functional programming in one concise\, high\-level language. Scala\'s static types help avoid bugs in complex applications\, and its JVM and JavaScript runtimes let you build high\-performance systems with easy access to huge ecosystems of libraries.

   :homepage: http://www.scala-lang.org/
   :license: BSD
   :recipe: /`scala <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scala>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scala/meta.yaml>`_

   


.. conda:package:: scala

   |downloads_scala| |docker_scala|

   :versions:
      
      

      ``2.11.8-1``,  ``2.11.8-0``

      

   
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

    pixi global install scala

to add into an existing workspace instead, run::

    pixi add scala

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scala

Alternatively, to install into a new environment, run::

    conda create -n envname scala

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scala:<tag>

(see `scala/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scala| image:: https://img.shields.io/conda/dn/bioconda/scala.svg?style=flat
   :target: https://anaconda.org/bioconda/scala
   :alt:   (downloads)
.. |docker_scala| image:: https://quay.io/repository/biocontainers/scala/status
   :target: https://quay.io/repository/biocontainers/scala
.. _`scala/tags`: https://quay.io/repository/biocontainers/scala?tab=tags


.. raw:: html

    <script>
        var package = "scala";
        var versions = ["2.11.8","2.11.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scala/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scala/README.html