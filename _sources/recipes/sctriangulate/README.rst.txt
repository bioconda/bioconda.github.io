:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sctriangulate'
.. highlight: bash

sctriangulate
=============

.. conda:recipe:: sctriangulate
   :replaces_section_title:
   :noindex:

   A Python package to mix\-and\-match conflicting clustering results in single cell analysis\, and generate reconciled clustering solutions.

   :homepage: https://github.com/frankligy/scTriangulate
   :license: MIT / MIT
   :recipe: /`sctriangulate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctriangulate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sctriangulate/meta.yaml>`_

   


.. conda:package:: sctriangulate

   |downloads_sctriangulate| |docker_sctriangulate|

   :versions:
      
      

      ``0.13.0-0``

      

   
   :depends anytree: 
   :depends gseapy: ``0.10.4``
   :depends mygene: ``3.2.2``
   :depends python: ``>=3.7``
   :depends scrublet: ``0.2.3``
   :depends squidpy: 
   :depends yattag: 
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

      mamba install sctriangulate

   and update with::

      mamba update sctriangulate

  To create a new environment, run::

      mamba create --name myenvname sctriangulate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sctriangulate:<tag>

   (see `sctriangulate/tags`_ for valid values for ``<tag>``)


.. |downloads_sctriangulate| image:: https://img.shields.io/conda/dn/bioconda/sctriangulate.svg?style=flat
   :target: https://anaconda.org/bioconda/sctriangulate
   :alt:   (downloads)
.. |docker_sctriangulate| image:: https://quay.io/repository/biocontainers/sctriangulate/status
   :target: https://quay.io/repository/biocontainers/sctriangulate
.. _`sctriangulate/tags`: https://quay.io/repository/biocontainers/sctriangulate?tab=tags


.. raw:: html

    <script>
        var package = "sctriangulate";
        var versions = ["0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sctriangulate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sctriangulate/README.html