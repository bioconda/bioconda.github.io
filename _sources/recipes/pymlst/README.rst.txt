:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymlst'
.. highlight: bash

pymlst
======

.. conda:recipe:: pymlst
   :replaces_section_title:
   :noindex:

   python Mlst Local Search Tool

   :homepage: https://github.com/bvalot/pyMLST.git
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pymlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymlst/meta.yaml>`_

   


.. conda:package:: pymlst

   |downloads_pymlst| |docker_pymlst|

   :versions:
      
      

      ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-1``,  ``2.1.3-0``,  ``2.1.2-0``

      

   
   :depends alembic: ``>=1.6``
   :depends beautifulsoup4: ``>=4.9``
   :depends biopython: ``>=1.78``
   :depends click: ``>=7.1``
   :depends decorator: ``>=4.4``
   :depends git: ``>=1.7``
   :depends gitpython: ``>=3.1``
   :depends kma: ``>=1.3``
   :depends mafft: ``>=7.3``
   :depends networkx: ``>=2.5``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=1.2``
   :depends pytest: ``>=6.2``
   :depends python: ``>=3.7``
   :depends questionary: ``>=1.9``
   :depends requests: ``>=2.23``
   :depends sqlalchemy: ``>=1.4,<2``
   :depends ucsc-blat: ``>=360``
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

      mamba install pymlst

   and update with::

      mamba update pymlst

  To create a new environment, run::

      mamba create --name myenvname pymlst

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymlst:<tag>

   (see `pymlst/tags`_ for valid values for ``<tag>``)


.. |downloads_pymlst| image:: https://img.shields.io/conda/dn/bioconda/pymlst.svg?style=flat
   :target: https://anaconda.org/bioconda/pymlst
   :alt:   (downloads)
.. |docker_pymlst| image:: https://quay.io/repository/biocontainers/pymlst/status
   :target: https://quay.io/repository/biocontainers/pymlst
.. _`pymlst/tags`: https://quay.io/repository/biocontainers/pymlst?tab=tags


.. raw:: html

    <script>
        var package = "pymlst";
        var versions = ["2.2.2","2.2.1","2.1.6","2.1.5","2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymlst/README.html