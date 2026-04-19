:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metacompass'
.. highlight: bash

metacompass
===========

.. conda:recipe:: metacompass
   :replaces_section_title:
   :noindex:

   MetaCompass\: Reference\-guided Assembly of Metagenomes.

   :homepage: https://github.com/marbl/MetaCompass
   :documentation: https://github.com/marbl/MetaCompass/wiki
   
   :license: Artistic-License-2.0
   :recipe: /`metacompass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacompass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metacompass/meta.yaml>`_
   :links: biotools: :biotools:`MetaCompass`, doi: :doi:`10.1101/212506`

   


.. conda:package:: metacompass

   |downloads_metacompass| |docker_metacompass|

   :versions:
      
      

      ``1.12-0``

      

   
   :depends on blast: ``>=2.4.0``
   :depends on bowtie2: ``>=2.2.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on megahit: ``>=1.0.6``
   :depends on openjdk: ``>=7``
   :depends on perl: ``>=5.16``
   :depends on python: ``>=3.1``
   :depends on samtools: ``>=1.12``
   :depends on snakemake-minimal: ``>=3.7.1``

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

    pixi global install metacompass

to add into an existing workspace instead, run::

    pixi add metacompass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metacompass

Alternatively, to install into a new environment, run::

    conda create -n envname metacompass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metacompass:<tag>

(see `metacompass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metacompass| image:: https://img.shields.io/conda/dn/bioconda/metacompass.svg?style=flat
   :target: https://anaconda.org/bioconda/metacompass
   :alt:   (downloads)
.. |docker_metacompass| image:: https://quay.io/repository/biocontainers/metacompass/status
   :target: https://quay.io/repository/biocontainers/metacompass
.. _`metacompass/tags`: https://quay.io/repository/biocontainers/metacompass?tab=tags


.. raw:: html

    <script>
        var package = "metacompass";
        var versions = ["1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metacompass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metacompass/README.html