:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orforise'
.. highlight: bash

orforise
========

.. conda:recipe:: orforise
   :replaces_section_title:
   :noindex:

   ORForise \- A platform for analysing and comparing genome annotations

   :homepage: https://github.com/NickJD/ORForise
   :license: GPL-3.0-only
   :recipe: /`orforise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orforise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orforise/meta.yaml>`_

   ORForise \- A platform for analysing and comparing genome annotations.



.. conda:package:: orforise

   |downloads_orforise| |docker_orforise|

   :versions:
      
      

      ``1.6.3-0``

      

   
   :depends numpy: ``>=1.22.0``
   :depends python: ``>=3.10``
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

      mamba install orforise

   and update with::

      mamba update orforise

  To create a new environment, run::

      mamba create --name myenvname orforise

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/orforise:<tag>

   (see `orforise/tags`_ for valid values for ``<tag>``)


.. |downloads_orforise| image:: https://img.shields.io/conda/dn/bioconda/orforise.svg?style=flat
   :target: https://anaconda.org/bioconda/orforise
   :alt:   (downloads)
.. |docker_orforise| image:: https://quay.io/repository/biocontainers/orforise/status
   :target: https://quay.io/repository/biocontainers/orforise
.. _`orforise/tags`: https://quay.io/repository/biocontainers/orforise?tab=tags


.. raw:: html

    <script>
        var package = "orforise";
        var versions = ["1.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orforise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orforise/README.html