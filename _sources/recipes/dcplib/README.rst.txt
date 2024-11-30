:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dcplib'
.. highlight: bash

dcplib
======

.. conda:recipe:: dcplib
   :replaces_section_title:
   :noindex:

   Modules shared among multiple Data Coordination Platform components.

   :homepage: http://github.com/HumanCellAtlas/dcplib
   :license: MIT / MIT
   :recipe: /`dcplib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcplib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dcplib/meta.yaml>`_

   The Data Coordination Platform \(DCP\) comprises the infrastructure that 
   supports operation of the Human Cell Atlas \(HCA\). This package provides
   modules to DCP components\, including the HCA command line interface \(CLI\).



.. conda:package:: dcplib

   |downloads_dcplib| |docker_dcplib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-0</code>,  <code>3.11.0-0</code>,  <code>3.9.0-0</code>,  <code>3.8.0-0</code>,  <code>3.7.0-0</code>,  <code>3.3.0-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  </span></summary>
      

      ``3.12.0-0``,  ``3.11.0-0``,  ``3.9.0-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends boto3: ``>=1.7.13``
   :depends crc32c: 
   :depends puremagic: ``1.4``
   :depends python: ``>=3``
   :depends requests: ``>=2.18.4,<3``
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

      mamba install dcplib

   and update with::

      mamba update dcplib

  To create a new environment, run::

      mamba create --name myenvname dcplib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dcplib:<tag>

   (see `dcplib/tags`_ for valid values for ``<tag>``)


.. |downloads_dcplib| image:: https://img.shields.io/conda/dn/bioconda/dcplib.svg?style=flat
   :target: https://anaconda.org/bioconda/dcplib
   :alt:   (downloads)
.. |docker_dcplib| image:: https://quay.io/repository/biocontainers/dcplib/status
   :target: https://quay.io/repository/biocontainers/dcplib
.. _`dcplib/tags`: https://quay.io/repository/biocontainers/dcplib?tab=tags


.. raw:: html

    <script>
        var package = "dcplib";
        var versions = ["3.12.0","3.11.0","3.9.0","3.8.0","3.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dcplib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dcplib/README.html