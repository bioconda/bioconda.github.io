:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adpred'
.. highlight: bash

adpred
======

.. conda:recipe:: adpred
   :replaces_section_title:
   :noindex:

   python adpred module for prediction of Transcription activation domains from protein sequences

   :homepage: https://github.com/FredHutch/adpred
   :license: MIT Licence
   :recipe: /`adpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adpred/meta.yaml>`_

   


.. conda:package:: adpred

   |downloads_adpred| |docker_adpred|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.1.3-0``

      

   
   :depends keras: ``>=2``
   :depends numpy: ``>=1``
   :depends pandas: ``>=1``
   :depends plotly: ``>=5``
   :depends python: ``>=3.9``
   :depends requests: ``>=2``
   :depends scikit-learn: ``>=1``
   :depends tensorflow: ``>=2``
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

      mamba install adpred

   and update with::

      mamba update adpred

  To create a new environment, run::

      mamba create --name myenvname adpred

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/adpred:<tag>

   (see `adpred/tags`_ for valid values for ``<tag>``)


.. |downloads_adpred| image:: https://img.shields.io/conda/dn/bioconda/adpred.svg?style=flat
   :target: https://anaconda.org/bioconda/adpred
   :alt:   (downloads)
.. |docker_adpred| image:: https://quay.io/repository/biocontainers/adpred/status
   :target: https://quay.io/repository/biocontainers/adpred
.. _`adpred/tags`: https://quay.io/repository/biocontainers/adpred?tab=tags


.. raw:: html

    <script>
        var package = "adpred";
        var versions = ["1.3.1","1.2.8","1.2.7","1.2.5","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adpred/README.html