:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circos-tools'
.. highlight: bash

circos-tools
============

.. conda:recipe:: circos-tools
   :replaces_section_title:
   :noindex:

   circos\-tools provides several utility add\-on scripts\, such as for bundling links

   :homepage: http://circos.ca
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`circos-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos-tools/meta.yaml>`_

   


.. conda:package:: circos-tools

   |downloads_circos-tools| |docker_circos-tools|

   :versions:
      
      

      ``0.23-3``,  ``0.23-2``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends perl: 
   :depends perl-bioperl: ``>=1.7``
   :depends perl-carp: 
   :depends perl-config-general: 
   :depends perl-data-dumper: 
   :depends perl-file-path: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-graphics-colorobject: 
   :depends perl-list-moreutils: 
   :depends perl-math-random: 
   :depends perl-math-round: 
   :depends perl-math-vecstat: 
   :depends perl-memoize: 
   :depends perl-pod-usage: 
   :depends perl-regexp-common: 
   :depends perl-set-intspan: 
   :depends perl-statistics-descriptive: 
   :depends perl-time-hires: 
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

      mamba install circos-tools

   and update with::

      mamba update circos-tools

  To create a new environment, run::

      mamba create --name myenvname circos-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circos-tools:<tag>

   (see `circos-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_circos-tools| image:: https://img.shields.io/conda/dn/bioconda/circos-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/circos-tools
   :alt:   (downloads)
.. |docker_circos-tools| image:: https://quay.io/repository/biocontainers/circos-tools/status
   :target: https://quay.io/repository/biocontainers/circos-tools
.. _`circos-tools/tags`: https://quay.io/repository/biocontainers/circos-tools?tab=tags


.. raw:: html

    <script>
        var package = "circos-tools";
        var versions = ["0.23","0.23","0.23","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circos-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circos-tools/README.html