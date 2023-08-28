:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-par-dist'
.. highlight: bash

perl-par-dist
=============

.. conda:recipe:: perl-par-dist/0.49
   :replaces_section_title:
   :noindex:

   Create and manipulate PAR distributions

   :homepage: http://metacpan.org/pod/PAR::Dist
   :license: unknown
   :recipe: /`perl-par-dist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-dist>`_/`0.49 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-dist/0.49>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-par-dist/0.49/meta.yaml>`_

   


.. conda:package:: perl-par-dist

   |downloads_perl-par-dist| |docker_perl-par-dist|

   :versions:
      
      

      ``0.49-2``,  ``0.49-1``,  ``0.49-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-find: 
   :depends perl-file-path: 
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

      mamba install perl-par-dist

   and update with::

      mamba update perl-par-dist

  To create a new environment, run::

      mamba create --name myenvname perl-par-dist

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-par-dist:<tag>

   (see `perl-par-dist/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-par-dist| image:: https://img.shields.io/conda/dn/bioconda/perl-par-dist.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-par-dist
   :alt:   (downloads)
.. |docker_perl-par-dist| image:: https://quay.io/repository/biocontainers/perl-par-dist/status
   :target: https://quay.io/repository/biocontainers/perl-par-dist
.. _`perl-par-dist/tags`: https://quay.io/repository/biocontainers/perl-par-dist?tab=tags


.. raw:: html

    <script>
        var package = "perl-par-dist";
        var versions = ["0.49","0.49","0.49"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-par-dist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-par-dist/README.html