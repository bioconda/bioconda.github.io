:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogclassifier'
.. highlight: bash

cogclassifier
=============

.. conda:recipe:: cogclassifier
   :replaces_section_title:
   :noindex:

   Classify prokaryote protein sequences into COG functional category

   :homepage: https://github.com/moshi4/COGclassifier/
   :license: MIT
   :recipe: /`cogclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogclassifier/meta.yaml>`_

   


.. conda:package:: cogclassifier

   |downloads_cogclassifier| |docker_cogclassifier|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends altair: ``>=4.2.0,<5.0.0``
   :depends pandas: ``>=1.4.1,<2.0.0``
   :depends python: ``>=3.6,<4.0``
   :depends requests: ``>=2.27.1,<3.0.0``
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

      mamba install cogclassifier

   and update with::

      mamba update cogclassifier

  To create a new environment, run::

      mamba create --name myenvname cogclassifier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cogclassifier:<tag>

   (see `cogclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_cogclassifier| image:: https://img.shields.io/conda/dn/bioconda/cogclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/cogclassifier
   :alt:   (downloads)
.. |docker_cogclassifier| image:: https://quay.io/repository/biocontainers/cogclassifier/status
   :target: https://quay.io/repository/biocontainers/cogclassifier
.. _`cogclassifier/tags`: https://quay.io/repository/biocontainers/cogclassifier?tab=tags


.. raw:: html

    <script>
        var package = "cogclassifier";
        var versions = ["1.0.5","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogclassifier/README.html