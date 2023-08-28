:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sample-sheet'
.. highlight: bash

sample-sheet
============

.. conda:recipe:: sample-sheet
   :replaces_section_title:
   :noindex:

   An Illumina Sample Sheet parsing library

   :homepage: https://github.com/clintval/sample-sheet
   :documentation: https://sample-sheet.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`sample-sheet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample-sheet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sample-sheet/meta.yaml>`_

   


.. conda:package:: sample-sheet

   |downloads_sample-sheet| |docker_sample-sheet|

   :versions:
      
      

      ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.4-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``

      

   
   :depends click: 
   :depends python: ``>=3.6``
   :depends requests: 
   :depends smart_open: ``>=1.5.4``
   :depends tabulate: 
   :depends terminaltables: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sample-sheet

   and update with::

      mamba update sample-sheet

  To create a new environment, run::

      mamba create --name myenvname sample-sheet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sample-sheet:<tag>

   (see `sample-sheet/tags`_ for valid values for ``<tag>``)


.. |downloads_sample-sheet| image:: https://img.shields.io/conda/dn/bioconda/sample-sheet.svg?style=flat
   :target: https://anaconda.org/bioconda/sample-sheet
   :alt:   (downloads)
.. |docker_sample-sheet| image:: https://quay.io/repository/biocontainers/sample-sheet/status
   :target: https://quay.io/repository/biocontainers/sample-sheet
.. _`sample-sheet/tags`: https://quay.io/repository/biocontainers/sample-sheet?tab=tags


.. raw:: html

    <script>
        var package = "sample-sheet";
        var versions = ["0.13.0","0.12.0","0.11.0","0.10.0","0.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sample-sheet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sample-sheet/README.html