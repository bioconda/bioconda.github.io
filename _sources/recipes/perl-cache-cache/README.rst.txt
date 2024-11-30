:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-cache-cache'
.. highlight: bash

perl-cache-cache
================

.. conda:recipe:: perl-cache-cache
   :replaces_section_title:
   :noindex:

   extends Cache\:\:SizeAwareMemoryCache

   :homepage: http://metacpan.org/pod/Cache::Cache
   :license: unknown
   :recipe: /`perl-cache-cache <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cache-cache>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-cache-cache/meta.yaml>`_

   


.. conda:package:: perl-cache-cache

   |downloads_perl-cache-cache| |docker_perl-cache-cache|

   :versions:
      
      

      ``1.08-1``,  ``1.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-sha1: 
   :depends perl-error: 
   :depends perl-ipc-sharelite: 
   :depends perl-storable: 
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

      mamba install perl-cache-cache

   and update with::

      mamba update perl-cache-cache

  To create a new environment, run::

      mamba create --name myenvname perl-cache-cache

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-cache-cache:<tag>

   (see `perl-cache-cache/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-cache-cache| image:: https://img.shields.io/conda/dn/bioconda/perl-cache-cache.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-cache-cache
   :alt:   (downloads)
.. |docker_perl-cache-cache| image:: https://quay.io/repository/biocontainers/perl-cache-cache/status
   :target: https://quay.io/repository/biocontainers/perl-cache-cache
.. _`perl-cache-cache/tags`: https://quay.io/repository/biocontainers/perl-cache-cache?tab=tags


.. raw:: html

    <script>
        var package = "perl-cache-cache";
        var versions = ["1.08","1.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-cache-cache/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-cache-cache/README.html