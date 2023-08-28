:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'networkxgmml'
.. highlight: bash

networkxgmml
============

.. conda:recipe:: networkxgmml
   :replaces_section_title:
   :noindex:

   XGMML parser for networkx

   :homepage: https://github.com/informationsea/networkxxgmml
   :license: UNKNOWN
   :recipe: /`networkxgmml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/networkxgmml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/networkxgmml/meta.yaml>`_

   


.. conda:package:: networkxgmml

   |downloads_networkxgmml| |docker_networkxgmml|

   :versions:
      
      

      ``0.1.6-2``,  ``0.1.6-1``

      

   
   :depends networkx: 
   :depends python: 
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install networkxgmml

   and update with::

      mamba update networkxgmml

  To create a new environment, run::

      mamba create --name myenvname networkxgmml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/networkxgmml:<tag>

   (see `networkxgmml/tags`_ for valid values for ``<tag>``)


.. |downloads_networkxgmml| image:: https://img.shields.io/conda/dn/bioconda/networkxgmml.svg?style=flat
   :target: https://anaconda.org/bioconda/networkxgmml
   :alt:   (downloads)
.. |docker_networkxgmml| image:: https://quay.io/repository/biocontainers/networkxgmml/status
   :target: https://quay.io/repository/biocontainers/networkxgmml
.. _`networkxgmml/tags`: https://quay.io/repository/biocontainers/networkxgmml?tab=tags


.. raw:: html

    <script>
        var package = "networkxgmml";
        var versions = ["0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/networkxgmml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/networkxgmml/README.html