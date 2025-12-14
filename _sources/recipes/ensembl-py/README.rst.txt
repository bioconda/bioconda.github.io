:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ensembl-py'
.. highlight: bash

ensembl-py
==========

.. conda:recipe:: ensembl-py
   :replaces_section_title:
   :noindex:

   Ensembl Python base library

   :homepage: https://www.ensembl.org/
   :documentation: https://ensembl.github.io/ensembl-py/
   
   :developer docs: https://github.com/Ensembl/ensembl-py
   :license: APACHE / Apache-2.0
   :recipe: /`ensembl-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-py/meta.yaml>`_
   :links: biotools: :biotools:`Ensembl`

   


.. conda:package:: ensembl-py

   |downloads_ensembl-py| |docker_ensembl-py|

   :versions:
      
      

      ``3.0.1-0``,  ``3.0.0-0``,  ``2.1.3-0``

      

   
   :depends python: ``>=3.10``
   :depends sqlalchemy: ``>=1.4.45``
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

      mamba install ensembl-py

   and update with::

      mamba update ensembl-py

  To create a new environment, run::

      mamba create --name myenvname ensembl-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ensembl-py:<tag>

   (see `ensembl-py/tags`_ for valid values for ``<tag>``)


.. |downloads_ensembl-py| image:: https://img.shields.io/conda/dn/bioconda/ensembl-py.svg?style=flat
   :target: https://anaconda.org/bioconda/ensembl-py
   :alt:   (downloads)
.. |docker_ensembl-py| image:: https://quay.io/repository/biocontainers/ensembl-py/status
   :target: https://quay.io/repository/biocontainers/ensembl-py
.. _`ensembl-py/tags`: https://quay.io/repository/biocontainers/ensembl-py?tab=tags


.. raw:: html

    <script>
        var package = "ensembl-py";
        var versions = ["3.0.1","3.0.0","2.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ensembl-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ensembl-py/README.html