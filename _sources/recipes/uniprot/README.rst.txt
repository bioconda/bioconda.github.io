:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'uniprot'
.. highlight: bash

uniprot
=======

.. conda:recipe:: uniprot
   :replaces_section_title:
   :noindex:

   Retrieve protein sequence identifiers and metadata from http\:\/\/uniprot.org

   :homepage: http://github.com/boscoh/uniprot
   :license: BSD / BSD
   :recipe: /`uniprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/uniprot/meta.yaml>`_

   


.. conda:package:: uniprot

   |downloads_uniprot| |docker_uniprot|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
   :depends python: 
   :depends requests: 
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

      mamba install uniprot

   and update with::

      mamba update uniprot

  To create a new environment, run::

      mamba create --name myenvname uniprot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/uniprot:<tag>

   (see `uniprot/tags`_ for valid values for ``<tag>``)


.. |downloads_uniprot| image:: https://img.shields.io/conda/dn/bioconda/uniprot.svg?style=flat
   :target: https://anaconda.org/bioconda/uniprot
   :alt:   (downloads)
.. |docker_uniprot| image:: https://quay.io/repository/biocontainers/uniprot/status
   :target: https://quay.io/repository/biocontainers/uniprot
.. _`uniprot/tags`: https://quay.io/repository/biocontainers/uniprot?tab=tags


.. raw:: html

    <script>
        var package = "uniprot";
        var versions = ["1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/uniprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/uniprot/README.html