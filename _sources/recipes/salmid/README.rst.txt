:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'salmid'
.. highlight: bash

salmid
======

.. conda:recipe:: salmid
   :replaces_section_title:
   :noindex:

   Rapid tool to check taxonomic ID of single isolate samples. Currently only IDs Salmonella species and subspecies\, and some common contaminants \(Listeria\, Escherichia\).

   :homepage: https://github.com/hcdenbakker/SalmID
   :license: MIT
   :recipe: /`salmid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/salmid/meta.yaml>`_
   :links: DOI: :DOI:`10.5281/zenodo.1409766`

   


.. conda:package:: salmid

   |downloads_salmid| |docker_salmid|

   :versions:
      
      

      ``0.1.23-0``

      

   
   :depends python: ``>=3``
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

      mamba install salmid

   and update with::

      mamba update salmid

  To create a new environment, run::

      mamba create --name myenvname salmid

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/salmid:<tag>

   (see `salmid/tags`_ for valid values for ``<tag>``)


.. |downloads_salmid| image:: https://img.shields.io/conda/dn/bioconda/salmid.svg?style=flat
   :target: https://anaconda.org/bioconda/salmid
   :alt:   (downloads)
.. |docker_salmid| image:: https://quay.io/repository/biocontainers/salmid/status
   :target: https://quay.io/repository/biocontainers/salmid
.. _`salmid/tags`: https://quay.io/repository/biocontainers/salmid?tab=tags


.. raw:: html

    <script>
        var package = "salmid";
        var versions = ["0.1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/salmid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/salmid/README.html