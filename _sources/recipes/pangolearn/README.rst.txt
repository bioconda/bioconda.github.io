:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangolearn'
.. highlight: bash

pangolearn
==========

.. conda:recipe:: pangolearn
   :replaces_section_title:
   :noindex:

   Store of the trained model for pangolin to access.

   :homepage: https://github.com/cov-lineages/pangoLEARN
   :license: GPL3 / GPL-3.0
   :recipe: /`pangolearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangolearn/meta.yaml>`_

   


.. conda:package:: pangolearn

   |downloads_pangolearn| |docker_pangolearn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2022.03.22-0</code>,  <code>2022.02.02-0</code>,  <code>2022.01.20-0</code>,  <code>2021.12.06-0</code>,  <code>2021.11.25-0</code>,  <code>2021.11.18-0</code>,  <code>2021.11.09-0</code>,  <code>2021.11.04-0</code>,  <code>2021.10.18-0</code>,  </span></summary>
      

      ``2022.03.22-0``,  ``2022.02.02-0``,  ``2022.01.20-0``,  ``2021.12.06-0``,  ``2021.11.25-0``,  ``2021.11.18-0``,  ``2021.11.09-0``,  ``2021.11.04-0``,  ``2021.10.18-0``,  ``2021.10.13-0``,  ``2021.09.28-0``,  ``2021.09.17-0``,  ``2021.08.24-0``,  ``2021.08.09-0``,  ``2021.07.28-0``,  ``2021.07.09-0``,  ``2021.06.15-0``,  ``2021.06.05-0``,  ``2021.05.27-0``,  ``2021.05.19-0``,  ``2021.05.10-0``,  ``2021.04.28-0``,  ``2021.04.23-0``,  ``2021.04.21-0``,  ``2021.04.14-0``,  ``2021.04.01-0``,  ``2021.03.29-0``,  ``2021.03.16-0``,  ``2021.02.21-0``,  ``2021.02.18-0``,  ``2021.02.12-0``,  ``2021.02.06-0``,  ``2021.02.05-0``,  ``2021.02.01-0``,  ``2021.01.30-0``,  ``2021.01.22-0``,  ``2021.01.16-0``,  ``2020.12.17_2-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
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

      mamba install pangolearn

   and update with::

      mamba update pangolearn

  To create a new environment, run::

      mamba create --name myenvname pangolearn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangolearn:<tag>

   (see `pangolearn/tags`_ for valid values for ``<tag>``)


.. |downloads_pangolearn| image:: https://img.shields.io/conda/dn/bioconda/pangolearn.svg?style=flat
   :target: https://anaconda.org/bioconda/pangolearn
   :alt:   (downloads)
.. |docker_pangolearn| image:: https://quay.io/repository/biocontainers/pangolearn/status
   :target: https://quay.io/repository/biocontainers/pangolearn
.. _`pangolearn/tags`: https://quay.io/repository/biocontainers/pangolearn?tab=tags


.. raw:: html

    <script>
        var package = "pangolearn";
        var versions = ["2022.03.22","2022.02.02","2022.01.20","2021.12.06","2021.11.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangolearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangolearn/README.html