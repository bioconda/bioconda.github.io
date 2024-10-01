:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yahs'
.. highlight: bash

yahs
====

.. conda:recipe:: yahs
   :replaces_section_title:
   :noindex:

   YaHS\, yet another Hi\-C scaffolding tool.

   :homepage: https://github.com/c-zhou/yahs
   :license: MIT / MIT
   :recipe: /`yahs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yahs/meta.yaml>`_

   


.. conda:package:: yahs

   |downloads_yahs| |docker_yahs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2-1</code>,  <code>1.2-0</code>,  <code>1.2a.2-2</code>,  <code>1.2a.2-1</code>,  <code>1.2a.2-0</code>,  <code>1.2a.1-0</code>,  <code>1.2a-1</code>,  </span></summary>
      

      ``1.2.2-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``,  ``1.2a.2-2``,  ``1.2a.2-1``,  ``1.2a.2-0``,  ``1.2a.1-0``,  ``1.2a-1``,  ``1.2a-0``,  ``1.1a.2-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install yahs

   and update with::

      mamba update yahs

  To create a new environment, run::

      mamba create --name myenvname yahs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yahs:<tag>

   (see `yahs/tags`_ for valid values for ``<tag>``)


.. |downloads_yahs| image:: https://img.shields.io/conda/dn/bioconda/yahs.svg?style=flat
   :target: https://anaconda.org/bioconda/yahs
   :alt:   (downloads)
.. |docker_yahs| image:: https://quay.io/repository/biocontainers/yahs/status
   :target: https://quay.io/repository/biocontainers/yahs
.. _`yahs/tags`: https://quay.io/repository/biocontainers/yahs?tab=tags


.. raw:: html

    <script>
        var package = "yahs";
        var versions = ["1.2.2","1.2.1","1.2","1.2","1.2a.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yahs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yahs/README.html