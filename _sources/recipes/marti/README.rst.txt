:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marti'
.. highlight: bash

marti
=====

.. conda:recipe:: marti
   :replaces_section_title:
   :noindex:

   Metagenomic Analysis in Real Time

   :homepage: https://github.com/richardmleggett/MARTi
   :documentation: https://marti.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`marti <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marti>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marti/meta.yaml>`_

   MARTi is a software package designed for performing real\-time analysis of metagenomic samples using nanopore sequencing.If you’re not working in real\-time\, MARTi may still be a quick and easy analysis solution for you. And if you’re not using nanopore sequencing\, you may still benefit from using MARTi to analyse your data.


.. conda:package:: marti

   |downloads_marti| |docker_marti|

   :versions:
      
      

      ``0.9.29-0``,  ``0.9.25-0``,  ``0.9.22-0``,  ``0.9.20-0``,  ``0.9.18-0``,  ``0.9.16-0``,  ``0.9.15-0``,  ``0.9.14-0``

      

   
   :depends on blast: ``>=2.12``
   :depends on nodejs: ``>=14.17.5``
   :depends on openjdk: ``>=16.0.2``

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

    pixi global install marti

to add into an existing workspace instead, run::

    pixi add marti

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install marti

Alternatively, to install into a new environment, run::

    conda create -n envname marti

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/marti:<tag>

(see `marti/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_marti| image:: https://img.shields.io/conda/dn/bioconda/marti.svg?style=flat
   :target: https://anaconda.org/bioconda/marti
   :alt:   (downloads)
.. |docker_marti| image:: https://quay.io/repository/biocontainers/marti/status
   :target: https://quay.io/repository/biocontainers/marti
.. _`marti/tags`: https://quay.io/repository/biocontainers/marti?tab=tags


.. raw:: html

    <script>
        var package = "marti";
        var versions = ["0.9.29","0.9.25","0.9.22","0.9.20","0.9.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marti/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marti/README.html