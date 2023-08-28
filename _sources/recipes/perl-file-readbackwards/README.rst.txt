:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-readbackwards'
.. highlight: bash

perl-file-readbackwards
=======================

.. conda:recipe:: perl-file-readbackwards
   :replaces_section_title:
   :noindex:

   Read a file backwards by lines.

   :homepage: http://metacpan.org/pod/File::ReadBackwards
   :license: unknown
   :recipe: /`perl-file-readbackwards <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-readbackwards>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-readbackwards/meta.yaml>`_

   


.. conda:package:: perl-file-readbackwards

   |downloads_perl-file-readbackwards| |docker_perl-file-readbackwards|

   :versions:
      
      

      ``1.06-0``,  ``1.05-2``,  ``1.05-1``,  ``1.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-file-readbackwards

   and update with::

      mamba update perl-file-readbackwards

  To create a new environment, run::

      mamba create --name myenvname perl-file-readbackwards

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-file-readbackwards:<tag>

   (see `perl-file-readbackwards/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-readbackwards| image:: https://img.shields.io/conda/dn/bioconda/perl-file-readbackwards.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-readbackwards
   :alt:   (downloads)
.. |docker_perl-file-readbackwards| image:: https://quay.io/repository/biocontainers/perl-file-readbackwards/status
   :target: https://quay.io/repository/biocontainers/perl-file-readbackwards
.. _`perl-file-readbackwards/tags`: https://quay.io/repository/biocontainers/perl-file-readbackwards?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-readbackwards";
        var versions = ["1.06","1.05","1.05","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-readbackwards/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-readbackwards/README.html