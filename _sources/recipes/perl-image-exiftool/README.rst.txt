:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-image-exiftool'
.. highlight: bash

perl-image-exiftool
===================

.. conda:recipe:: perl-image-exiftool
   :replaces_section_title:
   :noindex:

   ExifTool is a platform\-independent Perl library plus a command\-line application for reading\, writing and editing meta information in a wide variety of files.

   :homepage: https://metacpan.org/pod/Image::ExifTool
   :license: perl_5
   :recipe: /`perl-image-exiftool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-exiftool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-exiftool/meta.yaml>`_

   


.. conda:package:: perl-image-exiftool

   |downloads_perl-image-exiftool| |docker_perl-image-exiftool|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>12.60-0</code>,  <code>12.50-0</code>,  <code>12.42-0</code>,  <code>12.30-0</code>,  <code>11.50-1</code>,  <code>11.50-0</code>,  <code>11.30-0</code>,  <code>11.11-0</code>,  <code>11.01-1</code>,  </span></summary>
      

      ``12.60-0``,  ``12.50-0``,  ``12.42-0``,  ``12.30-0``,  ``11.50-1``,  ``11.50-0``,  ``11.30-0``,  ``11.11-0``,  ``11.01-1``,  ``11.01-0``,  ``10.40-2``,  ``10.40-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install perl-image-exiftool

   and update with::

      mamba update perl-image-exiftool

  To create a new environment, run::

      mamba create --name myenvname perl-image-exiftool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-image-exiftool:<tag>

   (see `perl-image-exiftool/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-image-exiftool| image:: https://img.shields.io/conda/dn/bioconda/perl-image-exiftool.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-image-exiftool
   :alt:   (downloads)
.. |docker_perl-image-exiftool| image:: https://quay.io/repository/biocontainers/perl-image-exiftool/status
   :target: https://quay.io/repository/biocontainers/perl-image-exiftool
.. _`perl-image-exiftool/tags`: https://quay.io/repository/biocontainers/perl-image-exiftool?tab=tags


.. raw:: html

    <script>
        var package = "perl-image-exiftool";
        var versions = ["12.60","12.50","12.42","12.30","11.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-image-exiftool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-image-exiftool/README.html