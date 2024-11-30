:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-hash-util-fieldhash-compat'
.. highlight: bash

perl-hash-util-fieldhash-compat
===============================

.. conda:recipe:: perl-hash-util-fieldhash-compat/0.11
   :replaces_section_title:
   :noindex:

   Use Hash\:\:Util\:\:FieldHash or ties\, depending on availability

   :homepage: https://github.com/karenetheridge/Hash-Util-FieldHash-Compat
   :license: perl_5
   :recipe: /`perl-hash-util-fieldhash-compat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat>`_/`0.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat/0.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-hash-util-fieldhash-compat/0.11/meta.yaml>`_

   


.. conda:package:: perl-hash-util-fieldhash-compat

   |downloads_perl-hash-util-fieldhash-compat| |docker_perl-hash-util-fieldhash-compat|

   :versions:
      
      

      ``0.11-3``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-constant: 
   :depends perl-exporter: 
   :depends perl-parent: 
   :depends perl-tie-refhash: 
   :depends perl-tie-refhash-weak: 
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

      mamba install perl-hash-util-fieldhash-compat

   and update with::

      mamba update perl-hash-util-fieldhash-compat

  To create a new environment, run::

      mamba create --name myenvname perl-hash-util-fieldhash-compat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-hash-util-fieldhash-compat:<tag>

   (see `perl-hash-util-fieldhash-compat/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-hash-util-fieldhash-compat| image:: https://img.shields.io/conda/dn/bioconda/perl-hash-util-fieldhash-compat.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-hash-util-fieldhash-compat
   :alt:   (downloads)
.. |docker_perl-hash-util-fieldhash-compat| image:: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat/status
   :target: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat
.. _`perl-hash-util-fieldhash-compat/tags`: https://quay.io/repository/biocontainers/perl-hash-util-fieldhash-compat?tab=tags


.. raw:: html

    <script>
        var package = "perl-hash-util-fieldhash-compat";
        var versions = ["0.11","0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-hash-util-fieldhash-compat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-hash-util-fieldhash-compat/README.html