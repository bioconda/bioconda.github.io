:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'syny'
.. highlight: bash

syny
====

.. conda:recipe:: syny
   :replaces_section_title:
   :noindex:

   Genome collinearity inferences

   :homepage: https://github.com/PombertLab/SYNY
   :license: MIT
   :recipe: /`syny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/syny/meta.yaml>`_

   


.. conda:package:: syny

   |downloads_syny| |docker_syny|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2-0``,  ``1.1b-0``,  ``1.1a-0``

      

   
   :depends circos: 
   :depends diamond: ``>=2.1.9``
   :depends libgd: 
   :depends mashmap: ``>=3.1.3``
   :depends matplotlib-base: 
   :depends minimap2: ``>=2.28``
   :depends pandas: 
   :depends perl: ``>=5.32``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-clone: 
   :depends perl-config-general: 
   :depends perl-font-ttf: 
   :depends perl-gd: 
   :depends perl-getopt-argvfile: 
   :depends perl-list-moreutils: 
   :depends perl-math-bezier: 
   :depends perl-math-round: 
   :depends perl-math-vecstat: 
   :depends perl-params-validate: 
   :depends perl-perlio-gzip: 
   :depends perl-readonly: 
   :depends perl-regexp-common: 
   :depends perl-set-intspan: 
   :depends perl-statistics-basic: 
   :depends perl-svg: 
   :depends perl-text-format: 
   :depends perl-text-roman: 
   :depends python: ``>=3.12,<3.13.0a0``
   :depends scipy: 
   :depends seaborn: 
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

      mamba install syny

   and update with::

      mamba update syny

  To create a new environment, run::

      mamba create --name myenvname syny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/syny:<tag>

   (see `syny/tags`_ for valid values for ``<tag>``)


.. |downloads_syny| image:: https://img.shields.io/conda/dn/bioconda/syny.svg?style=flat
   :target: https://anaconda.org/bioconda/syny
   :alt:   (downloads)
.. |docker_syny| image:: https://quay.io/repository/biocontainers/syny/status
   :target: https://quay.io/repository/biocontainers/syny
.. _`syny/tags`: https://quay.io/repository/biocontainers/syny?tab=tags


.. raw:: html

    <script>
        var package = "syny";
        var versions = ["1.3.1","1.3.0","1.2","1.1b","1.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/syny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/syny/README.html