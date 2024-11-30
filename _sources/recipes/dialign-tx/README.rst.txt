:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dialign-tx'
.. highlight: bash

dialign-tx
==========

.. conda:recipe:: dialign-tx
   :replaces_section_title:
   :noindex:

   DIALIGN\-TX is a greedy and progressive approaches for segment\-based multiple sequence alignment

   :homepage: https://dialign-tx.gobics.de
   :license: LGPL
   :recipe: /`dialign-tx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign-tx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dialign-tx/meta.yaml>`_

   


.. conda:package:: dialign-tx

   |downloads_dialign-tx| |docker_dialign-tx|

   :versions:
      
      

      ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
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

      mamba install dialign-tx

   and update with::

      mamba update dialign-tx

  To create a new environment, run::

      mamba create --name myenvname dialign-tx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dialign-tx:<tag>

   (see `dialign-tx/tags`_ for valid values for ``<tag>``)


.. |downloads_dialign-tx| image:: https://img.shields.io/conda/dn/bioconda/dialign-tx.svg?style=flat
   :target: https://anaconda.org/bioconda/dialign-tx
   :alt:   (downloads)
.. |docker_dialign-tx| image:: https://quay.io/repository/biocontainers/dialign-tx/status
   :target: https://quay.io/repository/biocontainers/dialign-tx
.. _`dialign-tx/tags`: https://quay.io/repository/biocontainers/dialign-tx?tab=tags


.. raw:: html

    <script>
        var package = "dialign-tx";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dialign-tx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dialign-tx/README.html