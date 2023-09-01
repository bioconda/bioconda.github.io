:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-types-stringlike'
.. highlight: bash

perl-moosex-types-stringlike
============================

.. conda:recipe:: perl-moosex-types-stringlike
   :replaces_section_title:
   :noindex:

   Moose type constraints for strings or string\-like objects

   :homepage: https://github.com/dagolden/MooseX-Types-Stringlike
   :license: apache_2_0
   :recipe: /`perl-moosex-types-stringlike <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-stringlike>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types-stringlike/meta.yaml>`_

   


.. conda:package:: perl-moosex-types-stringlike

   |downloads_perl-moosex-types-stringlike| |docker_perl-moosex-types-stringlike|

   :versions:
      
      

      ``0.003-1``,  ``0.003-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-moosex-types: 
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

      mamba install perl-moosex-types-stringlike

   and update with::

      mamba update perl-moosex-types-stringlike

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-types-stringlike

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-types-stringlike:<tag>

   (see `perl-moosex-types-stringlike/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-types-stringlike| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-types-stringlike.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-types-stringlike
   :alt:   (downloads)
.. |docker_perl-moosex-types-stringlike| image:: https://quay.io/repository/biocontainers/perl-moosex-types-stringlike/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-types-stringlike
.. _`perl-moosex-types-stringlike/tags`: https://quay.io/repository/biocontainers/perl-moosex-types-stringlike?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-types-stringlike";
        var versions = ["0.003","0.003"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-types-stringlike/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-types-stringlike/README.html