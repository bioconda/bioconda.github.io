:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbkviz'
.. highlight: bash

gbkviz
======

.. conda:recipe:: gbkviz
   :replaces_section_title:
   :noindex:

   Simple web application to visualize and compare genomes in Genbank files

   :homepage: https://github.com/moshi4/GBKviz/
   :license: MIT
   :recipe: /`gbkviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbkviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbkviz/meta.yaml>`_

   


.. conda:package:: gbkviz

   |downloads_gbkviz| |docker_gbkviz|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.5-0``

      

   
   :depends biopython: ``>=1.79,<2.0``
   :depends mummer4: ``>=4.0.0rc1``
   :depends python: ``>=3.7,<4.0``
   :depends reportlab: ``>=3.5.68,<4.0.0``
   :depends streamlit: ``1.8.1``
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

      mamba install gbkviz

   and update with::

      mamba update gbkviz

  To create a new environment, run::

      mamba create --name myenvname gbkviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gbkviz:<tag>

   (see `gbkviz/tags`_ for valid values for ``<tag>``)


.. |downloads_gbkviz| image:: https://img.shields.io/conda/dn/bioconda/gbkviz.svg?style=flat
   :target: https://anaconda.org/bioconda/gbkviz
   :alt:   (downloads)
.. |docker_gbkviz| image:: https://quay.io/repository/biocontainers/gbkviz/status
   :target: https://quay.io/repository/biocontainers/gbkviz
.. _`gbkviz/tags`: https://quay.io/repository/biocontainers/gbkviz?tab=tags


.. raw:: html

    <script>
        var package = "gbkviz";
        var versions = ["1.2.0","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbkviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbkviz/README.html