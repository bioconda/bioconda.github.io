:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-algorithm-munkres'
.. highlight: bash

perl-algorithm-munkres
======================

.. conda:recipe:: perl-algorithm-munkres
   :replaces_section_title:
   :noindex:

   Munkres.pm

   :homepage: http://metacpan.org/pod/Algorithm-Munkres
   :license: unknown
   :recipe: /`perl-algorithm-munkres <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-munkres>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-algorithm-munkres/meta.yaml>`_

   


.. conda:package:: perl-algorithm-munkres

   |downloads_perl-algorithm-munkres| |docker_perl-algorithm-munkres|

   :versions:
      
      

      ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
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

      mamba install perl-algorithm-munkres

   and update with::

      mamba update perl-algorithm-munkres

  To create a new environment, run::

      mamba create --name myenvname perl-algorithm-munkres

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-algorithm-munkres:<tag>

   (see `perl-algorithm-munkres/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-algorithm-munkres| image:: https://img.shields.io/conda/dn/bioconda/perl-algorithm-munkres.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-algorithm-munkres
   :alt:   (downloads)
.. |docker_perl-algorithm-munkres| image:: https://quay.io/repository/biocontainers/perl-algorithm-munkres/status
   :target: https://quay.io/repository/biocontainers/perl-algorithm-munkres
.. _`perl-algorithm-munkres/tags`: https://quay.io/repository/biocontainers/perl-algorithm-munkres?tab=tags


.. raw:: html

    <script>
        var package = "perl-algorithm-munkres";
        var versions = ["0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-algorithm-munkres/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-algorithm-munkres/README.html