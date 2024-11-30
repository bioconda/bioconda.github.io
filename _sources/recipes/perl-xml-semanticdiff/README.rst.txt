:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-semanticdiff'
.. highlight: bash

perl-xml-semanticdiff
=====================

.. conda:recipe:: perl-xml-semanticdiff
   :replaces_section_title:
   :noindex:

   Perl extension for comparing XML documents.

   :homepage: http://metacpan.org/pod/XML-SemanticDiff
   :license: perl_5
   :recipe: /`perl-xml-semanticdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-semanticdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-semanticdiff/meta.yaml>`_

   


.. conda:package:: perl-xml-semanticdiff

   |downloads_perl-xml-semanticdiff| |docker_perl-xml-semanticdiff|

   :versions:
      
      

      ``1.0007-1``,  ``1.0007-0``,  ``1.0004-2``,  ``1.0004-1``,  ``1.0004-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-md5: 
   :depends perl-encode: 
   :depends perl-xml-parser: 
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

      mamba install perl-xml-semanticdiff

   and update with::

      mamba update perl-xml-semanticdiff

  To create a new environment, run::

      mamba create --name myenvname perl-xml-semanticdiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-semanticdiff:<tag>

   (see `perl-xml-semanticdiff/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-semanticdiff| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-semanticdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-semanticdiff
   :alt:   (downloads)
.. |docker_perl-xml-semanticdiff| image:: https://quay.io/repository/biocontainers/perl-xml-semanticdiff/status
   :target: https://quay.io/repository/biocontainers/perl-xml-semanticdiff
.. _`perl-xml-semanticdiff/tags`: https://quay.io/repository/biocontainers/perl-xml-semanticdiff?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-semanticdiff";
        var versions = ["1.0007","1.0007","1.0004","1.0004","1.0004"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-semanticdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-semanticdiff/README.html