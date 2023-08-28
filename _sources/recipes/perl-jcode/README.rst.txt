:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-jcode'
.. highlight: bash

perl-jcode
==========

.. conda:recipe:: perl-jcode
   :replaces_section_title:
   :noindex:

   Japanese Charset Handler

   :homepage: http://metacpan.org/pod/Jcode
   :license: unknown
   :recipe: /`perl-jcode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-jcode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-jcode/meta.yaml>`_

   


.. conda:package:: perl-jcode

   |downloads_perl-jcode| |docker_perl-jcode|

   :versions:
      
      

      ``2.07-3``,  ``2.07-2``,  ``2.07-1``,  ``2.07-0``

      

   
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

      mamba install perl-jcode

   and update with::

      mamba update perl-jcode

  To create a new environment, run::

      mamba create --name myenvname perl-jcode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-jcode:<tag>

   (see `perl-jcode/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-jcode| image:: https://img.shields.io/conda/dn/bioconda/perl-jcode.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-jcode
   :alt:   (downloads)
.. |docker_perl-jcode| image:: https://quay.io/repository/biocontainers/perl-jcode/status
   :target: https://quay.io/repository/biocontainers/perl-jcode
.. _`perl-jcode/tags`: https://quay.io/repository/biocontainers/perl-jcode?tab=tags


.. raw:: html

    <script>
        var package = "perl-jcode";
        var versions = ["2.07","2.07","2.07","2.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-jcode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-jcode/README.html