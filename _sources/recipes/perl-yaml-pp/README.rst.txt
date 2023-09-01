:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-yaml-pp'
.. highlight: bash

perl-yaml-pp
============

.. conda:recipe:: perl-yaml-pp/0.021
   :replaces_section_title:
   :noindex:

   YAML 1.2 Processor

   :homepage: http://metacpan.org/pod/YAML::PP
   :license: perl artistic
   :recipe: /`perl-yaml-pp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-pp>`_/`0.021 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-pp/0.021>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-yaml-pp/0.021/meta.yaml>`_

   


.. conda:package:: perl-yaml-pp

   |downloads_perl-yaml-pp| |docker_perl-yaml-pp|

   :versions:
      
      

      ``0.021-2``,  ``0.021-1``,  ``0.021-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-data-dumper: 
   :depends perl-encode: 
   :depends perl-exporter: 
   :depends perl-mime-base64: 
   :depends perl-module-load: 
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

      mamba install perl-yaml-pp

   and update with::

      mamba update perl-yaml-pp

  To create a new environment, run::

      mamba create --name myenvname perl-yaml-pp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-yaml-pp:<tag>

   (see `perl-yaml-pp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-yaml-pp| image:: https://img.shields.io/conda/dn/bioconda/perl-yaml-pp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-yaml-pp
   :alt:   (downloads)
.. |docker_perl-yaml-pp| image:: https://quay.io/repository/biocontainers/perl-yaml-pp/status
   :target: https://quay.io/repository/biocontainers/perl-yaml-pp
.. _`perl-yaml-pp/tags`: https://quay.io/repository/biocontainers/perl-yaml-pp?tab=tags


.. raw:: html

    <script>
        var package = "perl-yaml-pp";
        var versions = ["0.021","0.021","0.021"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-yaml-pp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-yaml-pp/README.html