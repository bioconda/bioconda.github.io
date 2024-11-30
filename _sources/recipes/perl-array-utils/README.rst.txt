:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-utils'
.. highlight: bash

perl-array-utils
================

.. conda:recipe:: perl-array-utils
   :replaces_section_title:
   :noindex:

   small utils for array manipulation

   :homepage: http://metacpan.org/pod/Array::Utils
   :license: unknown
   :recipe: /`perl-array-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-utils/meta.yaml>`_

   


.. conda:package:: perl-array-utils

   |downloads_perl-array-utils| |docker_perl-array-utils|

   :versions:
      
      

      ``0.5-3``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-array-utils

   and update with::

      mamba update perl-array-utils

  To create a new environment, run::

      mamba create --name myenvname perl-array-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-array-utils:<tag>

   (see `perl-array-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-array-utils| image:: https://img.shields.io/conda/dn/bioconda/perl-array-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-array-utils
   :alt:   (downloads)
.. |docker_perl-array-utils| image:: https://quay.io/repository/biocontainers/perl-array-utils/status
   :target: https://quay.io/repository/biocontainers/perl-array-utils
.. _`perl-array-utils/tags`: https://quay.io/repository/biocontainers/perl-array-utils?tab=tags


.. raw:: html

    <script>
        var package = "perl-array-utils";
        var versions = ["0.5","0.5","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-utils/README.html