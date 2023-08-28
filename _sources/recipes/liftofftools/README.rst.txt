:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liftofftools'
.. highlight: bash

liftofftools
============

.. conda:recipe:: liftofftools
   :replaces_section_title:
   :noindex:

   A tool for comparing annotations across genome assemblies

   :homepage: https://github.com/agshumate/LiftoffTools
   :license: GPL / GPL-3.0-only
   :recipe: /`liftofftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftofftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftofftools/meta.yaml>`_

   


.. conda:package:: liftofftools

   |downloads_liftofftools| |docker_liftofftools|

   :versions:
      
      

      ``0.4.4-0``,  ``0.4.3.2-0``,  ``0.4.3-0``

      

   
   :depends biopython: ``>=1.76``
   :depends gffutils: ``>=0.10.1``
   :depends matplotlib-base: ``>=3.5.2``
   :depends mmseqs2: 
   :depends nltk: ``>=3.6.7``
   :depends numpy: ``>=1.21.1``
   :depends parasail-python: ``>=1.2.4``
   :depends pyfaidx: ``>=0.5.8``
   :depends python: ``>=3.7``
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

      mamba install liftofftools

   and update with::

      mamba update liftofftools

  To create a new environment, run::

      mamba create --name myenvname liftofftools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/liftofftools:<tag>

   (see `liftofftools/tags`_ for valid values for ``<tag>``)


.. |downloads_liftofftools| image:: https://img.shields.io/conda/dn/bioconda/liftofftools.svg?style=flat
   :target: https://anaconda.org/bioconda/liftofftools
   :alt:   (downloads)
.. |docker_liftofftools| image:: https://quay.io/repository/biocontainers/liftofftools/status
   :target: https://quay.io/repository/biocontainers/liftofftools
.. _`liftofftools/tags`: https://quay.io/repository/biocontainers/liftofftools?tab=tags


.. raw:: html

    <script>
        var package = "liftofftools";
        var versions = ["0.4.4","0.4.3.2","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liftofftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liftofftools/README.html