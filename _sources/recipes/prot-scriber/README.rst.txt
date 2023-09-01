:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prot-scriber'
.. highlight: bash

prot-scriber
============

.. conda:recipe:: prot-scriber
   :replaces_section_title:
   :noindex:

   Assigns short human readable descriptions \(HRD\) to query biological sequences using reference candidate descriptions.

   :homepage: https://github.com/usadellab/prot-scriber
   :license: GPL-3
   :recipe: /`prot-scriber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prot-scriber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prot-scriber/meta.yaml>`_

   


.. conda:package:: prot-scriber

   |downloads_prot-scriber| |docker_prot-scriber|

   :versions:
      
      

      ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install prot-scriber

   and update with::

      mamba update prot-scriber

  To create a new environment, run::

      mamba create --name myenvname prot-scriber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/prot-scriber:<tag>

   (see `prot-scriber/tags`_ for valid values for ``<tag>``)


.. |downloads_prot-scriber| image:: https://img.shields.io/conda/dn/bioconda/prot-scriber.svg?style=flat
   :target: https://anaconda.org/bioconda/prot-scriber
   :alt:   (downloads)
.. |docker_prot-scriber| image:: https://quay.io/repository/biocontainers/prot-scriber/status
   :target: https://quay.io/repository/biocontainers/prot-scriber
.. _`prot-scriber/tags`: https://quay.io/repository/biocontainers/prot-scriber?tab=tags


.. raw:: html

    <script>
        var package = "prot-scriber";
        var versions = ["0.1.4","0.1.4","0.1.4","0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prot-scriber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prot-scriber/README.html