:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snpsplit'
.. highlight: bash

snpsplit
========

.. conda:recipe:: snpsplit
   :replaces_section_title:
   :noindex:

   SNPsplit is an allele\-specific alignment sorter which is designed to read in alignment files in SAM\/BAM format and determine the allelic origin of reads that cover known SNP positions.

   :homepage: https://github.com/FelixKrueger/SNPsplit
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`snpsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snpsplit/meta.yaml>`_
   :links: doi: :doi:`10.12688/f1000research.9037.2`

   


.. conda:package:: snpsplit

   |downloads_snpsplit| |docker_snpsplit|

   :versions:
      
      

      ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``

      

   
   :depends on perl: 
   :depends on samtools: ``>=1.7``

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

    pixi global install snpsplit

to add into an existing workspace instead, run::

    pixi add snpsplit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snpsplit

Alternatively, to install into a new environment, run::

    conda create -n envname snpsplit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snpsplit:<tag>

(see `snpsplit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snpsplit| image:: https://img.shields.io/conda/dn/bioconda/snpsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/snpsplit
   :alt:   (downloads)
.. |docker_snpsplit| image:: https://quay.io/repository/biocontainers/snpsplit/status
   :target: https://quay.io/repository/biocontainers/snpsplit
.. _`snpsplit/tags`: https://quay.io/repository/biocontainers/snpsplit?tab=tags


.. raw:: html

    <script>
        var package = "snpsplit";
        var versions = ["0.6.0","0.5.0","0.4.0","0.4.0","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snpsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snpsplit/README.html