:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pegs'
.. highlight: bash

pegs
====

.. conda:recipe:: pegs
   :replaces_section_title:
   :noindex:

   Peak\-set Enrichment of Gene\-Sets \(PEGS\)

   :homepage: https://github.com/fls-bioinformatics-core/pegs
   :documentation: https://pegs.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pegs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pegs/meta.yaml>`_

   


.. conda:package:: pegs

   |downloads_pegs| |docker_pegs|

   :versions:
      
      

      ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``

      

   
   :depends matplotlib-base: ``3.3.4``
   :depends numpy: ``1.19.5``
   :depends pathlib2: 
   :depends pillow: ``8.1.1``
   :depends python: ``>=3.6``
   :depends scipy: ``1.5``
   :depends seaborn: ``0.11.1``
   :depends xlsxwriter: ``>=0.8.4``
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

      mamba install pegs

   and update with::

      mamba update pegs

  To create a new environment, run::

      mamba create --name myenvname pegs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pegs:<tag>

   (see `pegs/tags`_ for valid values for ``<tag>``)


.. |downloads_pegs| image:: https://img.shields.io/conda/dn/bioconda/pegs.svg?style=flat
   :target: https://anaconda.org/bioconda/pegs
   :alt:   (downloads)
.. |docker_pegs| image:: https://quay.io/repository/biocontainers/pegs/status
   :target: https://quay.io/repository/biocontainers/pegs
.. _`pegs/tags`: https://quay.io/repository/biocontainers/pegs?tab=tags


.. raw:: html

    <script>
        var package = "pegs";
        var versions = ["0.6.6","0.6.5","0.6.4","0.6.3","0.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pegs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pegs/README.html