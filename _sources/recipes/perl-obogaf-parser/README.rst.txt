:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-obogaf-parser'
.. highlight: bash

perl-obogaf-parser
==================

.. conda:recipe:: perl-obogaf-parser
   :replaces_section_title:
   :noindex:

   a perl5 module to handle obo and gaf file

   :homepage: http://metacpan.org/pod/obogaf::parser
   :documentation: https://obogaf-parser.readthedocs.io
   
   :developer docs: https://github.com/marconotaro/obogaf-parser
   :license: perl_5
   :recipe: /`perl-obogaf-parser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-obogaf-parser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-obogaf-parser/meta.yaml>`_

   \[\!\[Documentation Status\]\(https\:\/\/readthedocs.org\/projects\/obogaf\-parser\/badge\/\?version\=latest\)\]\(https\:\/\/obogaf\-parser.readthedocs.io\/en\/latest\/\?badge\=latest\)

   obogaf\-parser is a perl5 module specifically designed to handle GO and HPO obo file and their gene annotation file \(gaf\). However\, obogaf\-parser can be safely used to parse any obo file listed in OBO foundry website and any gaf file structured as those shown in GOA and HPO website \(i.e. a csv file using tab as separator\).




.. conda:package:: perl-obogaf-parser

   |downloads_perl-obogaf-parser| |docker_perl-obogaf-parser|

   :versions:
      
      

      ``1.373-2``,  ``1.373-1``,  ``1.373-0``,  ``1.272-0``,  ``1.271-0``,  ``1.016-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-graph: 
   :depends perl-list-moreutils: 
   :depends perl-perlio-gzip: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-obogaf-parser

   and update with::

      mamba update perl-obogaf-parser

  To create a new environment, run::

      mamba create --name myenvname perl-obogaf-parser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-obogaf-parser:<tag>

   (see `perl-obogaf-parser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-obogaf-parser| image:: https://img.shields.io/conda/dn/bioconda/perl-obogaf-parser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-obogaf-parser
   :alt:   (downloads)
.. |docker_perl-obogaf-parser| image:: https://quay.io/repository/biocontainers/perl-obogaf-parser/status
   :target: https://quay.io/repository/biocontainers/perl-obogaf-parser
.. _`perl-obogaf-parser/tags`: https://quay.io/repository/biocontainers/perl-obogaf-parser?tab=tags


.. raw:: html

    <script>
        var package = "perl-obogaf-parser";
        var versions = ["1.373","1.373","1.373","1.272","1.271"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-obogaf-parser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-obogaf-parser/README.html