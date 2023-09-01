:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tie-refhash-weak'
.. highlight: bash

perl-tie-refhash-weak
=====================

.. conda:recipe:: perl-tie-refhash-weak/0.09
   :replaces_section_title:
   :noindex:

   A Tie\:\:RefHash subclass with weakened references in the keys.

   :homepage: http://metacpan.org/pod/Tie::RefHash::Weak
   :license: unknown
   :recipe: /`perl-tie-refhash-weak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak>`_/`0.09 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak/0.09>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tie-refhash-weak/0.09/meta.yaml>`_

   


.. conda:package:: perl-tie-refhash-weak

   |downloads_perl-tie-refhash-weak| |docker_perl-tie-refhash-weak|

   :versions:
      
      

      ``0.09-3``,  ``0.09-2``,  ``0.09-1``,  ``0.09-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-task-weaken: 
   :depends perl-tie-refhash: 
   :depends perl-variable-magic: 
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

      mamba install perl-tie-refhash-weak

   and update with::

      mamba update perl-tie-refhash-weak

  To create a new environment, run::

      mamba create --name myenvname perl-tie-refhash-weak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tie-refhash-weak:<tag>

   (see `perl-tie-refhash-weak/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tie-refhash-weak| image:: https://img.shields.io/conda/dn/bioconda/perl-tie-refhash-weak.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tie-refhash-weak
   :alt:   (downloads)
.. |docker_perl-tie-refhash-weak| image:: https://quay.io/repository/biocontainers/perl-tie-refhash-weak/status
   :target: https://quay.io/repository/biocontainers/perl-tie-refhash-weak
.. _`perl-tie-refhash-weak/tags`: https://quay.io/repository/biocontainers/perl-tie-refhash-weak?tab=tags


.. raw:: html

    <script>
        var package = "perl-tie-refhash-weak";
        var versions = ["0.09","0.09","0.09","0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tie-refhash-weak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tie-refhash-weak/README.html