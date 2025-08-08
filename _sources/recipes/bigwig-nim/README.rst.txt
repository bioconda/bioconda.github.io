:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigwig-nim'
.. highlight: bash

bigwig-nim
==========

.. conda:recipe:: bigwig-nim
   :replaces_section_title:
   :noindex:

   Command\-line querying\+conversion of bigwigs

   :homepage: https://github.com/brentp/bigwig-nim
   :license: MIT
   :recipe: /`bigwig-nim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigwig-nim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigwig-nim/meta.yaml>`_

   


.. conda:package:: bigwig-nim

   |downloads_bigwig-nim| |docker_bigwig-nim|

   :versions:
      
      

      ``0.0.3-0``

      

   
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

      mamba install bigwig-nim

   and update with::

      mamba update bigwig-nim

  To create a new environment, run::

      mamba create --name myenvname bigwig-nim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bigwig-nim:<tag>

   (see `bigwig-nim/tags`_ for valid values for ``<tag>``)


.. |downloads_bigwig-nim| image:: https://img.shields.io/conda/dn/bioconda/bigwig-nim.svg?style=flat
   :target: https://anaconda.org/bioconda/bigwig-nim
   :alt:   (downloads)
.. |docker_bigwig-nim| image:: https://quay.io/repository/biocontainers/bigwig-nim/status
   :target: https://quay.io/repository/biocontainers/bigwig-nim
.. _`bigwig-nim/tags`: https://quay.io/repository/biocontainers/bigwig-nim?tab=tags


.. raw:: html

    <script>
        var package = "bigwig-nim";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigwig-nim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigwig-nim/README.html