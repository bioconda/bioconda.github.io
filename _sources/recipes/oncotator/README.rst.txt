:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncotator'
.. highlight: bash

oncotator
=========

.. conda:recipe:: oncotator
   :replaces_section_title:
   :noindex:

   Oncotator is a tool for annotating human genomic point mutations and indels with data relevant to cancer researchers.

   :homepage: https://github.com/broadinstitute/oncotator
   :documentation: https://gatkforums.broadinstitute.org/gatk/categories/oncotator-documentation
   
   :license: Custom OSS
   :recipe: /`oncotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncotator/meta.yaml>`_
   :links: doi: :doi:`10.1002/humu.22771`

   


.. conda:package:: oncotator

   |downloads_oncotator| |docker_oncotator|

   :versions:
      
      

      ``1.9.9.0-2``,  ``1.9.9.0-1``,  ``1.9.9.0-0``

      

   
   :depends on bcbio-gff: ``0.6.2``
   :depends on biopython: ``1.66``
   :depends on enum34: ``1.1.2``
   :depends on futures: 
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on more-itertools: ``2.2``
   :depends on natsort: ``4.0.4``
   :depends on numpy: ``1.11.0``
   :depends on pandas: ``0.18.0``
   :depends on pysam: ``0.9.0``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python-memcached: ``1.57``
   :depends on pyvcf: ``0.6.8``
   :depends on shove: ``0.6.6``
   :depends on sqlalchemy: ``1.0.12``

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

    pixi global install oncotator

to add into an existing workspace instead, run::

    pixi add oncotator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oncotator

Alternatively, to install into a new environment, run::

    conda create -n envname oncotator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oncotator:<tag>

(see `oncotator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oncotator| image:: https://img.shields.io/conda/dn/bioconda/oncotator.svg?style=flat
   :target: https://anaconda.org/bioconda/oncotator
   :alt:   (downloads)
.. |docker_oncotator| image:: https://quay.io/repository/biocontainers/oncotator/status
   :target: https://quay.io/repository/biocontainers/oncotator
.. _`oncotator/tags`: https://quay.io/repository/biocontainers/oncotator?tab=tags


.. raw:: html

    <script>
        var package = "oncotator";
        var versions = ["1.9.9.0","1.9.9.0","1.9.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncotator/README.html