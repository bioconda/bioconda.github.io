:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-nonmoose'
.. highlight: bash

perl-moosex-nonmoose
====================

.. conda:recipe:: perl-moosex-nonmoose
   :replaces_section_title:
   :noindex:

   MooseX\:\:NonMoose \- easy subclassing of non\-Moose classes

   :homepage: https://github.com/moose/MooseX-NonMoose
   :license: perl_5
   :recipe: /`perl-moosex-nonmoose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-nonmoose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-nonmoose/meta.yaml>`_

   


.. conda:package:: perl-moosex-nonmoose

   |downloads_perl-moosex-nonmoose| |docker_perl-moosex-nonmoose|

   :versions:
      
      

      ``0.26-4``,  ``0.26-3``,  ``0.26-2``,  ``0.26-1``,  ``0.26-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-list-moreutils: 
   :depends perl-module-runtime: 
   :depends perl-moose: 
   :depends perl-try-tiny: 
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

      mamba install perl-moosex-nonmoose

   and update with::

      mamba update perl-moosex-nonmoose

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-nonmoose

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-nonmoose:<tag>

   (see `perl-moosex-nonmoose/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-nonmoose| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-nonmoose.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-nonmoose
   :alt:   (downloads)
.. |docker_perl-moosex-nonmoose| image:: https://quay.io/repository/biocontainers/perl-moosex-nonmoose/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-nonmoose
.. _`perl-moosex-nonmoose/tags`: https://quay.io/repository/biocontainers/perl-moosex-nonmoose?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-nonmoose";
        var versions = ["0.26","0.26","0.26","0.26","0.26"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-nonmoose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-nonmoose/README.html