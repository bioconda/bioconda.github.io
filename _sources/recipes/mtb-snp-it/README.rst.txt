:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtb-snp-it'
.. highlight: bash

mtb-snp-it
==========

.. conda:recipe:: mtb-snp-it
   :replaces_section_title:
   :noindex:

   SNP\-IT\: Whole genome SNP based identification of members of the Mycobacterium tuberculosis complex.

   :homepage: https://github.com/samlipworth/snpit
   :license: MIT
   :recipe: /`mtb-snp-it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtb-snp-it>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtb-snp-it/meta.yaml>`_
   :links: doi: :doi:`10.3201/eid2503.180894`

   Whole genome SNP based identification of members of the Mycobacterium tuberculosis complex. 
   Based on code originally written by Samuel Lipworth and turned into a package by Philip Fowler.

   SNP\-IT allows rapid Mycobacterial speciation of VCF or FASTA files aligned to NC000962 \(H37rV\).



.. conda:package:: mtb-snp-it

   |downloads_mtb-snp-it| |docker_mtb-snp-it|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``,  ``0.1.0-0``

      

   
   :depends on biopython: 
   :depends on python: 
   :depends on pyvcf: 

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

    pixi global install mtb-snp-it

to add into an existing workspace instead, run::

    pixi add mtb-snp-it

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mtb-snp-it

Alternatively, to install into a new environment, run::

    conda create -n envname mtb-snp-it

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mtb-snp-it:<tag>

(see `mtb-snp-it/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mtb-snp-it| image:: https://img.shields.io/conda/dn/bioconda/mtb-snp-it.svg?style=flat
   :target: https://anaconda.org/bioconda/mtb-snp-it
   :alt:   (downloads)
.. |docker_mtb-snp-it| image:: https://quay.io/repository/biocontainers/mtb-snp-it/status
   :target: https://quay.io/repository/biocontainers/mtb-snp-it
.. _`mtb-snp-it/tags`: https://quay.io/repository/biocontainers/mtb-snp-it?tab=tags


.. raw:: html

    <script>
        var package = "mtb-snp-it";
        var versions = ["1.1","1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtb-snp-it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtb-snp-it/README.html