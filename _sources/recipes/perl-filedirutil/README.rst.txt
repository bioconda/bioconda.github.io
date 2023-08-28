:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-filedirutil'
.. highlight: bash

perl-filedirutil
================

.. conda:recipe:: perl-filedirutil
   :replaces_section_title:
   :noindex:

   A Moose Role for basic File IO

   :homepage: http://metacpan.org/pod/FileDirUtil
   :license: agpl_3
   :recipe: /`perl-filedirutil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filedirutil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-filedirutil/meta.yaml>`_

   


.. conda:package:: perl-filedirutil

   |downloads_perl-filedirutil| |docker_perl-filedirutil|

   :versions:
      
      

      ``0.04-0``,  ``v0.04-0``,  ``v0.03-2``,  ``v0.03-1``,  ``v0.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-moose: 
   :depends perl-namespace-autoclean: 
   :depends perl-params-coerce: 
   :depends perl-path-class: 
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

      mamba install perl-filedirutil

   and update with::

      mamba update perl-filedirutil

  To create a new environment, run::

      mamba create --name myenvname perl-filedirutil

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-filedirutil:<tag>

   (see `perl-filedirutil/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-filedirutil| image:: https://img.shields.io/conda/dn/bioconda/perl-filedirutil.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-filedirutil
   :alt:   (downloads)
.. |docker_perl-filedirutil| image:: https://quay.io/repository/biocontainers/perl-filedirutil/status
   :target: https://quay.io/repository/biocontainers/perl-filedirutil
.. _`perl-filedirutil/tags`: https://quay.io/repository/biocontainers/perl-filedirutil?tab=tags


.. raw:: html

    <script>
        var package = "perl-filedirutil";
        var versions = ["0.04","v0.04","v0.03","v0.03","v0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-filedirutil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-filedirutil/README.html