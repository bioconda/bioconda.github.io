:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-par'
.. highlight: bash

perl-par
========

.. conda:recipe:: perl-par/1.014
   :replaces_section_title:
   :noindex:

   Perl Archive Tookit

   :homepage: http://metacpan.org/pod/PAR
   :license: perl_5
   :recipe: /`perl-par <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par>`_/`1.014 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par/1.014>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par/1.014/meta.yaml>`_

   


.. conda:package:: perl-par

   |downloads_perl-par| |docker_perl-par|

   :versions:
      
      

      ``1.014-2``,  ``1.014-1``,  ``1.014-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-archive-zip: 
   :depends perl-par-dist: 
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

      mamba install perl-par

   and update with::

      mamba update perl-par

  To create a new environment, run::

      mamba create --name myenvname perl-par

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-par:<tag>

   (see `perl-par/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-par| image:: https://img.shields.io/conda/dn/bioconda/perl-par.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-par
   :alt:   (downloads)
.. |docker_perl-par| image:: https://quay.io/repository/biocontainers/perl-par/status
   :target: https://quay.io/repository/biocontainers/perl-par
.. _`perl-par/tags`: https://quay.io/repository/biocontainers/perl-par?tab=tags


.. raw:: html

    <script>
        var package = "perl-par";
        var versions = ["1.014","1.014","1.014"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-par/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-par/README.html