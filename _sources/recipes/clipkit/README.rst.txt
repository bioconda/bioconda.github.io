:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clipkit'
.. highlight: bash

clipkit
=======

.. conda:recipe:: clipkit
   :replaces_section_title:
   :noindex:

   Alignment trimming software for phylogenetics.

   :homepage: https://github.com/jlsteenwyk/clipkit
   :documentation: https://jlsteenwyk.com/ClipKIT
   
   :license: MIT / MIT
   :recipe: /`clipkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clipkit/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pbio.3001007`

   


.. conda:package:: clipkit

   |downloads_clipkit| |docker_clipkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.6-0</code>,  <code>2.2.5-0</code>,  <code>2.2.4-0</code>,  <code>2.2.2-0</code>,  <code>2.2.0-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  </span></summary>
      

      ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.4-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``1.4.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.7-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.3-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.81``
   :depends numpy: ``>=1.24.0``
   :depends python: ``>=3.9``
   :depends tqdm: ``>=4.45.0``
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

      mamba install clipkit

   and update with::

      mamba update clipkit

  To create a new environment, run::

      mamba create --name myenvname clipkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clipkit:<tag>

   (see `clipkit/tags`_ for valid values for ``<tag>``)


.. |downloads_clipkit| image:: https://img.shields.io/conda/dn/bioconda/clipkit.svg?style=flat
   :target: https://anaconda.org/bioconda/clipkit
   :alt:   (downloads)
.. |docker_clipkit| image:: https://quay.io/repository/biocontainers/clipkit/status
   :target: https://quay.io/repository/biocontainers/clipkit
.. _`clipkit/tags`: https://quay.io/repository/biocontainers/clipkit?tab=tags


.. raw:: html

    <script>
        var package = "clipkit";
        var versions = ["2.4.0","2.3.0","2.2.6","2.2.5","2.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clipkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clipkit/README.html