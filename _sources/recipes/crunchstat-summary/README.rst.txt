:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crunchstat-summary'
.. highlight: bash

crunchstat-summary
==================

.. conda:recipe:: crunchstat-summary
   :replaces_section_title:
   :noindex:

   Arvados crunchstat\-summary reads crunch log files and summarizes resource usage.

   :homepage: https://arvados.org
   :documentation: https://doc.arvados.org
   
   :license: AGPL / AGPL-3.0-only
   :recipe: /`crunchstat-summary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crunchstat-summary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crunchstat-summary/meta.yaml>`_

   


.. conda:package:: crunchstat-summary

   |downloads_crunchstat-summary| |docker_crunchstat-summary|

   :versions:
      
      

      ``3.1.2-0``

      

   
   :depends arvados-python-client: ``3.1.2``
   :depends python: ``>=3.8``
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

      mamba install crunchstat-summary

   and update with::

      mamba update crunchstat-summary

  To create a new environment, run::

      mamba create --name myenvname crunchstat-summary

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/crunchstat-summary:<tag>

   (see `crunchstat-summary/tags`_ for valid values for ``<tag>``)


.. |downloads_crunchstat-summary| image:: https://img.shields.io/conda/dn/bioconda/crunchstat-summary.svg?style=flat
   :target: https://anaconda.org/bioconda/crunchstat-summary
   :alt:   (downloads)
.. |docker_crunchstat-summary| image:: https://quay.io/repository/biocontainers/crunchstat-summary/status
   :target: https://quay.io/repository/biocontainers/crunchstat-summary
.. _`crunchstat-summary/tags`: https://quay.io/repository/biocontainers/crunchstat-summary?tab=tags


.. raw:: html

    <script>
        var package = "crunchstat-summary";
        var versions = ["3.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crunchstat-summary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crunchstat-summary/README.html