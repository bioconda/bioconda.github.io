:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gtfparse'
.. highlight: bash

gtfparse
========

.. conda:recipe:: gtfparse
   :replaces_section_title:
   :noindex:

   GTF Parsing

   :homepage: https://github.com/openvax/gtfparse
   :license: Apache / Apache-2.0
   :recipe: /`gtfparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gtfparse/meta.yaml>`_

   


.. conda:package:: gtfparse

   |downloads_gtfparse| |docker_gtfparse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.1.0-0</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.1.0-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.7-1``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends numpy: ``>=1.7``
   :depends pandas: ``>=0.15``
   :depends polars: ``>=0.20.2,<0.21.0``
   :depends pyarrow: ``>=14.0.2``
   :depends python: 
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

      mamba install gtfparse

   and update with::

      mamba update gtfparse

  To create a new environment, run::

      mamba create --name myenvname gtfparse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gtfparse:<tag>

   (see `gtfparse/tags`_ for valid values for ``<tag>``)


.. |downloads_gtfparse| image:: https://img.shields.io/conda/dn/bioconda/gtfparse.svg?style=flat
   :target: https://anaconda.org/bioconda/gtfparse
   :alt:   (downloads)
.. |docker_gtfparse| image:: https://quay.io/repository/biocontainers/gtfparse/status
   :target: https://quay.io/repository/biocontainers/gtfparse
.. _`gtfparse/tags`: https://quay.io/repository/biocontainers/gtfparse?tab=tags


.. raw:: html

    <script>
        var package = "gtfparse";
        var versions = ["2.4.1","2.4.0","2.3.0","2.1.0","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gtfparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gtfparse/README.html