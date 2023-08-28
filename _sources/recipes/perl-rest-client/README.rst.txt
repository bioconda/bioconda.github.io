:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-rest-client'
.. highlight: bash

perl-rest-client
================

.. conda:recipe:: perl-rest-client
   :replaces_section_title:
   :noindex:

   A simple client for interacting with RESTful http\/https resources

   :homepage: http://metacpan.org/pod/REST::Client
   :license: perl_5
   :recipe: /`perl-rest-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-rest-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-rest-client/meta.yaml>`_

   


.. conda:package:: perl-rest-client

   |downloads_perl-rest-client| |docker_perl-rest-client|

   :versions:
      
      

      ``281-0``,  ``273-1``,  ``273-0``

      

   
   :depends perl-lwp-protocol-https: 
   :depends perl-uri: 
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

      mamba install perl-rest-client

   and update with::

      mamba update perl-rest-client

  To create a new environment, run::

      mamba create --name myenvname perl-rest-client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-rest-client:<tag>

   (see `perl-rest-client/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-rest-client| image:: https://img.shields.io/conda/dn/bioconda/perl-rest-client.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-rest-client
   :alt:   (downloads)
.. |docker_perl-rest-client| image:: https://quay.io/repository/biocontainers/perl-rest-client/status
   :target: https://quay.io/repository/biocontainers/perl-rest-client
.. _`perl-rest-client/tags`: https://quay.io/repository/biocontainers/perl-rest-client?tab=tags


.. raw:: html

    <script>
        var package = "perl-rest-client";
        var versions = ["281","273","273"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-rest-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-rest-client/README.html