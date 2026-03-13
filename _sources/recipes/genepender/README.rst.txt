:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genepender'
.. highlight: bash

genepender
==========

.. conda:recipe:: genepender
   :replaces_section_title:
   :noindex:

   Annotates overlapping BED\-defined regions to variants in a VCF file. Used primarily for providing a gene\/exon context to variants \(see\:bedtarget\).

   :homepage: https://github.com/BioTools-Tek/genepender
   :license: GPLv3
   :recipe: /`genepender <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepender>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genepender/meta.yaml>`_

   


.. conda:package:: genepender

   |downloads_genepender| |docker_genepender|

   :versions:
      
      

      ``v2.6-1``,  ``v2.6-0``

      

   
   :depends on libgcc-ng: ``>=4.9``
   :depends on qt: ``4.8.7.*``

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

    pixi global install genepender

to add into an existing workspace instead, run::

    pixi add genepender

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genepender

Alternatively, to install into a new environment, run::

    conda create -n envname genepender

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genepender:<tag>

(see `genepender/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genepender| image:: https://img.shields.io/conda/dn/bioconda/genepender.svg?style=flat
   :target: https://anaconda.org/bioconda/genepender
   :alt:   (downloads)
.. |docker_genepender| image:: https://quay.io/repository/biocontainers/genepender/status
   :target: https://quay.io/repository/biocontainers/genepender
.. _`genepender/tags`: https://quay.io/repository/biocontainers/genepender?tab=tags


.. raw:: html

    <script>
        var package = "genepender";
        var versions = ["v2.6","v2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genepender/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genepender/README.html