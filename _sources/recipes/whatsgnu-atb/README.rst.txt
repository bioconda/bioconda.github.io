:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whatsgnu-atb'
.. highlight: bash

whatsgnu-atb
============

.. conda:recipe:: whatsgnu-atb
   :replaces_section_title:
   :noindex:

   WhatsGNU protein allele frequency analysis for AllTheBacteria \(2.4M\+ genomes\)

   :homepage: https://github.com/microbialARC/WhatsGNU-ATB
   :documentation: https://allthebacteria.readthedocs.io/en/latest/whatsgnu.html
   
   :license: GPL / GPL-3.0-only
   :recipe: /`whatsgnu-atb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatsgnu-atb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatsgnu-atb/meta.yaml>`_

   A custom reimplementation of WhatsGNU optimised for AllTheBacteria scale.
   Builds an LMDB\-backed sharded database of protein allele frequencies across
   2\,438\,285 bacterial genomes\, and provides fast querying of any bacterial
   genome to obtain per\-protein allele counts and species distributions.
   Includes a downloader for the pre\-built database hosted on OSF.



.. conda:package:: whatsgnu-atb

   |downloads_whatsgnu-atb| |docker_whatsgnu-atb|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on adjusttext: ``>=1.0``
   :depends on matplotlib-base: ``>=3.8``
   :depends on networkx: ``>=3.2``
   :depends on numpy: ``>=2.0``
   :depends on pandas: ``>=2.0``
   :depends on python: ``>=3.10``
   :depends on python-lmdb: ``>=1.4``
   :depends on scipy: ``>=1.12``
   :depends on seaborn-base: ``>=0.13``

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

    pixi global install whatsgnu-atb

to add into an existing workspace instead, run::

    pixi add whatsgnu-atb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install whatsgnu-atb

Alternatively, to install into a new environment, run::

    conda create -n envname whatsgnu-atb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/whatsgnu-atb:<tag>

(see `whatsgnu-atb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_whatsgnu-atb| image:: https://img.shields.io/conda/dn/bioconda/whatsgnu-atb.svg?style=flat
   :target: https://anaconda.org/bioconda/whatsgnu-atb
   :alt:   (downloads)
.. |docker_whatsgnu-atb| image:: https://quay.io/repository/biocontainers/whatsgnu-atb/status
   :target: https://quay.io/repository/biocontainers/whatsgnu-atb
.. _`whatsgnu-atb/tags`: https://quay.io/repository/biocontainers/whatsgnu-atb?tab=tags


.. raw:: html

    <script>
        var package = "whatsgnu-atb";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whatsgnu-atb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whatsgnu-atb/README.html