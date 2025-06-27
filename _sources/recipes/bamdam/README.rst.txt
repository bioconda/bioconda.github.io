:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamdam'
.. highlight: bash

bamdam
======

.. conda:recipe:: bamdam
   :replaces_section_title:
   :noindex:

   A post\-mapping\, post\-least\-common\-ancestor toolkit for ancient DNA analysis

   :homepage: https://github.com/bdesanctis/bamdam
   :license: MIT
   :recipe: /`bamdam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamdam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamdam/meta.yaml>`_

   


.. conda:package:: bamdam

   |downloads_bamdam| |docker_bamdam|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends hyperloglog: 
   :depends matplotlib-base: 
   :depends pysam: 
   :depends python: ``>=3.8``
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

      mamba install bamdam

   and update with::

      mamba update bamdam

  To create a new environment, run::

      mamba create --name myenvname bamdam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bamdam:<tag>

   (see `bamdam/tags`_ for valid values for ``<tag>``)


.. |downloads_bamdam| image:: https://img.shields.io/conda/dn/bioconda/bamdam.svg?style=flat
   :target: https://anaconda.org/bioconda/bamdam
   :alt:   (downloads)
.. |docker_bamdam| image:: https://quay.io/repository/biocontainers/bamdam/status
   :target: https://quay.io/repository/biocontainers/bamdam
.. _`bamdam/tags`: https://quay.io/repository/biocontainers/bamdam?tab=tags


.. raw:: html

    <script>
        var package = "bamdam";
        var versions = ["0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamdam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamdam/README.html