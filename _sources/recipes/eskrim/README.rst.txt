:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eskrim'
.. highlight: bash

eskrim
======

.. conda:recipe:: eskrim
   :replaces_section_title:
   :noindex:

   ESKRIM\: EStimate with K\-mers the RIchness in a Microbiome.

   :homepage: https://forgemia.inra.fr/metagenopolis/eskrim
   :developer docs: https://github.com/metagenopolis/ESKRIM
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`eskrim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eskrim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eskrim/meta.yaml>`_

   ESKRIM is a reference\-free tool that compares microbial richness in shotgun metagenomic samples by counting k\-mers.


.. conda:package:: eskrim

   |downloads_eskrim| |docker_eskrim|

   :versions:
      
      

      ``1.0.9-1``,  ``1.0.9-0``

      

   
   :depends on kmer-jellyfish: ``>=2.3.1``
   :depends on python: ``>=3.12,<3.13``

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

    pixi global install eskrim

to add into an existing workspace instead, run::

    pixi add eskrim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eskrim

Alternatively, to install into a new environment, run::

    conda create -n envname eskrim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eskrim:<tag>

(see `eskrim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eskrim| image:: https://img.shields.io/conda/dn/bioconda/eskrim.svg?style=flat
   :target: https://anaconda.org/bioconda/eskrim
   :alt:   (downloads)
.. |docker_eskrim| image:: https://quay.io/repository/biocontainers/eskrim/status
   :target: https://quay.io/repository/biocontainers/eskrim
.. _`eskrim/tags`: https://quay.io/repository/biocontainers/eskrim?tab=tags


.. raw:: html

    <script>
        var package = "eskrim";
        var versions = ["1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eskrim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eskrim/README.html