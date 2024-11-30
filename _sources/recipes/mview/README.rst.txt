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

      

   
   :depends perl: ``>=5.0,<6.0``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mview

   and update with::

      mamba update mview

  To create a new environment, run::

      mamba create --name myenvname mview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mview:<tag>

   (see `mview/tags`_ for valid values for ``<tag>``)


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