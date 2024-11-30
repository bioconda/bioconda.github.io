:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-html'
.. highlight: bash

perl-io-html
============

.. conda:recipe:: perl-io-html
   :replaces_section_title:
   :noindex:

   Open an HTML file with automatic charset detection

   :homepage: http://metacpan.org/pod/IO-HTML
   :license: perl_5
   :recipe: /`perl-io-html <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-html>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-html/meta.yaml>`_

   


.. conda:package:: perl-io-html

   |downloads_perl-io-html| |docker_perl-io-html|

   :versions:
      
      

      ``1.004-0``,  ``1.001-3``,  ``1.001-2``,  ``1.001-1``,  ``1.001-0``

      

   
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

      mamba install perl-io-html

   and update with::

      mamba update perl-io-html

  To create a new environment, run::

      mamba create --name myenvname perl-io-html

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-html:<tag>

   (see `perl-io-html/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-html| image:: https://img.shields.io/conda/dn/bioconda/perl-io-html.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-html
   :alt:   (downloads)
.. |docker_perl-io-html| image:: https://quay.io/repository/biocontainers/perl-io-html/status
   :target: https://quay.io/repository/biocontainers/perl-io-html
.. _`perl-io-html/tags`: https://quay.io/repository/biocontainers/perl-io-html?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-html";
        var versions = ["1.004","1.001","1.001","1.001","1.001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-html/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-html/README.html