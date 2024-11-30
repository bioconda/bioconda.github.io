:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcore'
.. highlight: bash

pbcore
======

.. conda:recipe:: pbcore
   :replaces_section_title:
   :noindex:

   A Python library for reading and writing PacBio data files

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcore/meta.yaml>`_

   


.. conda:package:: pbcore

   |downloads_pbcore| |docker_pbcore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.2-2</code>,  <code>2.1.2-1</code>,  <code>2.1.2-0</code>,  <code>1.7.1-0</code>,  <code>1.6.5-0</code>,  <code>1.5.1-2</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.2.10-2</code>,  </span></summary>
      

      ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``1.7.1-0``,  ``1.6.5-0``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.2.10-2``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.7-1``,  ``1.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.74``
   :depends numpy: ``>=1.17``
   :depends pysam: ``>=0.15.1``
   :depends python: ``>=3.7,<3.8``
   :depends setuptools: 
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

      mamba install pbcore

   and update with::

      mamba update pbcore

  To create a new environment, run::

      mamba create --name myenvname pbcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pbcore:<tag>

   (see `pbcore/tags`_ for valid values for ``<tag>``)


.. |downloads_pbcore| image:: https://img.shields.io/conda/dn/bioconda/pbcore.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcore
   :alt:   (downloads)
.. |docker_pbcore| image:: https://quay.io/repository/biocontainers/pbcore/status
   :target: https://quay.io/repository/biocontainers/pbcore
.. _`pbcore/tags`: https://quay.io/repository/biocontainers/pbcore?tab=tags


.. raw:: html

    <script>
        var package = "pbcore";
        var versions = ["2.1.2","2.1.2","2.1.2","1.7.1","1.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcore/README.html