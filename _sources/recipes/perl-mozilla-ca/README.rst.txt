:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mozilla-ca'
.. highlight: bash

perl-mozilla-ca
===============

.. conda:recipe:: perl-mozilla-ca
   :replaces_section_title:
   :noindex:

   Mozilla\'s CA cert bundle in PEM format

   :homepage: http://metacpan.org/pod/Mozilla::CA
   :license: unknown
   :recipe: /`perl-mozilla-ca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mozilla-ca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mozilla-ca/meta.yaml>`_

   


.. conda:package:: perl-mozilla-ca

   |downloads_perl-mozilla-ca| |docker_perl-mozilla-ca|

   :versions:
      
      

      ``20211001-0``,  ``20180117-2``,  ``20180117-1``,  ``20180117-0``,  ``20160104-2``,  ``20160104-1``,  ``20160104-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-mozilla-ca

   and update with::

      mamba update perl-mozilla-ca

  To create a new environment, run::

      mamba create --name myenvname perl-mozilla-ca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mozilla-ca:<tag>

   (see `perl-mozilla-ca/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mozilla-ca| image:: https://img.shields.io/conda/dn/bioconda/perl-mozilla-ca.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mozilla-ca
   :alt:   (downloads)
.. |docker_perl-mozilla-ca| image:: https://quay.io/repository/biocontainers/perl-mozilla-ca/status
   :target: https://quay.io/repository/biocontainers/perl-mozilla-ca
.. _`perl-mozilla-ca/tags`: https://quay.io/repository/biocontainers/perl-mozilla-ca?tab=tags


.. raw:: html

    <script>
        var package = "perl-mozilla-ca";
        var versions = ["20211001","20180117","20180117","20180117","20160104"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mozilla-ca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mozilla-ca/README.html