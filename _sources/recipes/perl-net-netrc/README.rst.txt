:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-net-netrc'
.. highlight: bash

perl-net-netrc
==============

.. conda:recipe:: perl-net-netrc/2.14
   :replaces_section_title:
   :noindex:

   OO interface to users netrc file

   :homepage: http://metacpan.org/pod/Net::Netrc
   :license: perl_5
   :recipe: /`perl-net-netrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-netrc>`_/`2.14 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-netrc/2.14>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-netrc/2.14/meta.yaml>`_

   


.. conda:package:: perl-net-netrc

   |downloads_perl-net-netrc| |docker_perl-net-netrc|

   :versions:
      
      

      ``2.14-2``,  ``2.14-1``,  ``2.14-0``

      

   
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

      mamba install perl-net-netrc

   and update with::

      mamba update perl-net-netrc

  To create a new environment, run::

      mamba create --name myenvname perl-net-netrc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-net-netrc:<tag>

   (see `perl-net-netrc/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-net-netrc| image:: https://img.shields.io/conda/dn/bioconda/perl-net-netrc.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-net-netrc
   :alt:   (downloads)
.. |docker_perl-net-netrc| image:: https://quay.io/repository/biocontainers/perl-net-netrc/status
   :target: https://quay.io/repository/biocontainers/perl-net-netrc
.. _`perl-net-netrc/tags`: https://quay.io/repository/biocontainers/perl-net-netrc?tab=tags


.. raw:: html

    <script>
        var package = "perl-net-netrc";
        var versions = ["2.14","2.14","2.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-netrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-netrc/README.html