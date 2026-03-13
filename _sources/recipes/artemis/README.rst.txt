:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'artemis'
.. highlight: bash

artemis
=======

.. conda:recipe:: artemis
   :replaces_section_title:
   :noindex:

   A set of Java genome visualization tools including the Artemis genome browser \& annotation tool\, ACT DNA sequence comparison viewer\, DNA Plotter image generation tool and the BamView BAM\/CRAM file viewer.

   :homepage: http://sanger-pathogens.github.io/Artemis/
   :license: GPL / GPL-3.0
   :recipe: /`artemis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artemis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/artemis/meta.yaml>`_
   :links: biotools: :biotools:`artemis`

   


.. conda:package:: artemis

   |downloads_artemis| |docker_artemis|

   :versions:
      
      

      ``18.2.0-0``,  ``18.1.0-1``,  ``18.1.0-0``,  ``18.0.3-0``,  ``18.0.2-0``,  ``18.0.1-0``

      

   
   :depends on openjdk: ``>=9``

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

    pixi global install artemis

to add into an existing workspace instead, run::

    pixi add artemis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install artemis

Alternatively, to install into a new environment, run::

    conda create -n envname artemis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/artemis:<tag>

(see `artemis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_artemis| image:: https://img.shields.io/conda/dn/bioconda/artemis.svg?style=flat
   :target: https://anaconda.org/bioconda/artemis
   :alt:   (downloads)
.. |docker_artemis| image:: https://quay.io/repository/biocontainers/artemis/status
   :target: https://quay.io/repository/biocontainers/artemis
.. _`artemis/tags`: https://quay.io/repository/biocontainers/artemis?tab=tags


.. raw:: html

    <script>
        var package = "artemis";
        var versions = ["18.2.0","18.1.0","18.1.0","18.0.3","18.0.2"];
    </script>





Notes
-----
The applications can be run using the following commands\: art\, act\, dnaplotter or bamview


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/artemis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/artemis/README.html