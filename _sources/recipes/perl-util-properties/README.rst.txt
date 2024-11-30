:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-util-properties'
.. highlight: bash

perl-util-properties
====================

.. conda:recipe:: perl-util-properties
   :replaces_section_title:
   :noindex:

   Java.util.properties like class

   :homepage: http://metacpan.org/pod/Util::Properties
   :license: open_source
   :recipe: /`perl-util-properties <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-util-properties>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-util-properties/meta.yaml>`_

   


.. conda:package:: perl-util-properties

   |downloads_perl-util-properties| |docker_perl-util-properties|

   :versions:
      
      

      ``0.18-1``,  ``0.18-0``

      

   
   :depends perl-digest-md5-file: 
   :depends perl-io-all: 
   :depends perl-lockfile-simple: 
   :depends perl-object-insideout: 
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

      mamba install perl-util-properties

   and update with::

      mamba update perl-util-properties

  To create a new environment, run::

      mamba create --name myenvname perl-util-properties

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-util-properties:<tag>

   (see `perl-util-properties/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-util-properties| image:: https://img.shields.io/conda/dn/bioconda/perl-util-properties.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-util-properties
   :alt:   (downloads)
.. |docker_perl-util-properties| image:: https://quay.io/repository/biocontainers/perl-util-properties/status
   :target: https://quay.io/repository/biocontainers/perl-util-properties
.. _`perl-util-properties/tags`: https://quay.io/repository/biocontainers/perl-util-properties?tab=tags


.. raw:: html

    <script>
        var package = "perl-util-properties";
        var versions = ["0.18","0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-util-properties/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-util-properties/README.html