:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyani'
.. highlight: bash

pyani
=====

.. conda:recipe:: pyani
   :replaces_section_title:
   :noindex:

   pyani provides a package and script for calculation of genome\-scale average nucleotide identity.

   :homepage: http://widdowquinn.github.io/pyani/
   :license: MIT / MIT
   :recipe: /`pyani <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyani/meta.yaml>`_

   


.. conda:package:: pyani

   |downloads_pyani| |docker_pyani|

   :versions:
      
      

      ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.3-0``,  ``0.2.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends blast-legacy: 
   :depends matplotlib-base: 
   :depends mummer: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>3``
   :depends scipy: 
   :depends seaborn: 
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

      mamba install pyani

   and update with::

      mamba update pyani

  To create a new environment, run::

      mamba create --name myenvname pyani

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyani:<tag>

   (see `pyani/tags`_ for valid values for ``<tag>``)


.. |downloads_pyani| image:: https://img.shields.io/conda/dn/bioconda/pyani.svg?style=flat
   :target: https://anaconda.org/bioconda/pyani
   :alt:   (downloads)
.. |docker_pyani| image:: https://quay.io/repository/biocontainers/pyani/status
   :target: https://quay.io/repository/biocontainers/pyani
.. _`pyani/tags`: https://quay.io/repository/biocontainers/pyani?tab=tags


.. raw:: html

    <script>
        var package = "pyani";
        var versions = ["0.2.12","0.2.11","0.2.10","0.2.9","0.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyani/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyani/README.html