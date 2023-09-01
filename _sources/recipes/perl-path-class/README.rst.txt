:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-path-class'
.. highlight: bash

perl-path-class
===============

.. conda:recipe:: perl-path-class
   :replaces_section_title:
   :noindex:

   Cross\-platform path specification manipulation

   :homepage: http://metacpan.org/pod/Path::Class
   :license: perl_5
   :recipe: /`perl-path-class <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-class>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-path-class/meta.yaml>`_

   


.. conda:package:: perl-path-class

   |downloads_perl-path-class| |docker_perl-path-class|

   :versions:
      
      

      ``0.37-2``,  ``0.37-1``,  ``0.37-0``,  ``0.36-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-file-path: 
   :depends perl-file-temp: 
   :depends perl-parent: 
   :depends perl-perl-ostype: 
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

      mamba install perl-path-class

   and update with::

      mamba update perl-path-class

  To create a new environment, run::

      mamba create --name myenvname perl-path-class

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-path-class:<tag>

   (see `perl-path-class/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-path-class| image:: https://img.shields.io/conda/dn/bioconda/perl-path-class.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-path-class
   :alt:   (downloads)
.. |docker_perl-path-class| image:: https://quay.io/repository/biocontainers/perl-path-class/status
   :target: https://quay.io/repository/biocontainers/perl-path-class
.. _`perl-path-class/tags`: https://quay.io/repository/biocontainers/perl-path-class?tab=tags


.. raw:: html

    <script>
        var package = "perl-path-class";
        var versions = ["0.37","0.37","0.37","0.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-path-class/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-path-class/README.html