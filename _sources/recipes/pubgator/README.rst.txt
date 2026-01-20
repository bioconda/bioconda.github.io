:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pubgator'
.. highlight: bash

pubgator
========

.. conda:recipe:: pubgator
   :replaces_section_title:
   :noindex:

   A lightweight python wrapper for the PubTator3 API.
   PubGator allows to easily interact with the PubTator API.
   It provides a simple interface to search for publications\, retrieve full annotations\, and find entities and relations.
   It also automatically handles pagination and rate limiting.


   :homepage: https://github.com/koesterlab/pubgator
   :license: MIT
   :recipe: /`pubgator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubgator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubgator/meta.yaml>`_

   


.. conda:package:: pubgator

   |downloads_pubgator| |docker_pubgator|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends bioc: ``>=2.1,<3``
   :depends httpx: ``>=0.28.1,<0.29``
   :depends python: ``>=3.11``
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

      mamba install pubgator

   and update with::

      mamba update pubgator

  To create a new environment, run::

      mamba create --name myenvname pubgator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pubgator:<tag>

   (see `pubgator/tags`_ for valid values for ``<tag>``)


.. |downloads_pubgator| image:: https://img.shields.io/conda/dn/bioconda/pubgator.svg?style=flat
   :target: https://anaconda.org/bioconda/pubgator
   :alt:   (downloads)
.. |docker_pubgator| image:: https://quay.io/repository/biocontainers/pubgator/status
   :target: https://quay.io/repository/biocontainers/pubgator
.. _`pubgator/tags`: https://quay.io/repository/biocontainers/pubgator?tab=tags


.. raw:: html

    <script>
        var package = "pubgator";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pubgator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pubgator/README.html