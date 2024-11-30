:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxmapper'
.. highlight: bash

taxmapper
=========

.. conda:recipe:: taxmapper
   :replaces_section_title:
   :noindex:

   Analysis pipeline for metagenomic\, microeukaryotic sequencing data.

   :homepage: https://bitbucket.org/dbeisser/taxmapper
   :license: MIT / MIT License
   :recipe: /`taxmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmapper/meta.yaml>`_

   


.. conda:package:: taxmapper

   |downloads_taxmapper| |docker_taxmapper|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends deepdish: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
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

      mamba install taxmapper

   and update with::

      mamba update taxmapper

  To create a new environment, run::

      mamba create --name myenvname taxmapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxmapper:<tag>

   (see `taxmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_taxmapper| image:: https://img.shields.io/conda/dn/bioconda/taxmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/taxmapper
   :alt:   (downloads)
.. |docker_taxmapper| image:: https://quay.io/repository/biocontainers/taxmapper/status
   :target: https://quay.io/repository/biocontainers/taxmapper
.. _`taxmapper/tags`: https://quay.io/repository/biocontainers/taxmapper?tab=tags


.. raw:: html

    <script>
        var package = "taxmapper";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxmapper/README.html