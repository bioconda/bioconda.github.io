:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-parser-lite'
.. highlight: bash

perl-xml-parser-lite
====================

.. conda:recipe:: perl-xml-parser-lite
   :replaces_section_title:
   :noindex:

   Lightweight pure\-perl XML Parser \(based on regexps\)

   :homepage: http://metacpan.org/pod/XML-Parser-Lite
   :license: perl_5
   :recipe: /`perl-xml-parser-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-parser-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-parser-lite/meta.yaml>`_

   


.. conda:package:: perl-xml-parser-lite

   |downloads_perl-xml-parser-lite| |docker_perl-xml-parser-lite|

   :versions:
      
      

      ``0.722-1``,  ``0.722-0``,  ``0.721-2``,  ``0.721-1``,  ``0.721-0``

      

   
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

      mamba install perl-xml-parser-lite

   and update with::

      mamba update perl-xml-parser-lite

  To create a new environment, run::

      mamba create --name myenvname perl-xml-parser-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-parser-lite:<tag>

   (see `perl-xml-parser-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-parser-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-parser-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-parser-lite
   :alt:   (downloads)
.. |docker_perl-xml-parser-lite| image:: https://quay.io/repository/biocontainers/perl-xml-parser-lite/status
   :target: https://quay.io/repository/biocontainers/perl-xml-parser-lite
.. _`perl-xml-parser-lite/tags`: https://quay.io/repository/biocontainers/perl-xml-parser-lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-parser-lite";
        var versions = ["0.722","0.722","0.721","0.721","0.721"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-parser-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-parser-lite/README.html