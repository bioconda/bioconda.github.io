:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-simple'
.. highlight: bash

perl-xml-simple
===============

.. conda:recipe:: perl-xml-simple
   :replaces_section_title:
   :noindex:

   An API for simple XML files

   :homepage: http://metacpan.org/pod/XML-Simple
   :license: perl_5
   :recipe: /`perl-xml-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-simple/meta.yaml>`_

   


.. conda:package:: perl-xml-simple

   |downloads_perl-xml-simple| |docker_perl-xml-simple|

   :versions:
      
      

      ``2.25-2``,  ``2.25-1``,  ``2.25-0``,  ``2.22-3``,  ``2.22-2``,  ``2.22-1``,  ``2.22-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-namespacesupport: 
   :depends perl-xml-sax: 
   :depends perl-xml-sax-expat: 
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

      mamba install perl-xml-simple

   and update with::

      mamba update perl-xml-simple

  To create a new environment, run::

      mamba create --name myenvname perl-xml-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-simple:<tag>

   (see `perl-xml-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-simple
   :alt:   (downloads)
.. |docker_perl-xml-simple| image:: https://quay.io/repository/biocontainers/perl-xml-simple/status
   :target: https://quay.io/repository/biocontainers/perl-xml-simple
.. _`perl-xml-simple/tags`: https://quay.io/repository/biocontainers/perl-xml-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-simple";
        var versions = ["2.25","2.25","2.25","2.22","2.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-simple/README.html