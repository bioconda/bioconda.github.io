:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genonets'
.. highlight: bash

genonets
========

.. conda:recipe:: genonets
   :replaces_section_title:
   :noindex:

   Framework for creating and analyzing genotype networks from data.

   :homepage: https://github.com/fkhalid/genonets
   :license: MIT / MIT License
   :recipe: /`genonets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genonets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genonets/meta.yaml>`_
   :links: biotools: :biotools:`genonets`, doi: :doi:`10.1093/nar/gkw313`

   


.. conda:package:: genonets

   |downloads_genonets| |docker_genonets|

   :versions:
      
      

      ``2.0-0``,  ``1.1.10-0``,  ``1.1.8-0``,  ``1.1.6-2``,  ``1.1.6-1``,  ``1.1.6-0``

      

   
   :depends numpy: ``>=1.19``
   :depends python: 
   :depends python-igraph: ``>=0.8.2``
   :depends tqdm: ``>=4.49.0``
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

      mamba install genonets

   and update with::

      mamba update genonets

  To create a new environment, run::

      mamba create --name myenvname genonets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genonets:<tag>

   (see `genonets/tags`_ for valid values for ``<tag>``)


.. |downloads_genonets| image:: https://img.shields.io/conda/dn/bioconda/genonets.svg?style=flat
   :target: https://anaconda.org/bioconda/genonets
   :alt:   (downloads)
.. |docker_genonets| image:: https://quay.io/repository/biocontainers/genonets/status
   :target: https://quay.io/repository/biocontainers/genonets
.. _`genonets/tags`: https://quay.io/repository/biocontainers/genonets?tab=tags


.. raw:: html

    <script>
        var package = "genonets";
        var versions = ["2.0","1.1.10","1.1.8","1.1.6","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genonets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genonets/README.html