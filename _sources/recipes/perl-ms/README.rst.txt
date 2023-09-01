:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-ms'
.. highlight: bash

perl-ms
=======

.. conda:recipe:: perl-ms
   :replaces_section_title:
   :noindex:

   Namespace for mass spectrometry\-related libraries

   :homepage: http://metacpan.org/pod/MS
   :license: gpl_3
   :recipe: /`perl-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-ms/meta.yaml>`_

   


.. conda:package:: perl-ms

   |downloads_perl-ms| |docker_perl-ms|

   :versions:
      
      

      ``0.207002-0``,  ``0.207001-0``,  ``0.206003-2``,  ``0.206003-1``,  ``0.206003-0``,  ``0.204003-0``,  ``0.204001-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-biox-seq: 
   :depends perl-compress-bgzf: 
   :depends perl-data-lock: 
   :depends perl-file-sharedir: 
   :depends perl-http-tiny: 
   :depends perl-list-moreutils: 
   :depends perl-module-pluggable: 
   :depends perl-perlio-gzip: 
   :depends perl-uri: 
   :depends perl-xml-parser: 
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

      mamba install perl-ms

   and update with::

      mamba update perl-ms

  To create a new environment, run::

      mamba create --name myenvname perl-ms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-ms:<tag>

   (see `perl-ms/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-ms| image:: https://img.shields.io/conda/dn/bioconda/perl-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-ms
   :alt:   (downloads)
.. |docker_perl-ms| image:: https://quay.io/repository/biocontainers/perl-ms/status
   :target: https://quay.io/repository/biocontainers/perl-ms
.. _`perl-ms/tags`: https://quay.io/repository/biocontainers/perl-ms?tab=tags


.. raw:: html

    <script>
        var package = "perl-ms";
        var versions = ["0.207002","0.207001","0.206003","0.206003","0.206003"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-ms/README.html