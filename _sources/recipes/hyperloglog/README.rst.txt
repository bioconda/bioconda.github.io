:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hyperloglog'
.. highlight: bash

hyperloglog
===========

.. conda:recipe:: hyperloglog
   :replaces_section_title:
   :noindex:

   HyperLogLog cardinality counter.

   :homepage: https://github.com/svpcom/hyperloglog
   :documentation: https://github.com/svpcom/hyperloglog/blob/master/README.rst
   
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`hyperloglog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyperloglog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyperloglog/meta.yaml>`_

   


.. conda:package:: hyperloglog

   |downloads_hyperloglog| |docker_hyperloglog|

   :versions:
      
      

      ``0.0.14-0``

      

   
   :depends python: ``>=3``
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

      mamba install hyperloglog

   and update with::

      mamba update hyperloglog

  To create a new environment, run::

      mamba create --name myenvname hyperloglog

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hyperloglog:<tag>

   (see `hyperloglog/tags`_ for valid values for ``<tag>``)


.. |downloads_hyperloglog| image:: https://img.shields.io/conda/dn/bioconda/hyperloglog.svg?style=flat
   :target: https://anaconda.org/bioconda/hyperloglog
   :alt:   (downloads)
.. |docker_hyperloglog| image:: https://quay.io/repository/biocontainers/hyperloglog/status
   :target: https://quay.io/repository/biocontainers/hyperloglog
.. _`hyperloglog/tags`: https://quay.io/repository/biocontainers/hyperloglog?tab=tags


.. raw:: html

    <script>
        var package = "hyperloglog";
        var versions = ["0.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hyperloglog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hyperloglog/README.html