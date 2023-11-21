:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxmyphage'
.. highlight: bash

taxmyphage
==========

.. conda:recipe:: taxmyphage
   :replaces_section_title:
   :noindex:

   Script to assign taxonomy to a bacteriophage at the genus and species level

   :homepage: https://github.com/amillard/tax_myPHAGE
   :license: MIT
   :recipe: /`taxmyphage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmyphage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmyphage/meta.yaml>`_

   


.. conda:package:: taxmyphage

   |downloads_taxmyphage| |docker_taxmyphage|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends biopython: ``>=1.81.0,<2.0.0``
   :depends blast: ``>=2.14.0,<3.0.0``
   :depends icecream: ``>=2.1.3,<3.0.0``
   :depends importlib-metadata: ``>=6.8.0,<7.0.0``
   :depends mash: ``>=2.3,<3.0.0``
   :depends matplotlib-base: ``>=3.8.0,<4.0.0``
   :depends networkx: ``>=3.1.0,<4.0.0``
   :depends numpy: ``>=1.26.0,<2.0.0``
   :depends openpyxl: ``>=3.1.2,<4.0.0``
   :depends pandas: ``>=2.1.1,<3.0.0``
   :depends python: ``>=3.9,<3.13``
   :depends python-wget: ``>=3.2.0,<4.0.0``
   :depends scipy: ``>=1.11.3,<2.0.0``
   :depends seaborn: ``>=0.13.0,<0.14.0``
   :depends tqdm: ``>=4.66.1,<5.0.0``
   :depends zipp: ``>=3.17.0,<4.0.0``
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

      mamba install taxmyphage

   and update with::

      mamba update taxmyphage

  To create a new environment, run::

      mamba create --name myenvname taxmyphage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxmyphage:<tag>

   (see `taxmyphage/tags`_ for valid values for ``<tag>``)


.. |downloads_taxmyphage| image:: https://img.shields.io/conda/dn/bioconda/taxmyphage.svg?style=flat
   :target: https://anaconda.org/bioconda/taxmyphage
   :alt:   (downloads)
.. |docker_taxmyphage| image:: https://quay.io/repository/biocontainers/taxmyphage/status
   :target: https://quay.io/repository/biocontainers/taxmyphage
.. _`taxmyphage/tags`: https://quay.io/repository/biocontainers/taxmyphage?tab=tags


.. raw:: html

    <script>
        var package = "taxmyphage";
        var versions = ["0.2.4","0.2.3","0.2.1","0.2.0","0.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxmyphage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxmyphage/README.html