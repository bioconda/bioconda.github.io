:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygmes'
.. highlight: bash

pygmes
======

.. conda:recipe:: pygmes
   :replaces_section_title:
   :noindex:

   Run GeneMark\-ES using pretrained models

   :homepage: https://github.com/openpaul/pygmes
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pygmes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygmes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygmes/meta.yaml>`_

   


.. conda:package:: pygmes

   |downloads_pygmes| |docker_pygmes|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3.4-0``

      

   
   :depends diamond: ``>=0.8``
   :depends ete3: 
   :depends prodigal: ``>=2``
   :depends pyfaidx: ``>=0.5.8``
   :depends python: ``>=3.6``
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

      mamba install pygmes

   and update with::

      mamba update pygmes

  To create a new environment, run::

      mamba create --name myenvname pygmes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pygmes:<tag>

   (see `pygmes/tags`_ for valid values for ``<tag>``)


.. |downloads_pygmes| image:: https://img.shields.io/conda/dn/bioconda/pygmes.svg?style=flat
   :target: https://anaconda.org/bioconda/pygmes
   :alt:   (downloads)
.. |docker_pygmes| image:: https://quay.io/repository/biocontainers/pygmes/status
   :target: https://quay.io/repository/biocontainers/pygmes
.. _`pygmes/tags`: https://quay.io/repository/biocontainers/pygmes?tab=tags


.. raw:: html

    <script>
        var package = "pygmes";
        var versions = ["0.1.7","0.1.6","0.1.5","0.1.4","0.1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygmes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygmes/README.html