:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svist4get'
.. highlight: bash

svist4get
=========

.. conda:recipe:: svist4get
   :replaces_section_title:
   :noindex:

   A simple visualization tool for genomic tracks from sequencing experiments

   :homepage: https://github.com/art-egorov/svist4get
   :license: OTHER / WTFPL
   :recipe: /`svist4get <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svist4get>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svist4get/meta.yaml>`_

   


.. conda:package:: svist4get

   |downloads_svist4get| |docker_svist4get|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2.24-0</code>,  <code>1.2.23-0</code>,  <code>1.2.22-0</code>,  <code>1.2.21-0</code>,  <code>1.2.20-0</code>,  <code>1.2.19-0</code>,  <code>1.2.18-0</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3-0``,  ``1.2.24-0``,  ``1.2.23-0``,  ``1.2.22-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17.1-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-1``,  ``1.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends configs: 
   :depends pybedtools: 
   :depends python: ``>=3.4``
   :depends reportlab: 
   :depends wand: 
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

      mamba install svist4get

   and update with::

      mamba update svist4get

  To create a new environment, run::

      mamba create --name myenvname svist4get

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svist4get:<tag>

   (see `svist4get/tags`_ for valid values for ``<tag>``)


.. |downloads_svist4get| image:: https://img.shields.io/conda/dn/bioconda/svist4get.svg?style=flat
   :target: https://anaconda.org/bioconda/svist4get
   :alt:   (downloads)
.. |docker_svist4get| image:: https://quay.io/repository/biocontainers/svist4get/status
   :target: https://quay.io/repository/biocontainers/svist4get
.. _`svist4get/tags`: https://quay.io/repository/biocontainers/svist4get?tab=tags


.. raw:: html

    <script>
        var package = "svist4get";
        var versions = ["1.3.1","1.3","1.2.24","1.2.23","1.2.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svist4get/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svist4get/README.html