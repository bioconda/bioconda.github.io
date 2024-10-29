:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sopa'
.. highlight: bash

sopa
====

.. conda:recipe:: sopa
   :replaces_section_title:
   :noindex:

   Spatial\-omics pipeline and analysis.

   :homepage: https://gustaveroussy.github.io/sopa
   :license: BSD / BSD-3-Clause
   :recipe: /`sopa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sopa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sopa/meta.yaml>`_

   


.. conda:package:: sopa

   |downloads_sopa| |docker_sopa|

   :versions:
      
      

      ``1.1.5-0``

      

   
   :depends botocore: ``1.34.19.*``
   :depends flake8: ``>=7.0.0,<8.0.0``
   :depends python: ``>=3.9,<3.12``
   :depends scanpy: ``>=1.9.8``
   :depends spatialdata: ``>=0.2.0``
   :depends spatialdata-io: ``>=0.1.3``
   :depends typer: ``>=0.9.0``
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

      mamba install sopa

   and update with::

      mamba update sopa

  To create a new environment, run::

      mamba create --name myenvname sopa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sopa:<tag>

   (see `sopa/tags`_ for valid values for ``<tag>``)


.. |downloads_sopa| image:: https://img.shields.io/conda/dn/bioconda/sopa.svg?style=flat
   :target: https://anaconda.org/bioconda/sopa
   :alt:   (downloads)
.. |docker_sopa| image:: https://quay.io/repository/biocontainers/sopa/status
   :target: https://quay.io/repository/biocontainers/sopa
.. _`sopa/tags`: https://quay.io/repository/biocontainers/sopa?tab=tags


.. raw:: html

    <script>
        var package = "sopa";
        var versions = ["1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sopa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sopa/README.html