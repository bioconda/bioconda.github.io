:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-version-next'
.. highlight: bash

perl-version-next
=================

.. conda:recipe:: perl-version-next
   :replaces_section_title:
   :noindex:

   increment module version numbers simply and correctly

   :homepage: https://github.com/dagolden/Version-Next
   :license: apache_2_0
   :recipe: /`perl-version-next <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next/meta.yaml>`_

   


.. conda:package:: perl-version-next

   |downloads_perl-version-next| |docker_perl-version-next|

   :versions:
      
      

      ``1.000-3``,  ``1.000-2``,  ``1.000-1``,  ``1.000-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-apache-test: 
   :depends perl-perl-version: 
   :depends perl-sub-exporter: 
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

      mamba install perl-version-next

   and update with::

      mamba update perl-version-next

  To create a new environment, run::

      mamba create --name myenvname perl-version-next

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-version-next:<tag>

   (see `perl-version-next/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-version-next| image:: https://img.shields.io/conda/dn/bioconda/perl-version-next.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-version-next
   :alt:   (downloads)
.. |docker_perl-version-next| image:: https://quay.io/repository/biocontainers/perl-version-next/status
   :target: https://quay.io/repository/biocontainers/perl-version-next
.. _`perl-version-next/tags`: https://quay.io/repository/biocontainers/perl-version-next?tab=tags


.. raw:: html

    <script>
        var package = "perl-version-next";
        var versions = ["1.000","1.000","1.000","1.000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-version-next/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-version-next/README.html