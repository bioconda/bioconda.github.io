:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxtastic'
.. highlight: bash

taxtastic
=========

.. conda:recipe:: taxtastic
   :replaces_section_title:
   :noindex:

   Tools for taxonomic naming and annotation

   :homepage: https://github.com/fhcrc/taxtastic
   :license: GPL / GPL-3.0
   :recipe: /`taxtastic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxtastic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxtastic/meta.yaml>`_

   


.. conda:package:: taxtastic

   |downloads_taxtastic| |docker_taxtastic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.8.11-0</code>,  <code>0.8.9-0</code>,  </span></summary>
      

      ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.8.11-0``,  ``0.8.9-0``,  ``0.8.5-2``,  ``0.8.5-0``,  ``0.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends decorator: 
   :depends dendropy: 
   :depends fastalite: 
   :depends jinja2: 
   :depends psycopg2-binary: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends sqlalchemy: ``>=2``
   :depends sqlparse: 
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

      mamba install taxtastic

   and update with::

      mamba update taxtastic

  To create a new environment, run::

      mamba create --name myenvname taxtastic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxtastic:<tag>

   (see `taxtastic/tags`_ for valid values for ``<tag>``)


.. |downloads_taxtastic| image:: https://img.shields.io/conda/dn/bioconda/taxtastic.svg?style=flat
   :target: https://anaconda.org/bioconda/taxtastic
   :alt:   (downloads)
.. |docker_taxtastic| image:: https://quay.io/repository/biocontainers/taxtastic/status
   :target: https://quay.io/repository/biocontainers/taxtastic
.. _`taxtastic/tags`: https://quay.io/repository/biocontainers/taxtastic?tab=tags


.. raw:: html

    <script>
        var package = "taxtastic";
        var versions = ["0.12.0","0.11.0","0.10.0","0.10.0","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxtastic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxtastic/README.html