:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gogstools'
.. highlight: bash

gogstools
=========

.. conda:recipe:: gogstools
   :replaces_section_title:
   :noindex:

   GenOuest tools for manipulating Official Gene Sets

   :homepage: https://github.com/genouest/ogs-tools
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`gogstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gogstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gogstools/meta.yaml>`_

   


.. conda:package:: gogstools

   |downloads_gogstools| |docker_gogstools|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends bcbio-gff: 
   :depends bedops: ``2.4.39``
   :depends bedtools: 
   :depends gffread: 
   :depends python: ``3.10``
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

      mamba install gogstools

   and update with::

      mamba update gogstools

  To create a new environment, run::

      mamba create --name myenvname gogstools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gogstools:<tag>

   (see `gogstools/tags`_ for valid values for ``<tag>``)


.. |downloads_gogstools| image:: https://img.shields.io/conda/dn/bioconda/gogstools.svg?style=flat
   :target: https://anaconda.org/bioconda/gogstools
   :alt:   (downloads)
.. |docker_gogstools| image:: https://quay.io/repository/biocontainers/gogstools/status
   :target: https://quay.io/repository/biocontainers/gogstools
.. _`gogstools/tags`: https://quay.io/repository/biocontainers/gogstools?tab=tags


.. raw:: html

    <script>
        var package = "gogstools";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gogstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gogstools/README.html