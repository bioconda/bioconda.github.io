:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-asciitable'
.. highlight: bash

perl-text-asciitable
====================

.. conda:recipe:: perl-text-asciitable/0.22
   :replaces_section_title:
   :noindex:

   Create a nice formatted table using ASCII characters.

   :homepage: http://metacpan.org/pod/Text::ASCIITable
   :license: perl_5
   :recipe: /`perl-text-asciitable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-asciitable>`_/`0.22 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-asciitable/0.22>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-asciitable/0.22/meta.yaml>`_

   


.. conda:package:: perl-text-asciitable

   |downloads_perl-text-asciitable| |docker_perl-text-asciitable|

   :versions:
      
      

      ``0.22-3``,  ``0.22-2``,  ``0.22-1``,  ``0.22-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-encode: 
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

      mamba install perl-text-asciitable

   and update with::

      mamba update perl-text-asciitable

  To create a new environment, run::

      mamba create --name myenvname perl-text-asciitable

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-text-asciitable:<tag>

   (see `perl-text-asciitable/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-asciitable| image:: https://img.shields.io/conda/dn/bioconda/perl-text-asciitable.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-asciitable
   :alt:   (downloads)
.. |docker_perl-text-asciitable| image:: https://quay.io/repository/biocontainers/perl-text-asciitable/status
   :target: https://quay.io/repository/biocontainers/perl-text-asciitable
.. _`perl-text-asciitable/tags`: https://quay.io/repository/biocontainers/perl-text-asciitable?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-asciitable";
        var versions = ["0.22","0.22","0.22","0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-asciitable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-asciitable/README.html