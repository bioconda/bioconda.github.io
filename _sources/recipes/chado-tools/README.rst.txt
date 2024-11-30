:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chado-tools'
.. highlight: bash

chado-tools
===========

.. conda:recipe:: chado-tools
   :replaces_section_title:
   :noindex:

   Tools to access CHADO databases

   :homepage: https://github.com/sanger-pathogens/chado-tools
   :license: GPL / GPL-3.0
   :recipe: /`chado-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chado-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chado-tools/meta.yaml>`_

   


.. conda:package:: chado-tools

   |downloads_chado-tools| |docker_chado-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.15-0</code>,  <code>0.2.14-0</code>,  <code>0.2.13-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.10-0</code>,  <code>0.2.8-0</code>,  <code>0.2.5-0</code>,  <code>0.0.5-0</code>,  </span></summary>
      

      ``0.2.15-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.8-0``,  ``0.2.5-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends gffutils: 
   :depends postgresql: ``>=9.6``
   :depends pronto: ``>=0.11.0``
   :depends psycopg2: 
   :depends python: ``3.6.*``
   :depends pyyaml: 
   :depends sqlalchemy: 
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

      mamba install chado-tools

   and update with::

      mamba update chado-tools

  To create a new environment, run::

      mamba create --name myenvname chado-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chado-tools:<tag>

   (see `chado-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_chado-tools| image:: https://img.shields.io/conda/dn/bioconda/chado-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/chado-tools
   :alt:   (downloads)
.. |docker_chado-tools| image:: https://quay.io/repository/biocontainers/chado-tools/status
   :target: https://quay.io/repository/biocontainers/chado-tools
.. _`chado-tools/tags`: https://quay.io/repository/biocontainers/chado-tools?tab=tags


.. raw:: html

    <script>
        var package = "chado-tools";
        var versions = ["0.2.15","0.2.14","0.2.13","0.2.12","0.2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chado-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chado-tools/README.html