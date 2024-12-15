:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snostrip'
.. highlight: bash

snostrip
========

.. conda:recipe:: snostrip
   :replaces_section_title:
   :noindex:

   Automatic snoRNA annotation pipeline

   :homepage: http://snostrip.bioinf.uni-leipzig.de/help.py
   :license: GPL3
   :recipe: /`snostrip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snostrip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snostrip/meta.yaml>`_

   


.. conda:package:: snostrip

   |downloads_snostrip| |docker_snostrip|

   :versions:
      
      

      ``2.0.2-6``,  ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends blast-legacy: ``>=2.2.26,<3.0a0``
   :depends infernal: ``>=1.1.5,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends muscle: ``>=5.3,<5.4.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends viennarna: ``>=2.7.0,<2.8.0a0``
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

      mamba install snostrip

   and update with::

      mamba update snostrip

  To create a new environment, run::

      mamba create --name myenvname snostrip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snostrip:<tag>

   (see `snostrip/tags`_ for valid values for ``<tag>``)


.. |downloads_snostrip| image:: https://img.shields.io/conda/dn/bioconda/snostrip.svg?style=flat
   :target: https://anaconda.org/bioconda/snostrip
   :alt:   (downloads)
.. |docker_snostrip| image:: https://quay.io/repository/biocontainers/snostrip/status
   :target: https://quay.io/repository/biocontainers/snostrip
.. _`snostrip/tags`: https://quay.io/repository/biocontainers/snostrip?tab=tags


.. raw:: html

    <script>
        var package = "snostrip";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snostrip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snostrip/README.html