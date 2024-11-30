:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pepquery'
.. highlight: bash

pepquery
========

.. conda:recipe:: pepquery
   :replaces_section_title:
   :noindex:

   PepQuery is a peptide\-centric search engine for novel peptide identification and validation.

   :homepage: https://github.com/bzhanglab/PepQuery
   :license: GPL-3
   :recipe: /`pepquery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepquery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pepquery/meta.yaml>`_

   


.. conda:package:: pepquery

   |downloads_pepquery| |docker_pepquery|

   :versions:
      
      

      ``2.0.2-0``,  ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.3.0-0``,  ``1.2.0-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install pepquery

   and update with::

      mamba update pepquery

  To create a new environment, run::

      mamba create --name myenvname pepquery

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pepquery:<tag>

   (see `pepquery/tags`_ for valid values for ``<tag>``)


.. |downloads_pepquery| image:: https://img.shields.io/conda/dn/bioconda/pepquery.svg?style=flat
   :target: https://anaconda.org/bioconda/pepquery
   :alt:   (downloads)
.. |docker_pepquery| image:: https://quay.io/repository/biocontainers/pepquery/status
   :target: https://quay.io/repository/biocontainers/pepquery
.. _`pepquery/tags`: https://quay.io/repository/biocontainers/pepquery?tab=tags


.. raw:: html

    <script>
        var package = "pepquery";
        var versions = ["2.0.2","1.6.2","1.6.2","1.6.2","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pepquery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pepquery/README.html