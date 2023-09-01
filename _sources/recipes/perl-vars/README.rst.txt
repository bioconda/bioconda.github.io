:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-vars'
.. highlight: bash

perl-vars
=========

.. conda:recipe:: perl-vars/1.03
   :replaces_section_title:
   :noindex:

   Perl pragma to predeclare global variable names

   :homepage: http://metacpan.org/pod/vars
   :license: perl_5
   :recipe: /`perl-vars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vars>`_/`1.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vars/1.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-vars/1.03/meta.yaml>`_

   


.. conda:package:: perl-vars

   |downloads_perl-vars| |docker_perl-vars|

   :versions:
      
      

      ``1.03-2``,  ``1.03-1``,  ``1.03-0``

      

   
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

      mamba install perl-vars

   and update with::

      mamba update perl-vars

  To create a new environment, run::

      mamba create --name myenvname perl-vars

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-vars:<tag>

   (see `perl-vars/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-vars| image:: https://img.shields.io/conda/dn/bioconda/perl-vars.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-vars
   :alt:   (downloads)
.. |docker_perl-vars| image:: https://quay.io/repository/biocontainers/perl-vars/status
   :target: https://quay.io/repository/biocontainers/perl-vars
.. _`perl-vars/tags`: https://quay.io/repository/biocontainers/perl-vars?tab=tags


.. raw:: html

    <script>
        var package = "perl-vars";
        var versions = ["1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-vars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-vars/README.html