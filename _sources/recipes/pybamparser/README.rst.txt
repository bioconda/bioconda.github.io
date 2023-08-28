:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybamparser'
.. highlight: bash

pybamparser
===========

.. conda:recipe:: pybamparser
   :replaces_section_title:
   :noindex:

   Tools for parsing BAM data

   :homepage: https://github.com/blankenberg/pyBamParser
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`pybamparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamparser/meta.yaml>`_

   


.. conda:package:: pybamparser

   |downloads_pybamparser| |docker_pybamparser|

   :versions:
      
      

      ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends python: ``<3``
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

      mamba install pybamparser

   and update with::

      mamba update pybamparser

  To create a new environment, run::

      mamba create --name myenvname pybamparser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybamparser:<tag>

   (see `pybamparser/tags`_ for valid values for ``<tag>``)


.. |downloads_pybamparser| image:: https://img.shields.io/conda/dn/bioconda/pybamparser.svg?style=flat
   :target: https://anaconda.org/bioconda/pybamparser
   :alt:   (downloads)
.. |docker_pybamparser| image:: https://quay.io/repository/biocontainers/pybamparser/status
   :target: https://quay.io/repository/biocontainers/pybamparser
.. _`pybamparser/tags`: https://quay.io/repository/biocontainers/pybamparser?tab=tags


.. raw:: html

    <script>
        var package = "pybamparser";
        var versions = ["0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybamparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybamparser/README.html