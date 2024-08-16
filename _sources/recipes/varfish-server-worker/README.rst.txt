:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varfish-server-worker'
.. highlight: bash

varfish-server-worker
=====================

.. conda:recipe:: varfish-server-worker
   :replaces_section_title:
   :noindex:

   Rust\-based tool for the heavy lifting in varfish\-server.


   :homepage: https://github.com/varfish-org/varfish-server-worker
   :license: MIT
   :recipe: /`varfish-server-worker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-server-worker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varfish-server-worker/meta.yaml>`_

   


.. conda:package:: varfish-server-worker

   |downloads_varfish-server-worker| |docker_varfish-server-worker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.0-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  <code>0.10.2-1</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  <code>0.8.0-0</code>,  </span></summary>
      

      ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.2-1``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.46.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends openssl: ``>=3.3.1,<4.0a0``
   :depends sqlite: 
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

      mamba install varfish-server-worker

   and update with::

      mamba update varfish-server-worker

  To create a new environment, run::

      mamba create --name myenvname varfish-server-worker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/varfish-server-worker:<tag>

   (see `varfish-server-worker/tags`_ for valid values for ``<tag>``)


.. |downloads_varfish-server-worker| image:: https://img.shields.io/conda/dn/bioconda/varfish-server-worker.svg?style=flat
   :target: https://anaconda.org/bioconda/varfish-server-worker
   :alt:   (downloads)
.. |docker_varfish-server-worker| image:: https://quay.io/repository/biocontainers/varfish-server-worker/status
   :target: https://quay.io/repository/biocontainers/varfish-server-worker
.. _`varfish-server-worker/tags`: https://quay.io/repository/biocontainers/varfish-server-worker?tab=tags


.. raw:: html

    <script>
        var package = "varfish-server-worker";
        var versions = ["0.13.0","0.12.0","0.11.0","0.10.2","0.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varfish-server-worker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varfish-server-worker/README.html