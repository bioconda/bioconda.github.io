:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msfragger'
.. highlight: bash

msfragger
=========

.. conda:recipe:: msfragger
   :replaces_section_title:
   :noindex:

   Ultrafast\, comprehensive peptide identification for mass spectrometry–based proteomics

   :homepage: https://github.com/Nesvilab/MSFragger
   :license: Academic License
   :recipe: /`msfragger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msfragger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msfragger/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4256`, doi: :doi:`10.1038/s41467-020-17921-y`, doi: :doi:`10.1038/s41592-020-0967-9`

   MSFragger is an ultrafast database search tool for peptide identification in mass spectrometry\-based proteomics.
   It has demonstrated excellent performance across a wide range of datasets and applications.
   MSFragger is suitable for standard shotgun proteomics analyses as well as large datasets \(including timsTOF PASEF data\)\,
   enzyme unconstrained searches \(e.g.\, peptidome\)\,
   open database searches \(e.g.\, precursor mass tolerance set to hundreds of Daltons\) for identification
   of modified peptides\, and glycopeptide identification \(N\-linked and O\-linked\).

   MSFragger is available freely for academic research and educational purposes only\, in accordance with the terms at https\:\/\/msfragger.arsci.com\/upgrader\/MSFragger\-LICENSE.pdf.



.. conda:package:: msfragger

   |downloads_msfragger| |docker_msfragger|

   :versions:
      
      

      ``4.2-0``,  ``4.1-0``,  ``4.0-1``,  ``4.0-0``

      

   
   :depends on mono: ``>=5,<6``
   :depends on openjdk: ``>=11``
   :depends on python: ``3.11.*``
   :depends on zlib: ``>=1.2.13``

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

    pixi global install msfragger

to add into an existing workspace instead, run::

    pixi add msfragger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msfragger

Alternatively, to install into a new environment, run::

    conda create -n envname msfragger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msfragger:<tag>

(see `msfragger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msfragger| image:: https://img.shields.io/conda/dn/bioconda/msfragger.svg?style=flat
   :target: https://anaconda.org/bioconda/msfragger
   :alt:   (downloads)
.. |docker_msfragger| image:: https://quay.io/repository/biocontainers/msfragger/status
   :target: https://quay.io/repository/biocontainers/msfragger
.. _`msfragger/tags`: https://quay.io/repository/biocontainers/msfragger?tab=tags


.. raw:: html

    <script>
        var package = "msfragger";
        var versions = ["4.2","4.1","4.0","4.0"];
    </script>





Notes
-----
The \"msfragger\" command runs the MSFragger java program.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msfragger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msfragger/README.html