:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ensembl-utils'
.. highlight: bash

ensembl-utils
=============

.. conda:recipe:: ensembl-utils
   :replaces_section_title:
   :noindex:

   Ensembl Python general\-purpose utils

   :homepage: https://www.ensembl.org/
   :documentation: https://ensembl.github.io/ensembl-utils/
   
   :developer docs: https://github.com/Ensembl/ensembl-utils
   :license: APACHE / Apache-2.0
   :recipe: /`ensembl-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-utils/meta.yaml>`_
   :links: biotools: :biotools:`Ensembl`

   


.. conda:package:: ensembl-utils

   |downloads_ensembl-utils| |docker_ensembl-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends pytest: 
   :depends python: ``>=3.10``
   :depends python-dotenv: ``>=0.19.2``
   :depends pyyaml: ``>=6.0,<7.0``
   :depends requests: ``>=2.22.0``
   :depends sqlalchemy: ``>=1.4.0,<2.0``
   :depends sqlalchemy-utils: 
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

      mamba install ensembl-utils

   and update with::

      mamba update ensembl-utils

  To create a new environment, run::

      mamba create --name myenvname ensembl-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ensembl-utils:<tag>

   (see `ensembl-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_ensembl-utils| image:: https://img.shields.io/conda/dn/bioconda/ensembl-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/ensembl-utils
   :alt:   (downloads)
.. |docker_ensembl-utils| image:: https://quay.io/repository/biocontainers/ensembl-utils/status
   :target: https://quay.io/repository/biocontainers/ensembl-utils
.. _`ensembl-utils/tags`: https://quay.io/repository/biocontainers/ensembl-utils?tab=tags


.. raw:: html

    <script>
        var package = "ensembl-utils";
        var versions = ["0.6.0","0.5.1","0.5.0","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ensembl-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ensembl-utils/README.html