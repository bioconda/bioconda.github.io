:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alv'
.. highlight: bash

alv
===

.. conda:recipe:: alv
   :replaces_section_title:
   :noindex:

   A console\-based sequence alignment viewer

   :homepage: https://github.com/arvestad/alv
   :license: GPL3 / GPL-3.0-only
   :recipe: /`alv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alv/meta.yaml>`_

   


.. conda:package:: alv

   |downloads_alv| |docker_alv|

   :versions:
      
      

      ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends colorama: ``>=0.3.8``
   :depends python: ``>=3.6``
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

      mamba install alv

   and update with::

      mamba update alv

  To create a new environment, run::

      mamba create --name myenvname alv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alv:<tag>

   (see `alv/tags`_ for valid values for ``<tag>``)


.. |downloads_alv| image:: https://img.shields.io/conda/dn/bioconda/alv.svg?style=flat
   :target: https://anaconda.org/bioconda/alv
   :alt:   (downloads)
.. |docker_alv| image:: https://quay.io/repository/biocontainers/alv/status
   :target: https://quay.io/repository/biocontainers/alv
.. _`alv/tags`: https://quay.io/repository/biocontainers/alv?tab=tags


.. raw:: html

    <script>
        var package = "alv";
        var versions = ["1.7.2","1.7.1","1.7.0","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alv/README.html