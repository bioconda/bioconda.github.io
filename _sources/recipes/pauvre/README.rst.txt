:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pauvre'
.. highlight: bash

pauvre
======

.. conda:recipe:: pauvre
   :replaces_section_title:
   :noindex:

   Tools for plotting Oxford Nanopore and other long\-read data.

   :homepage: https://github.com/conchoecia/pauvre
   :license: GPL3 / GPL-3.0-only
   :recipe: /`pauvre <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauvre>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pauvre/meta.yaml>`_

   


.. conda:package:: pauvre

   |downloads_pauvre| |docker_pauvre|

   :versions:
      
      

      ``0.1924-0``,  ``0.1923-1``,  ``0.1923-0``,  ``0.2.2-0``,  ``0.1.86-1``,  ``0.1.86-0``,  ``0.1.85-0``,  ``0.1.3-0``

      

   
   :depends biopython: ``>=1.68``
   :depends matplotlib-base: ``>=2.0.2``
   :depends numpy: ``>=1.12.1``
   :depends pandas: ``>=0.20.1``
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install pauvre

   and update with::

      mamba update pauvre

  To create a new environment, run::

      mamba create --name myenvname pauvre

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pauvre:<tag>

   (see `pauvre/tags`_ for valid values for ``<tag>``)


.. |downloads_pauvre| image:: https://img.shields.io/conda/dn/bioconda/pauvre.svg?style=flat
   :target: https://anaconda.org/bioconda/pauvre
   :alt:   (downloads)
.. |docker_pauvre| image:: https://quay.io/repository/biocontainers/pauvre/status
   :target: https://quay.io/repository/biocontainers/pauvre
.. _`pauvre/tags`: https://quay.io/repository/biocontainers/pauvre?tab=tags


.. raw:: html

    <script>
        var package = "pauvre";
        var versions = ["0.1924","0.1923","0.1923","0.2.2","0.1.86"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pauvre/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pauvre/README.html