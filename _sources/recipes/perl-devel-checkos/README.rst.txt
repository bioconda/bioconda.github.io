:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checkos'
.. highlight: bash

perl-devel-checkos
==================

.. conda:recipe:: perl-devel-checkos/1.81
   :replaces_section_title:
   :noindex:

   check what OS we\'re running on

   :homepage: http://metacpan.org/pod/Devel::CheckOS
   :license: unknown
   :recipe: /`perl-devel-checkos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos>`_/`1.81 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos/1.81>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkos/1.81/meta.yaml>`_

   


.. conda:package:: perl-devel-checkos

   |downloads_perl-devel-checkos| |docker_perl-devel-checkos|

   :versions:
      
      

      ``1.81-1``,  ``1.81-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-data-compare: 
   :depends perl-file-find-rule: 
   :depends perl-file-temp: 
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

      mamba install perl-devel-checkos

   and update with::

      mamba update perl-devel-checkos

  To create a new environment, run::

      mamba create --name myenvname perl-devel-checkos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-devel-checkos:<tag>

   (see `perl-devel-checkos/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-checkos| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checkos.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checkos
   :alt:   (downloads)
.. |docker_perl-devel-checkos| image:: https://quay.io/repository/biocontainers/perl-devel-checkos/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checkos
.. _`perl-devel-checkos/tags`: https://quay.io/repository/biocontainers/perl-devel-checkos?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-checkos";
        var versions = ["1.81","1.81"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checkos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checkos/README.html