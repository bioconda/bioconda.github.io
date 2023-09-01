:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-format-strptime'
.. highlight: bash

perl-datetime-format-strptime
=============================

.. conda:recipe:: perl-datetime-format-strptime
   :replaces_section_title:
   :noindex:

   Parse and format strp and strf time patterns

   :homepage: http://metacpan.org/release/DateTime-Format-Strptime
   :license: artistic_2
   :recipe: /`perl-datetime-format-strptime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime/meta.yaml>`_

   


.. conda:package:: perl-datetime-format-strptime

   |downloads_perl-datetime-format-strptime| |docker_perl-datetime-format-strptime|

   :versions:
      
      

      ``1.75-1``,  ``1.75-0``,  ``1.73-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-datetime: 
   :depends perl-datetime-locale: ``>=1.05``
   :depends perl-datetime-timezone: 
   :depends perl-exporter: 
   :depends perl-package-deprecationmanager: 
   :depends perl-params-validationcompiler: 
   :depends perl-parent: 
   :depends perl-specio: 
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

      mamba install perl-datetime-format-strptime

   and update with::

      mamba update perl-datetime-format-strptime

  To create a new environment, run::

      mamba create --name myenvname perl-datetime-format-strptime

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-datetime-format-strptime:<tag>

   (see `perl-datetime-format-strptime/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-datetime-format-strptime| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-format-strptime.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-datetime-format-strptime
   :alt:   (downloads)
.. |docker_perl-datetime-format-strptime| image:: https://quay.io/repository/biocontainers/perl-datetime-format-strptime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-format-strptime
.. _`perl-datetime-format-strptime/tags`: https://quay.io/repository/biocontainers/perl-datetime-format-strptime?tab=tags


.. raw:: html

    <script>
        var package = "perl-datetime-format-strptime";
        var versions = ["1.75","1.75","1.73"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html