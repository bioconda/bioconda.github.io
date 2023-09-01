:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-sessiondata'
.. highlight: bash

perl-io-sessiondata
===================

.. conda:recipe:: perl-io-sessiondata
   :replaces_section_title:
   :noindex:

   supporting module for SOAP\:\:Lite

   :homepage: http://metacpan.org/pod/IO-SessionData
   :license: unknown
   :recipe: /`perl-io-sessiondata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-sessiondata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-sessiondata/meta.yaml>`_

   


.. conda:package:: perl-io-sessiondata

   |downloads_perl-io-sessiondata| |docker_perl-io-sessiondata|

   :versions:
      
      

      ``1.03-2``,  ``1.03-1``,  ``1.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-io-sessiondata

   and update with::

      mamba update perl-io-sessiondata

  To create a new environment, run::

      mamba create --name myenvname perl-io-sessiondata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-sessiondata:<tag>

   (see `perl-io-sessiondata/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-sessiondata| image:: https://img.shields.io/conda/dn/bioconda/perl-io-sessiondata.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-sessiondata
   :alt:   (downloads)
.. |docker_perl-io-sessiondata| image:: https://quay.io/repository/biocontainers/perl-io-sessiondata/status
   :target: https://quay.io/repository/biocontainers/perl-io-sessiondata
.. _`perl-io-sessiondata/tags`: https://quay.io/repository/biocontainers/perl-io-sessiondata?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-sessiondata";
        var versions = ["1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-sessiondata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-sessiondata/README.html