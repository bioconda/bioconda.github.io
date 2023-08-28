:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-safe'
.. highlight: bash

perl-safe
=========

.. conda:recipe:: perl-safe/2.37
   :replaces_section_title:
   :noindex:

   Compile and execute code in restricted compartments

   :homepage: http://metacpan.org/pod/Safe
   :license: unknown
   :recipe: /`perl-safe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-safe>`_/`2.37 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-safe/2.37>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-safe/2.37/meta.yaml>`_

   


.. conda:package:: perl-safe

   |downloads_perl-safe| |docker_perl-safe|

   :versions:
      
      

      ``2.37-2``,  ``2.37-1``,  ``2.37-0``

      

   
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

      mamba install perl-safe

   and update with::

      mamba update perl-safe

  To create a new environment, run::

      mamba create --name myenvname perl-safe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-safe:<tag>

   (see `perl-safe/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-safe| image:: https://img.shields.io/conda/dn/bioconda/perl-safe.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-safe
   :alt:   (downloads)
.. |docker_perl-safe| image:: https://quay.io/repository/biocontainers/perl-safe/status
   :target: https://quay.io/repository/biocontainers/perl-safe
.. _`perl-safe/tags`: https://quay.io/repository/biocontainers/perl-safe?tab=tags


.. raw:: html

    <script>
        var package = "perl-safe";
        var versions = ["2.37","2.37","2.37"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-safe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-safe/README.html