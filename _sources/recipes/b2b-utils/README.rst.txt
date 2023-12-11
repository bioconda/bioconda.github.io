:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'b2b-utils'
.. highlight: bash

b2b-utils
=========

.. conda:recipe:: b2b-utils
   :replaces_section_title:
   :noindex:

   Genomics tools from BASE2BIO

   :homepage: https://github.com/jvolkening/b2b-utils
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`b2b-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2b-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2b-utils/meta.yaml>`_

   This package contains a set of programs and utilities for working with
   genomic data. Please see the in\-program documentation \(\`\-\-help\`\) of each
   individual tool for usage and details. Please note that some tools in this
   suite utilize dependencies that are not explicity stated in the Conda
   package. This keeps the install footprint smaller since all users will not
   use all utilities\, but if you receive error messages about missing
   programs you will need to install those as well. All possible
   dependencies should be available as Conda packages.



.. conda:package:: b2b-utils

   |downloads_b2b-utils| |docker_b2b-utils|

   :versions:
      
      

      ``0.019-0``,  ``0.018-0``,  ``0.017-0``

      

   
   :depends mafft: ``>=7.520,<8.0a0``
   :depends minimap2: ``>=2.26,<3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends perl-biox-seq: ``>=0.008006``
   :depends perl-dbi: 
   :depends perl-list-moreutils: 
   :depends perl-module-build: ``0.4234.*``
   :depends perl-perlio-gzip: 
   :depends samtools: ``>=1.18,<2.0a0``
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

      mamba install b2b-utils

   and update with::

      mamba update b2b-utils

  To create a new environment, run::

      mamba create --name myenvname b2b-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/b2b-utils:<tag>

   (see `b2b-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_b2b-utils| image:: https://img.shields.io/conda/dn/bioconda/b2b-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/b2b-utils
   :alt:   (downloads)
.. |docker_b2b-utils| image:: https://quay.io/repository/biocontainers/b2b-utils/status
   :target: https://quay.io/repository/biocontainers/b2b-utils
.. _`b2b-utils/tags`: https://quay.io/repository/biocontainers/b2b-utils?tab=tags


.. raw:: html

    <script>
        var package = "b2b-utils";
        var versions = ["0.019","0.018","0.017"];
    </script>





Notes
-----
- Can\'t be noarch or mulled testing fails because perl\-dbi dependency is
not pulled in


- Extra packages \(bwa\, samtools\, etc\) are included in host deps so that
the full testing suite will be run during building\, but they are not
added to run\-time deps since not all users may need the corresponding
utilities. This decision may be revisited in the future.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/b2b-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/b2b-utils/README.html