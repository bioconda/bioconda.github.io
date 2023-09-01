:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'breakfast'
.. highlight: bash

breakfast
=========

.. conda:recipe:: breakfast
   :replaces_section_title:
   :noindex:

   breakfast\: fast putative outbreak cluster and infection chain detection using SNPs

   :homepage: https://github.com/rki-mf1/breakfast
   :license: MIT
   :recipe: /`breakfast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakfast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/breakfast/meta.yaml>`_

   


.. conda:package:: breakfast

   |downloads_breakfast| |docker_breakfast|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``

      

   
   :depends click: ``>=8.1.3,<9.0.0``
   :depends networkx: ``>=2.8,<3.0``
   :depends numpy: ``>=1.22.3,<2.0.0``
   :depends pandas: ``>=1.4.2,<2.0.0``
   :depends python: ``>=3.9,<3.11``
   :depends scikit-learn: ``>=1.0.2,<2.0.0``
   :depends scipy: ``>=1.8.0,<2.0.0``
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

      mamba install breakfast

   and update with::

      mamba update breakfast

  To create a new environment, run::

      mamba create --name myenvname breakfast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/breakfast:<tag>

   (see `breakfast/tags`_ for valid values for ``<tag>``)


.. |downloads_breakfast| image:: https://img.shields.io/conda/dn/bioconda/breakfast.svg?style=flat
   :target: https://anaconda.org/bioconda/breakfast
   :alt:   (downloads)
.. |docker_breakfast| image:: https://quay.io/repository/biocontainers/breakfast/status
   :target: https://quay.io/repository/biocontainers/breakfast
.. _`breakfast/tags`: https://quay.io/repository/biocontainers/breakfast?tab=tags


.. raw:: html

    <script>
        var package = "breakfast";
        var versions = ["0.4.3","0.4.2","0.4.1","0.4.0","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/breakfast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/breakfast/README.html