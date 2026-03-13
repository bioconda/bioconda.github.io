:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fscanr'
.. highlight: bash

bioconductor-fscanr
===================

.. conda:recipe:: bioconductor-fscanr
   :replaces_section_title:
   :noindex:

   Detect Programmed Ribosomal Frameshifting Events from mRNA\/cDNA BLASTX Output

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/FScanR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fscanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fscanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fscanr/meta.yaml>`_

   \'FScanR\' identifies Programmed Ribosomal Frameshifting \(PRF\) events from BLASTX homolog sequence alignment between targeted genomic\/cDNA\/mRNA sequences against the peptide library of the same species or a close relative. The output by BLASTX or diamond BLASTX will be used as input of \'FScanR\' and should be in a tabular format with 14 columns. For BLASTX\, the output parameter should be\: \-outfmt \'6 qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore qframe sframe\'. For diamond BLASTX\, the output parameter should be\: \-outfmt 6 qseqid sseqid pident length mismatch gapopen qstart qend sstart send evalue bitscore qframe qframe.


.. conda:package:: bioconductor-fscanr

   |downloads_bioconductor-fscanr| |docker_bioconductor-fscanr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-fscanr

to add into an existing workspace instead, run::

    pixi add bioconductor-fscanr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fscanr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fscanr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fscanr:<tag>

(see `bioconductor-fscanr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fscanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fscanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fscanr
   :alt:   (downloads)
.. |docker_bioconductor-fscanr| image:: https://quay.io/repository/biocontainers/bioconductor-fscanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fscanr
.. _`bioconductor-fscanr/tags`: https://quay.io/repository/biocontainers/bioconductor-fscanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fscanr";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fscanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fscanr/README.html