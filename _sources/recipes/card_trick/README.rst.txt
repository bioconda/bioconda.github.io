:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'card_trick'
.. highlight: bash

card_trick
==========

.. conda:recipe:: card_trick
   :replaces_section_title:
   :noindex:

   Utility package to find gene \<\-\> drug relationships within CARD

   :homepage: https://gitlab.com/cgps/card_trick
   :license: MIT / MIT
   :recipe: /`card_trick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/card_trick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/card_trick/meta.yaml>`_

   


.. conda:package:: card_trick

   |downloads_card_trick| |docker_card_trick|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends pandas: 
   :depends pronto: 
   :depends python: ``>3``
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

      mamba install card_trick

   and update with::

      mamba update card_trick

  To create a new environment, run::

      mamba create --name myenvname card_trick

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/card_trick:<tag>

   (see `card_trick/tags`_ for valid values for ``<tag>``)


.. |downloads_card_trick| image:: https://img.shields.io/conda/dn/bioconda/card_trick.svg?style=flat
   :target: https://anaconda.org/bioconda/card_trick
   :alt:   (downloads)
.. |docker_card_trick| image:: https://quay.io/repository/biocontainers/card_trick/status
   :target: https://quay.io/repository/biocontainers/card_trick
.. _`card_trick/tags`: https://quay.io/repository/biocontainers/card_trick?tab=tags


.. raw:: html

    <script>
        var package = "card_trick";
        var versions = ["0.2.1","0.2.0","0.1.3","0.1.2","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/card_trick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/card_trick/README.html