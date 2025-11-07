:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cocoscore'
.. highlight: bash

cocoscore
=========

.. conda:recipe:: cocoscore
   :replaces_section_title:
   :noindex:

   CoCoScore\: context\-aware co\-occurrence scores for biomedical text mining applications

   :homepage: https://github.com/JungeAlexander/cocoscore
   :license: MIT / MIT
   :recipe: /`cocoscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cocoscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cocoscore/meta.yaml>`_

   


.. conda:package:: cocoscore

   |downloads_cocoscore| |docker_cocoscore|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.2.0-0``

      

   
   :depends fasttext: 
   :depends gensim: ``>=3.4.0``
   :depends pandas: ``>=0.23.0``
   :depends python: ``>=3``
   :depends scikit-learn: ``>=0.19.1``
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

      mamba install cocoscore

   and update with::

      mamba update cocoscore

  To create a new environment, run::

      mamba create --name myenvname cocoscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cocoscore:<tag>

   (see `cocoscore/tags`_ for valid values for ``<tag>``)


.. |downloads_cocoscore| image:: https://img.shields.io/conda/dn/bioconda/cocoscore.svg?style=flat
   :target: https://anaconda.org/bioconda/cocoscore
   :alt:   (downloads)
.. |docker_cocoscore| image:: https://quay.io/repository/biocontainers/cocoscore/status
   :target: https://quay.io/repository/biocontainers/cocoscore
.. _`cocoscore/tags`: https://quay.io/repository/biocontainers/cocoscore?tab=tags


.. raw:: html

    <script>
        var package = "cocoscore";
        var versions = ["1.0.0","1.0.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cocoscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cocoscore/README.html