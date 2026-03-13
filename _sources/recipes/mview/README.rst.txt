:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mview'
.. highlight: bash

mview
=====

.. conda:recipe:: mview
   :replaces_section_title:
   :noindex:

   MView extracts and reformats the results of a sequence database search or multiple alignment.

   :homepage: https://desmid.github.io/mview
   :documentation: https://desmid.github.io/mview/contents.html
   
   :developer docs: https://github.com/desmid/mview
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`mview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mview/meta.yaml>`_

   MView is a command line utility that extracts and reformats the results of a sequence database search or a multiple alignment\,
   optionally adding HTML markup for web page layout. It can also be used as a filter to extract and convert searches or alignments to common formats.

   Inputs\:
     \- Sequence database search\: BLAST\, FASTA suites.
     \- Multiple sequence alignment\: CLUSTAL\, HSSP\, MSF\, FASTA\, PIR\, MAF.

   Outputs\:
     \- HTML\, FASTA\, CLUSTAL\, MSF\, PIR\, RDB \(tab\-separated\).

   The tool is used in molecular biology and biomedical research for data analyses and as a component in various bioinformatics web services.
   Research papers citing MView are indexed on \[Google Scholar\]\(https\:\/\/scholar.google.com\/citations\?user\=4ughzM0AAAAJ\&hl\=en\).



.. conda:package:: mview

   |downloads_mview| |docker_mview|

   :versions:
      
      

      ``1.68-0``

      

   
   :depends on perl: ``>=5.0,<6.0``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install mview

to add into an existing workspace instead, run::

    pixi add mview

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mview

Alternatively, to install into a new environment, run::

    conda create -n envname mview

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mview:<tag>

(see `mview/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mview| image:: https://img.shields.io/conda/dn/bioconda/mview.svg?style=flat
   :target: https://anaconda.org/bioconda/mview
   :alt:   (downloads)
.. |docker_mview| image:: https://quay.io/repository/biocontainers/mview/status
   :target: https://quay.io/repository/biocontainers/mview
.. _`mview/tags`: https://quay.io/repository/biocontainers/mview?tab=tags


.. raw:: html

    <script>
        var package = "mview";
        var versions = ["1.68"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mview/README.html