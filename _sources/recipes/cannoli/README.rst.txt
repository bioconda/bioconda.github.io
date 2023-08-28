:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cannoli'
.. highlight: bash

cannoli
=======

.. conda:recipe:: cannoli
   :replaces_section_title:
   :noindex:

   Distributed execution of bioinformatics tools on Apache Spark

   :homepage: https://github.com/bigdatagenomics/cannoli
   :license: Apache-2.0
   :recipe: /`cannoli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cannoli/meta.yaml>`_

   


.. conda:package:: cannoli

   |downloads_cannoli| |docker_cannoli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-0</code>,  <code>0.15.0-0</code>,  <code>0.14.0-0</code>,  <code>0.13.0-0</code>,  <code>0.12.0-1</code>,  <code>0.12.0-0</code>,  <code>0.11.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  </span></summary>
      

      ``1.0-0``,  ``0.15.0-0``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.1-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.0-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends pyspark: ``>=3.2.1``
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

      mamba install cannoli

   and update with::

      mamba update cannoli

  To create a new environment, run::

      mamba create --name myenvname cannoli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cannoli:<tag>

   (see `cannoli/tags`_ for valid values for ``<tag>``)


.. |downloads_cannoli| image:: https://img.shields.io/conda/dn/bioconda/cannoli.svg?style=flat
   :target: https://anaconda.org/bioconda/cannoli
   :alt:   (downloads)
.. |docker_cannoli| image:: https://quay.io/repository/biocontainers/cannoli/status
   :target: https://quay.io/repository/biocontainers/cannoli
.. _`cannoli/tags`: https://quay.io/repository/biocontainers/cannoli?tab=tags


.. raw:: html

    <script>
        var package = "cannoli";
        var versions = ["1.0","0.15.0","0.14.0","0.13.0","0.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cannoli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cannoli/README.html