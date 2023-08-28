:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-params-check'
.. highlight: bash

perl-params-check
=================

.. conda:recipe:: perl-params-check/0.38
   :replaces_section_title:
   :noindex:

   Templated based param validation

   :homepage: http://metacpan.org/pod/Params::Check
   :license: perl_5
   :recipe: /`perl-params-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-check>`_/`0.38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-check/0.38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-check/0.38/meta.yaml>`_

   


.. conda:package:: perl-params-check

   |downloads_perl-params-check| |docker_perl-params-check|

   :versions:
      
      

      ``0.38-2``,  ``0.38-1``,  ``0.38-0``

      

   
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

      mamba install perl-params-check

   and update with::

      mamba update perl-params-check

  To create a new environment, run::

      mamba create --name myenvname perl-params-check

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-params-check:<tag>

   (see `perl-params-check/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-params-check| image:: https://img.shields.io/conda/dn/bioconda/perl-params-check.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-params-check
   :alt:   (downloads)
.. |docker_perl-params-check| image:: https://quay.io/repository/biocontainers/perl-params-check/status
   :target: https://quay.io/repository/biocontainers/perl-params-check
.. _`perl-params-check/tags`: https://quay.io/repository/biocontainers/perl-params-check?tab=tags


.. raw:: html

    <script>
        var package = "perl-params-check";
        var versions = ["0.38","0.38","0.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-check/README.html