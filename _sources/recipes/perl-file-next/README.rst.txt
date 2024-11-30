:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-next'
.. highlight: bash

perl-file-next
==============

.. conda:recipe:: perl-file-next
   :replaces_section_title:
   :noindex:

   File\-finding iterator

   :homepage: http://metacpan.org/pod/File::Next
   :license: artistic_2
   :recipe: /`perl-file-next <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-next>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-next/meta.yaml>`_

   


.. conda:package:: perl-file-next

   |downloads_perl-file-next| |docker_perl-file-next|

   :versions:
      
      

      ``1.18-0``,  ``1.16-2``,  ``1.16-1``,  ``1.16-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-temp: ``>=0.22``
   :depends perl-pathtools: 
   :depends perl-test-simple: 
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

      mamba install perl-file-next

   and update with::

      mamba update perl-file-next

  To create a new environment, run::

      mamba create --name myenvname perl-file-next

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-next:<tag>

   (see `perl-file-next/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-next| image:: https://img.shields.io/conda/dn/bioconda/perl-file-next.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-next
   :alt:   (downloads)
.. |docker_perl-file-next| image:: https://quay.io/repository/biocontainers/perl-file-next/status
   :target: https://quay.io/repository/biocontainers/perl-file-next
.. _`perl-file-next/tags`: https://quay.io/repository/biocontainers/perl-file-next?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-next";
        var versions = ["1.18","1.16","1.16","1.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-next/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-next/README.html