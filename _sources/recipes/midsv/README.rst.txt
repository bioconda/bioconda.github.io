:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'midsv'
.. highlight: bash

midsv
=====

.. conda:recipe:: midsv
   :replaces_section_title:
   :noindex:

   Python module to convert SAM to MIDSV format.

   :homepage: https://github.com/akikuno/midsv
   :license: MIT
   :recipe: /`midsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midsv/meta.yaml>`_

   


.. conda:package:: midsv

   |downloads_midsv| |docker_midsv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.0-0</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.2-0</code>,  <code>0.10.0-0</code>,  <code>0.9.5-0</code>,  <code>0.9.0-0</code>,  <code>0.8.4-0</code>,  <code>0.8.2-0</code>,  </span></summary>
      

      ``0.13.0-0``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.2-0``,  ``0.10.0-0``,  ``0.9.5-0``,  ``0.9.0-0``,  ``0.8.4-0``,  ``0.8.2-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends cstag: ``>=1.1.0``
   :depends python: ``>=3.9.0,<4.0.0``
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

      mamba install midsv

   and update with::

      mamba update midsv

  To create a new environment, run::

      mamba create --name myenvname midsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/midsv:<tag>

   (see `midsv/tags`_ for valid values for ``<tag>``)


.. |downloads_midsv| image:: https://img.shields.io/conda/dn/bioconda/midsv.svg?style=flat
   :target: https://anaconda.org/bioconda/midsv
   :alt:   (downloads)
.. |docker_midsv| image:: https://quay.io/repository/biocontainers/midsv/status
   :target: https://quay.io/repository/biocontainers/midsv
.. _`midsv/tags`: https://quay.io/repository/biocontainers/midsv?tab=tags


.. raw:: html

    <script>
        var package = "midsv";
        var versions = ["0.13.0","0.11.1","0.11.0","0.10.2","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/midsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/midsv/README.html