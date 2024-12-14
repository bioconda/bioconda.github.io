:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smafa'
.. highlight: bash

smafa
=====

.. conda:recipe:: smafa
   :replaces_section_title:
   :noindex:

   smafa is a tool for querying and clustering pre\-aligned small pre\-aligned sequences.

   :homepage: https://github.com/wwood/smafa
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`smafa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smafa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smafa/meta.yaml>`_

   


.. conda:package:: smafa

   |downloads_smafa| |docker_smafa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.0-1</code>,  <code>0.8.0-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-2</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  </span></summary>
      

      ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-2``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install smafa

   and update with::

      mamba update smafa

  To create a new environment, run::

      mamba create --name myenvname smafa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smafa:<tag>

   (see `smafa/tags`_ for valid values for ``<tag>``)


.. |downloads_smafa| image:: https://img.shields.io/conda/dn/bioconda/smafa.svg?style=flat
   :target: https://anaconda.org/bioconda/smafa
   :alt:   (downloads)
.. |docker_smafa| image:: https://quay.io/repository/biocontainers/smafa/status
   :target: https://quay.io/repository/biocontainers/smafa
.. _`smafa/tags`: https://quay.io/repository/biocontainers/smafa?tab=tags


.. raw:: html

    <script>
        var package = "smafa";
        var versions = ["0.8.0","0.8.0","0.7.1","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smafa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smafa/README.html