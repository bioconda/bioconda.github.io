:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sipros'
.. highlight: bash

sipros
======

.. conda:recipe:: sipros
   :replaces_section_title:
   :noindex:

   Tools for stable isotopic mass spectrometry\-based metaproteomics

   :homepage: https://github.com/thepanlab/sipros5/
   :license: MIT
   :recipe: /`sipros <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sipros>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sipros/meta.yaml>`_
   :links: biotools: :biotools:`sipros`, doi: :doi:`10.1186/s40168-024-01866-1`

   \"Tools for stable isotopic mass spectrometry\-based metaproteomics research developed by Sipros team.\"



.. conda:package:: sipros

   |downloads_sipros| |docker_sipros|

   :versions:
      
      

      ``5.0-0``,  ``4.02-1``,  ``4.02-0``,  ``4.01-0``

      

   
   :depends icu: 
   :depends lxml: 
   :depends pandas: 
   :depends philosopher: ``>=5.1.0,<5.2.0``
   :depends python: ``>=3.12,<3.13``
   :depends seqkit: 
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

      mamba install sipros

   and update with::

      mamba update sipros

  To create a new environment, run::

      mamba create --name myenvname sipros

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sipros:<tag>

   (see `sipros/tags`_ for valid values for ``<tag>``)


.. |downloads_sipros| image:: https://img.shields.io/conda/dn/bioconda/sipros.svg?style=flat
   :target: https://anaconda.org/bioconda/sipros
   :alt:   (downloads)
.. |docker_sipros| image:: https://quay.io/repository/biocontainers/sipros/status
   :target: https://quay.io/repository/biocontainers/sipros
.. _`sipros/tags`: https://quay.io/repository/biocontainers/sipros?tab=tags


.. raw:: html

    <script>
        var package = "sipros";
        var versions = ["5.0","4.02","4.02","4.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sipros/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sipros/README.html