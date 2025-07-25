:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uniprot-id-mapper'
.. highlight: bash

uniprot-id-mapper
=================

.. conda:recipe:: uniprot-id-mapper
   :replaces_section_title:
   :noindex:

   A Python wrapper for the UniProt Mapping RESTful API.

   :homepage: https://github.com/David-Araripe/UniProtMapper
   :documentation: https://david-araripe.github.io/UniProtMapper/stable/index.html
   
   :license: MIT
   :recipe: /`uniprot-id-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniprot-id-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniprot-id-mapper/meta.yaml>`_

   


.. conda:package:: uniprot-id-mapper

   |downloads_uniprot-id-mapper| |docker_uniprot-id-mapper|

   :versions:
      
      

      ``1.1.4-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends tqdm: 
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

      mamba install uniprot-id-mapper

   and update with::

      mamba update uniprot-id-mapper

  To create a new environment, run::

      mamba create --name myenvname uniprot-id-mapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/uniprot-id-mapper:<tag>

   (see `uniprot-id-mapper/tags`_ for valid values for ``<tag>``)


.. |downloads_uniprot-id-mapper| image:: https://img.shields.io/conda/dn/bioconda/uniprot-id-mapper.svg?style=flat
   :target: https://anaconda.org/bioconda/uniprot-id-mapper
   :alt:   (downloads)
.. |docker_uniprot-id-mapper| image:: https://quay.io/repository/biocontainers/uniprot-id-mapper/status
   :target: https://quay.io/repository/biocontainers/uniprot-id-mapper
.. _`uniprot-id-mapper/tags`: https://quay.io/repository/biocontainers/uniprot-id-mapper?tab=tags


.. raw:: html

    <script>
        var package = "uniprot-id-mapper";
        var versions = ["1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uniprot-id-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uniprot-id-mapper/README.html