:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bftools'
.. highlight: bash

bftools
=======

.. conda:recipe:: bftools
   :replaces_section_title:
   :noindex:

   Bio\-Formats Command line tools

   :homepage: https://docs.openmicroscopy.org/bio-formats/8.0.0/users/comlinetools/index.html
   :license: GNU copyleft License
   :recipe: /`bftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bftools/meta.yaml>`_

   


.. conda:package:: bftools

   |downloads_bftools| |docker_bftools|

   :versions:
      
      

      ``8.0.0-0``,  ``6.7.0-0``,  ``5.7.1-1``,  ``5.7.1-0``

      

   
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

    pixi global install bftools

to add into an existing workspace instead, run::

    pixi add bftools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bftools

Alternatively, to install into a new environment, run::

    conda create -n envname bftools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bftools:<tag>

(see `bftools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bftools| image:: https://img.shields.io/conda/dn/bioconda/bftools.svg?style=flat
   :target: https://anaconda.org/bioconda/bftools
   :alt:   (downloads)
.. |docker_bftools| image:: https://quay.io/repository/biocontainers/bftools/status
   :target: https://quay.io/repository/biocontainers/bftools
.. _`bftools/tags`: https://quay.io/repository/biocontainers/bftools?tab=tags


.. raw:: html

    <script>
        var package = "bftools";
        var versions = ["8.0.0","6.7.0","5.7.1","5.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bftools/README.html