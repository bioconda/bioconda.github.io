:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-slurp'
.. highlight: bash

perl-slurp
==========

.. conda:recipe:: perl-slurp
   :replaces_section_title:
   :noindex:

   Slurp entire files into variables

   :homepage: http://metacpan.org/pod/Slurp
   :license: unknown
   :recipe: /`perl-slurp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-slurp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-slurp/meta.yaml>`_

   


.. conda:package:: perl-slurp

   |downloads_perl-slurp| |docker_perl-slurp|

   :versions:
      
      

      ``0.4-1``,  ``0.4-0``

      

   
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

      mamba install perl-slurp

   and update with::

      mamba update perl-slurp

  To create a new environment, run::

      mamba create --name myenvname perl-slurp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-slurp:<tag>

   (see `perl-slurp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-slurp| image:: https://img.shields.io/conda/dn/bioconda/perl-slurp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-slurp
   :alt:   (downloads)
.. |docker_perl-slurp| image:: https://quay.io/repository/biocontainers/perl-slurp/status
   :target: https://quay.io/repository/biocontainers/perl-slurp
.. _`perl-slurp/tags`: https://quay.io/repository/biocontainers/perl-slurp?tab=tags


.. raw:: html

    <script>
        var package = "perl-slurp";
        var versions = ["0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-slurp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-slurp/README.html