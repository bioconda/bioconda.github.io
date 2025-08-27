:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'read-it-and-keep'
.. highlight: bash

read-it-and-keep
================

.. conda:recipe:: read-it-and-keep
   :replaces_section_title:
   :noindex:

   Read contamination removal

   :homepage: https://github.com/GenomePathogenAnalysisService/read-it-and-keep
   :license: MIT
   :recipe: /`read-it-and-keep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read-it-and-keep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/read-it-and-keep/meta.yaml>`_

   


.. conda:package:: read-it-and-keep

   |downloads_read-it-and-keep| |docker_read-it-and-keep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-3</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install read-it-and-keep

   and update with::

      mamba update read-it-and-keep

  To create a new environment, run::

      mamba create --name myenvname read-it-and-keep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/read-it-and-keep:<tag>

   (see `read-it-and-keep/tags`_ for valid values for ``<tag>``)


.. |downloads_read-it-and-keep| image:: https://img.shields.io/conda/dn/bioconda/read-it-and-keep.svg?style=flat
   :target: https://anaconda.org/bioconda/read-it-and-keep
   :alt:   (downloads)
.. |docker_read-it-and-keep| image:: https://quay.io/repository/biocontainers/read-it-and-keep/status
   :target: https://quay.io/repository/biocontainers/read-it-and-keep
.. _`read-it-and-keep/tags`: https://quay.io/repository/biocontainers/read-it-and-keep?tab=tags


.. raw:: html

    <script>
        var package = "read-it-and-keep";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/read-it-and-keep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/read-it-and-keep/README.html