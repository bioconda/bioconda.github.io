:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mbg'
.. highlight: bash

mbg
===

.. conda:recipe:: mbg
   :replaces_section_title:
   :noindex:

   Minimizer based sparse de Bruijn graph constructor

   :homepage: https://github.com/maickrau/MBG
   :license: MIT
   :recipe: /`mbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mbg/meta.yaml>`_

   


.. conda:package:: mbg

   |downloads_mbg| |docker_mbg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.15-2</code>,  <code>1.0.15-0</code>,  <code>1.0.14-2</code>,  <code>1.0.14-1</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  <code>1.0.10-0</code>,  </span></summary>
      

      ``1.0.15-2``,  ``1.0.15-0``,  ``1.0.14-2``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mbg

   and update with::

      mamba update mbg

  To create a new environment, run::

      mamba create --name myenvname mbg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mbg:<tag>

   (see `mbg/tags`_ for valid values for ``<tag>``)


.. |downloads_mbg| image:: https://img.shields.io/conda/dn/bioconda/mbg.svg?style=flat
   :target: https://anaconda.org/bioconda/mbg
   :alt:   (downloads)
.. |docker_mbg| image:: https://quay.io/repository/biocontainers/mbg/status
   :target: https://quay.io/repository/biocontainers/mbg
.. _`mbg/tags`: https://quay.io/repository/biocontainers/mbg?tab=tags


.. raw:: html

    <script>
        var package = "mbg";
        var versions = ["1.0.15","1.0.15","1.0.14","1.0.14","1.0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mbg/README.html