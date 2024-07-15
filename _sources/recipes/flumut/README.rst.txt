:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flumut'
.. highlight: bash

flumut
======

.. conda:recipe:: flumut
   :replaces_section_title:
   :noindex:

   A tool to search for molecular markers with potential impact on the biological characteristics of Influenza A viruses of the A\(H5N1\) subtype.

   :homepage: https://github.com/izsvenezie-virology/FluMut
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`flumut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flumut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flumut/meta.yaml>`_

   


.. conda:package:: flumut

   |downloads_flumut| |docker_flumut|

   :versions:
      
      

      ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.3-0``

      

   
   :depends biopython: ``>=1.81``
   :depends click: ``>=8.0.0``
   :depends flumutdb: ``>=6.0``
   :depends importlib-resources: ``>=1.3``
   :depends openpyxl: ``>=3.1.2``
   :depends python: ``>=3.7``
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

      mamba install flumut

   and update with::

      mamba update flumut

  To create a new environment, run::

      mamba create --name myenvname flumut

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flumut:<tag>

   (see `flumut/tags`_ for valid values for ``<tag>``)


.. |downloads_flumut| image:: https://img.shields.io/conda/dn/bioconda/flumut.svg?style=flat
   :target: https://anaconda.org/bioconda/flumut
   :alt:   (downloads)
.. |docker_flumut| image:: https://quay.io/repository/biocontainers/flumut/status
   :target: https://quay.io/repository/biocontainers/flumut
.. _`flumut/tags`: https://quay.io/repository/biocontainers/flumut?tab=tags


.. raw:: html

    <script>
        var package = "flumut";
        var versions = ["0.6.3","0.6.2","0.6.1","0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flumut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flumut/README.html