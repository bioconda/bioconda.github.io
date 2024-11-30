:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzml2isa'
.. highlight: bash

mzml2isa
========

.. conda:recipe:: mzml2isa
   :replaces_section_title:
   :noindex:

   mzml2isa \- mzML to ISA\-tab parsing tool

   :homepage: https://github.com/ISA-tools/mzml2isa
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`mzml2isa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzml2isa/meta.yaml>`_

   


.. conda:package:: mzml2isa

   |downloads_mzml2isa| |docker_mzml2isa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-1</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.24-2``,  ``0.4.24-1``,  ``0.4.24-0``

      
      .. raw:: html

         </details>
      

   
   :depends cached-property: 
   :depends fs: 
   :depends lxml: 
   :depends openpyxl: 
   :depends pronto: ``>=2.0,<3``
   :depends python: ``<3.10``
   :depends six: 
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

      mamba install mzml2isa

   and update with::

      mamba update mzml2isa

  To create a new environment, run::

      mamba create --name myenvname mzml2isa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mzml2isa:<tag>

   (see `mzml2isa/tags`_ for valid values for ``<tag>``)


.. |downloads_mzml2isa| image:: https://img.shields.io/conda/dn/bioconda/mzml2isa.svg?style=flat
   :target: https://anaconda.org/bioconda/mzml2isa
   :alt:   (downloads)
.. |docker_mzml2isa| image:: https://quay.io/repository/biocontainers/mzml2isa/status
   :target: https://quay.io/repository/biocontainers/mzml2isa
.. _`mzml2isa/tags`: https://quay.io/repository/biocontainers/mzml2isa?tab=tags


.. raw:: html

    <script>
        var package = "mzml2isa";
        var versions = ["1.1.1","1.0.4","1.0.3","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzml2isa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzml2isa/README.html