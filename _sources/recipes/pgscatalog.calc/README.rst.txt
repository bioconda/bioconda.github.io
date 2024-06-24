:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgscatalog.calc'
.. highlight: bash

pgscatalog.calc
===============

.. conda:recipe:: pgscatalog.calc
   :replaces_section_title:
   :noindex:

   Libraries and applications for working with calculated polygenic scores

   :homepage: https://github.com/PGScatalog/pygscatalog/
   :license: Apache-2.0
   :recipe: /`pgscatalog.calc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.calc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.calc/meta.yaml>`_

   


.. conda:package:: pgscatalog.calc

   |downloads_pgscatalog.calc| |docker_pgscatalog.calc|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends numpy: ``>=1.26.4,<2.0.0``
   :depends pandas: ``>=2.2.0,<3.0.0``
   :depends pgscatalog.core: ``>=0.2.1,<0.3.0``
   :depends pyarrow: ``>=15.0.0,<16.0.0``
   :depends python: ``>=3.10``
   :depends scikit-learn: ``>=1.4.0,<2.0.0``
   :depends scipy: ``>=1.12.0,<2.0.0``
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

      mamba install pgscatalog.calc

   and update with::

      mamba update pgscatalog.calc

  To create a new environment, run::

      mamba create --name myenvname pgscatalog.calc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pgscatalog.calc:<tag>

   (see `pgscatalog.calc/tags`_ for valid values for ``<tag>``)


.. |downloads_pgscatalog.calc| image:: https://img.shields.io/conda/dn/bioconda/pgscatalog.calc.svg?style=flat
   :target: https://anaconda.org/bioconda/pgscatalog.calc
   :alt:   (downloads)
.. |docker_pgscatalog.calc| image:: https://quay.io/repository/biocontainers/pgscatalog.calc/status
   :target: https://quay.io/repository/biocontainers/pgscatalog.calc
.. _`pgscatalog.calc/tags`: https://quay.io/repository/biocontainers/pgscatalog.calc?tab=tags


.. raw:: html

    <script>
        var package = "pgscatalog.calc";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgscatalog.calc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgscatalog.calc/README.html