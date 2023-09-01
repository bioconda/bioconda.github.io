:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-singleton'
.. highlight: bash

perl-moosex-singleton
=====================

.. conda:recipe:: perl-moosex-singleton
   :replaces_section_title:
   :noindex:

   Turn your Moose class into a singleton

   :homepage: https://github.com/moose/MooseX-Singleton
   :license: perl_5
   :recipe: /`perl-moosex-singleton <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-singleton>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-singleton/meta.yaml>`_

   


.. conda:package:: perl-moosex-singleton

   |downloads_perl-moosex-singleton| |docker_perl-moosex-singleton|

   :versions:
      
      

      ``0.30-1``,  ``0.30-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-moose: 
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

      mamba install perl-moosex-singleton

   and update with::

      mamba update perl-moosex-singleton

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-singleton

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-singleton:<tag>

   (see `perl-moosex-singleton/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-singleton| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-singleton.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-singleton
   :alt:   (downloads)
.. |docker_perl-moosex-singleton| image:: https://quay.io/repository/biocontainers/perl-moosex-singleton/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-singleton
.. _`perl-moosex-singleton/tags`: https://quay.io/repository/biocontainers/perl-moosex-singleton?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-singleton";
        var versions = ["0.30","0.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-singleton/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-singleton/README.html