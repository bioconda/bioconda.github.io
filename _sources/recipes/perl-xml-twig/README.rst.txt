:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-twig'
.. highlight: bash

perl-xml-twig
=============

.. conda:recipe:: perl-xml-twig
   :replaces_section_title:
   :noindex:

   XML\, The Perl Way

   :homepage: http://metacpan.org/pod/XML-Twig
   :license: perl_5
   :recipe: /`perl-xml-twig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-twig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-twig/meta.yaml>`_

   


.. conda:package:: perl-xml-twig

   |downloads_perl-xml-twig| |docker_perl-xml-twig|

   :versions:
      
      

      ``3.52-3``,  ``3.52-2``,  ``3.52-1``,  ``3.49-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-html-entities-numbered: 
   :depends perl-html-formatter: 
   :depends perl-html-parser: 
   :depends perl-html-tidy: 
   :depends perl-html-tree: 
   :depends perl-tie-ixhash: 
   :depends perl-xml-parser: 
   :depends perl-xml-xpathengine: 
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

      mamba install perl-xml-twig

   and update with::

      mamba update perl-xml-twig

  To create a new environment, run::

      mamba create --name myenvname perl-xml-twig

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-twig:<tag>

   (see `perl-xml-twig/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-twig| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-twig.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-twig
   :alt:   (downloads)
.. |docker_perl-xml-twig| image:: https://quay.io/repository/biocontainers/perl-xml-twig/status
   :target: https://quay.io/repository/biocontainers/perl-xml-twig
.. _`perl-xml-twig/tags`: https://quay.io/repository/biocontainers/perl-xml-twig?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-twig";
        var versions = ["3.52","3.52","3.52","3.49"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-twig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-twig/README.html