:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dedup'
.. highlight: bash

dedup
=====

.. conda:recipe:: dedup
   :replaces_section_title:
   :noindex:

   DeDup is a tool for read deduplication in paired\-end read merging \(e.g. for ancient DNA experiments\).

   :homepage: https://github.com/apeltzer/dedup
   :license: GPLv3
   :recipe: /`dedup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dedup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dedup/meta.yaml>`_

   


.. conda:package:: dedup

   |downloads_dedup| |docker_dedup|

   :versions:
      
      

      ``0.12.9-0``,  ``0.12.8-1``,  ``0.12.8-0``,  ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.5-1``,  ``0.12.4-1``,  ``0.12.3-1``,  ``0.12.3-0``

      

   
   :depends openjdk: 
   :depends python: 
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

      mamba install dedup

   and update with::

      mamba update dedup

  To create a new environment, run::

      mamba create --name myenvname dedup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dedup:<tag>

   (see `dedup/tags`_ for valid values for ``<tag>``)


.. |downloads_dedup| image:: https://img.shields.io/conda/dn/bioconda/dedup.svg?style=flat
   :target: https://anaconda.org/bioconda/dedup
   :alt:   (downloads)
.. |docker_dedup| image:: https://quay.io/repository/biocontainers/dedup/status
   :target: https://quay.io/repository/biocontainers/dedup
.. _`dedup/tags`: https://quay.io/repository/biocontainers/dedup?tab=tags


.. raw:: html

    <script>
        var package = "dedup";
        var versions = ["0.12.9","0.12.8","0.12.8","0.12.7","0.12.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dedup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dedup/README.html