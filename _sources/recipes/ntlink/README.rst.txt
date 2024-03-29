:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ntlink'
.. highlight: bash

ntlink
======

.. conda:recipe:: ntlink
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolder using long reads and minimizers

   :homepage: https://github.com/bcgsc/ntLink
   :license: GPL-3.0
   :recipe: /`ntlink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntlink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ntlink/meta.yaml>`_

   


.. conda:package:: ntlink

   |downloads_ntlink| |docker_ntlink|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.10-0</code>,  <code>1.3.9-4</code>,  <code>1.3.9-3</code>,  <code>1.3.9-2</code>,  <code>1.3.9-1</code>,  <code>1.3.9-0</code>,  <code>1.3.8-1</code>,  <code>1.3.8-0</code>,  <code>1.3.7-0</code>,  </span></summary>
      

      ``1.3.10-0``,  ``1.3.9-4``,  ``1.3.9-3``,  ``1.3.9-2``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.3-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends abyss: ``>=2.3.0``
   :depends btllib: ``<1.7.0``
   :depends make: 
   :depends numpy: 
   :depends python: 
   :depends python-igraph: 
   :depends zlib: 
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

      mamba install ntlink

   and update with::

      mamba update ntlink

  To create a new environment, run::

      mamba create --name myenvname ntlink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ntlink:<tag>

   (see `ntlink/tags`_ for valid values for ``<tag>``)


.. |downloads_ntlink| image:: https://img.shields.io/conda/dn/bioconda/ntlink.svg?style=flat
   :target: https://anaconda.org/bioconda/ntlink
   :alt:   (downloads)
.. |docker_ntlink| image:: https://quay.io/repository/biocontainers/ntlink/status
   :target: https://quay.io/repository/biocontainers/ntlink
.. _`ntlink/tags`: https://quay.io/repository/biocontainers/ntlink?tab=tags


.. raw:: html

    <script>
        var package = "ntlink";
        var versions = ["1.3.10","1.3.9","1.3.9","1.3.9","1.3.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ntlink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ntlink/README.html