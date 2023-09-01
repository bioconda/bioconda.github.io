:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'illumiprocessor'
.. highlight: bash

illumiprocessor
===============

.. conda:recipe:: illumiprocessor
   :replaces_section_title:
   :noindex:

   illumiprocessor is a tool to batch process illumina sequencing reads using the excellent trimmomatic package.

   :homepage: https://github.com/faircloth-lab/illumiprocessor
   :license: BSD
   :recipe: /`illumiprocessor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumiprocessor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/illumiprocessor/meta.yaml>`_

   


.. conda:package:: illumiprocessor

   |downloads_illumiprocessor| |docker_illumiprocessor|

   :versions:
      
      

      ``2.10-0``,  ``2.0.9-2``,  ``2.0.9-1``,  ``2.0.9-0``

      

   
   :depends openjdk: ``11.0.8.*``
   :depends python: ``3.6.*``
   :depends trimmomatic: ``0.39.*``
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

      mamba install illumiprocessor

   and update with::

      mamba update illumiprocessor

  To create a new environment, run::

      mamba create --name myenvname illumiprocessor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/illumiprocessor:<tag>

   (see `illumiprocessor/tags`_ for valid values for ``<tag>``)


.. |downloads_illumiprocessor| image:: https://img.shields.io/conda/dn/bioconda/illumiprocessor.svg?style=flat
   :target: https://anaconda.org/bioconda/illumiprocessor
   :alt:   (downloads)
.. |docker_illumiprocessor| image:: https://quay.io/repository/biocontainers/illumiprocessor/status
   :target: https://quay.io/repository/biocontainers/illumiprocessor
.. _`illumiprocessor/tags`: https://quay.io/repository/biocontainers/illumiprocessor?tab=tags


.. raw:: html

    <script>
        var package = "illumiprocessor";
        var versions = ["2.10","2.0.9","2.0.9","2.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/illumiprocessor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/illumiprocessor/README.html