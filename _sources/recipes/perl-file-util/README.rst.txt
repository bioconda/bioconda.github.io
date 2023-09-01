:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-util'
.. highlight: bash

perl-file-util
==============

.. conda:recipe:: perl-file-util
   :replaces_section_title:
   :noindex:

   Easy\, versatile\, portable file handling

   :homepage: https://github.com/tommybutler/file-util/wiki
   :license: perl_5
   :recipe: /`perl-file-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-util>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-util/meta.yaml>`_

   


.. conda:package:: perl-file-util

   |downloads_perl-file-util| |docker_perl-file-util|

   :versions:
      
      

      ``4.201720-0``,  ``4.161950-4``,  ``4.161950-3``,  ``4.161950-2``,  ``4.161950-1``,  ``4.161950-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-constant: 
   :depends perl-exporter: 
   :depends perl-lib: 
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

      mamba install perl-file-util

   and update with::

      mamba update perl-file-util

  To create a new environment, run::

      mamba create --name myenvname perl-file-util

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-util:<tag>

   (see `perl-file-util/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-util| image:: https://img.shields.io/conda/dn/bioconda/perl-file-util.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-util
   :alt:   (downloads)
.. |docker_perl-file-util| image:: https://quay.io/repository/biocontainers/perl-file-util/status
   :target: https://quay.io/repository/biocontainers/perl-file-util
.. _`perl-file-util/tags`: https://quay.io/repository/biocontainers/perl-file-util?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-util";
        var versions = ["4.201720","4.161950","4.161950","4.161950","4.161950"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-util/README.html