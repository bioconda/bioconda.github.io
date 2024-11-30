:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-clone'
.. highlight: bash

perl-moosex-clone
=================

.. conda:recipe:: perl-moosex-clone/0.06
   :replaces_section_title:
   :noindex:

   Fine\-grained cloning support for Moose objects.

   :homepage: https://github.com/moose/MooseX-Clone
   :license: perl_5
   :recipe: /`perl-moosex-clone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone>`_/`0.06 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone/0.06>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone/0.06/meta.yaml>`_

   


.. conda:package:: perl-moosex-clone

   |downloads_perl-moosex-clone| |docker_perl-moosex-clone|

   :versions:
      
      

      ``0.06-3``,  ``0.06-2``,  ``0.06-1``,  ``0.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-data-visitor: 
   :depends perl-hash-util-fieldhash-compat: 
   :depends perl-namespace-autoclean: 
   :depends perl-storable: 
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

      mamba install perl-moosex-clone

   and update with::

      mamba update perl-moosex-clone

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-clone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-clone:<tag>

   (see `perl-moosex-clone/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-clone| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-clone.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-clone
   :alt:   (downloads)
.. |docker_perl-moosex-clone| image:: https://quay.io/repository/biocontainers/perl-moosex-clone/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-clone
.. _`perl-moosex-clone/tags`: https://quay.io/repository/biocontainers/perl-moosex-clone?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-clone";
        var versions = ["0.06","0.06","0.06","0.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-clone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-clone/README.html