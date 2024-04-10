:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'csvtk'
.. highlight: bash

csvtk
=====

.. conda:recipe:: csvtk
   :replaces_section_title:
   :noindex:

   A cross\-platform\, efficient\, practical CSV\/TSV toolkit

   :homepage: https://github.com/shenwei356/csvtk
   :license: MIT
   :recipe: /`csvtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csvtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/csvtk/meta.yaml>`_

   


.. conda:package:: csvtk

   |downloads_csvtk| |docker_csvtk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.30.0-1</code>,  <code>0.30.0-0</code>,  <code>0.29.0-0</code>,  <code>0.28.0-0</code>,  <code>0.27.2-0</code>,  <code>0.27.1-0</code>,  <code>0.27.0-0</code>,  <code>0.26.0-0</code>,  <code>0.25.0-0</code>,  </span></summary>
      

      ``0.30.0-1``,  ``0.30.0-0``,  ``0.29.0-0``,  ``0.28.0-0``,  ``0.27.2-0``,  ``0.27.1-0``,  ``0.27.0-0``,  ``0.26.0-0``,  ``0.25.0-0``,  ``0.24.0-0``,  ``0.23.0-0``,  ``0.22.0-1``,  ``0.22.0-0``,  ``0.21.0-0``,  ``0.20.0-0``,  ``0.19.1-0``,  ``0.19.0-0``,  ``0.18.2-0``,  ``0.18.1-0``,  ``0.18.0-1``,  ``0.17.0-1``,  ``0.16.0-1``,  ``0.15.0-2``,  ``0.14.0-2``,  ``0.14.0-0``,  ``0.13.0-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install csvtk

   and update with::

      mamba update csvtk

  To create a new environment, run::

      mamba create --name myenvname csvtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/csvtk:<tag>

   (see `csvtk/tags`_ for valid values for ``<tag>``)


.. |downloads_csvtk| image:: https://img.shields.io/conda/dn/bioconda/csvtk.svg?style=flat
   :target: https://anaconda.org/bioconda/csvtk
   :alt:   (downloads)
.. |docker_csvtk| image:: https://quay.io/repository/biocontainers/csvtk/status
   :target: https://quay.io/repository/biocontainers/csvtk
.. _`csvtk/tags`: https://quay.io/repository/biocontainers/csvtk?tab=tags


.. raw:: html

    <script>
        var package = "csvtk";
        var versions = ["0.30.0","0.30.0","0.29.0","0.28.0","0.27.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/csvtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/csvtk/README.html