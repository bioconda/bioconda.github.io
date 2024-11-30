:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-quotedprint'
.. highlight: bash

perl-mime-quotedprint
=====================

.. conda:recipe:: perl-mime-quotedprint/3.13
   :replaces_section_title:
   :noindex:

   Encoding and decoding of quoted\-printable strings

   :homepage: http://metacpan.org/pod/MIME::QuotedPrint
   :license: perl_5
   :recipe: /`perl-mime-quotedprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-quotedprint>`_/`3.13 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-quotedprint/3.13>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-quotedprint/3.13/meta.yaml>`_

   


.. conda:package:: perl-mime-quotedprint

   |downloads_perl-mime-quotedprint| |docker_perl-mime-quotedprint|

   :versions:
      
      

      ``3.13-2``,  ``3.13-1``,  ``3.13-0``

      

   
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

      mamba install perl-mime-quotedprint

   and update with::

      mamba update perl-mime-quotedprint

  To create a new environment, run::

      mamba create --name myenvname perl-mime-quotedprint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mime-quotedprint:<tag>

   (see `perl-mime-quotedprint/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mime-quotedprint| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-quotedprint.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-quotedprint
   :alt:   (downloads)
.. |docker_perl-mime-quotedprint| image:: https://quay.io/repository/biocontainers/perl-mime-quotedprint/status
   :target: https://quay.io/repository/biocontainers/perl-mime-quotedprint
.. _`perl-mime-quotedprint/tags`: https://quay.io/repository/biocontainers/perl-mime-quotedprint?tab=tags


.. raw:: html

    <script>
        var package = "perl-mime-quotedprint";
        var versions = ["3.13","3.13","3.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-quotedprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-quotedprint/README.html