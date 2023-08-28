:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-module-util'
.. highlight: bash

perl-module-util
================

.. conda:recipe:: perl-module-util
   :replaces_section_title:
   :noindex:

   Module name tools and transformations

   :homepage: http://metacpan.org/pod/Module::Util
   :license: perl_5
   :recipe: /`perl-module-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-util>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-module-util/meta.yaml>`_

   


.. conda:package:: perl-module-util

   |downloads_perl-module-util| |docker_perl-module-util|

   :versions:
      
      

      ``1.09-1``,  ``1.09-0``

      

   
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

      mamba install perl-module-util

   and update with::

      mamba update perl-module-util

  To create a new environment, run::

      mamba create --name myenvname perl-module-util

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-module-util:<tag>

   (see `perl-module-util/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-module-util| image:: https://img.shields.io/conda/dn/bioconda/perl-module-util.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-module-util
   :alt:   (downloads)
.. |docker_perl-module-util| image:: https://quay.io/repository/biocontainers/perl-module-util/status
   :target: https://quay.io/repository/biocontainers/perl-module-util
.. _`perl-module-util/tags`: https://quay.io/repository/biocontainers/perl-module-util?tab=tags


.. raw:: html

    <script>
        var package = "perl-module-util";
        var versions = ["1.09","1.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-module-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-module-util/README.html