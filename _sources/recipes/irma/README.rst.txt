:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irma'
.. highlight: bash

irma
====

.. conda:recipe:: irma
   :replaces_section_title:
   :noindex:

   IRMA\: Iterative Refinement Meta\-Assembler for the robust assembly\, variant calling\, and phasing of highly variable RNA viruses.

   :homepage: https://wonder.cdc.gov/amd/flu/irma/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`irma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irma/meta.yaml>`_

   


.. conda:package:: irma

   |downloads_irma| |docker_irma|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.4-0``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on blat: ``>=35``
   :depends on fasttree: ``>=2.1.3``
   :depends on minimap2: ``>=2.17``
   :depends on muscle: ``>=3.8.1551``
   :depends on parallel: ``>=20181022``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on pigz: ``>=2.3.4``
   :depends on r-base: ``>=3.5.1``
   :depends on samtools: ``>=1.2``
   :depends on zip: ``>=3.0``

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

    pixi global install irma

to add into an existing workspace instead, run::

    pixi add irma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install irma

Alternatively, to install into a new environment, run::

    conda create -n envname irma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/irma:<tag>

(see `irma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_irma| image:: https://img.shields.io/conda/dn/bioconda/irma.svg?style=flat
   :target: https://anaconda.org/bioconda/irma
   :alt:   (downloads)
.. |docker_irma| image:: https://quay.io/repository/biocontainers/irma/status
   :target: https://quay.io/repository/biocontainers/irma
.. _`irma/tags`: https://quay.io/repository/biocontainers/irma?tab=tags


.. raw:: html

    <script>
        var package = "irma";
        var versions = ["1.2.0","1.1.4","1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irma/README.html