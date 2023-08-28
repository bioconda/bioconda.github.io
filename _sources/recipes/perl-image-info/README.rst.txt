:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-image-info'
.. highlight: bash

perl-image-info
===============

.. conda:recipe:: perl-image-info
   :replaces_section_title:
   :noindex:

   Extract meta information from image files

   :homepage: http://metacpan.org/pod/Image-Info
   :license: perl_5
   :recipe: /`perl-image-info <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-info>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-image-info/meta.yaml>`_

   


.. conda:package:: perl-image-info

   |downloads_perl-image-info| |docker_perl-image-info|

   :versions:
      
      

      ``1.42-0``,  ``1.38-2``,  ``1.38-1``,  ``1.38-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-io-stringy: 
   :depends perl-xml-libxml: 
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

      mamba install perl-image-info

   and update with::

      mamba update perl-image-info

  To create a new environment, run::

      mamba create --name myenvname perl-image-info

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-image-info:<tag>

   (see `perl-image-info/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-image-info| image:: https://img.shields.io/conda/dn/bioconda/perl-image-info.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-image-info
   :alt:   (downloads)
.. |docker_perl-image-info| image:: https://quay.io/repository/biocontainers/perl-image-info/status
   :target: https://quay.io/repository/biocontainers/perl-image-info
.. _`perl-image-info/tags`: https://quay.io/repository/biocontainers/perl-image-info?tab=tags


.. raw:: html

    <script>
        var package = "perl-image-info";
        var versions = ["1.42","1.38","1.38","1.38"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-image-info/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-image-info/README.html