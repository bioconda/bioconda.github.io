:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comet-ms'
.. highlight: bash

comet-ms
========

.. conda:recipe:: comet-ms
   :replaces_section_title:
   :noindex:

   Comet is a command line tool that does MS\/MS database search.

   :homepage: https://uwpr.github.io/Comet/
   :license: Apache License 2.0
   :recipe: /`comet-ms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comet-ms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comet-ms/meta.yaml>`_
   :links: doi: :doi:`10.1007/s13361-015-1179-x`, doi: :doi:`10.1002/pmic.201200439`

   


.. conda:package:: comet-ms

   |downloads_comet-ms| |docker_comet-ms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2023010-2</code>,  <code>2023010-1</code>,  <code>2023010-0</code>,  <code>2021010-1</code>,  <code>2021010-0</code>,  <code>2019015-0</code>,  <code>2019014-0</code>,  <code>2019013-0</code>,  <code>2019012-0</code>,  </span></summary>
      

      ``2023010-2``,  ``2023010-1``,  ``2023010-0``,  ``2021010-1``,  ``2021010-0``,  ``2019015-0``,  ``2019014-0``,  ``2019013-0``,  ``2019012-0``,  ``2019011-0``,  ``2019010-0``,  ``2018014-0``,  ``2018013-0``,  ``2018012-1``,  ``2018012-0``,  ``2016013-6``,  ``2016013-5``,  ``2016013-4``,  ``2016013-3``,  ``2016013-2``,  ``2016013-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install comet-ms

   and update with::

      mamba update comet-ms

  To create a new environment, run::

      mamba create --name myenvname comet-ms

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/comet-ms:<tag>

   (see `comet-ms/tags`_ for valid values for ``<tag>``)


.. |downloads_comet-ms| image:: https://img.shields.io/conda/dn/bioconda/comet-ms.svg?style=flat
   :target: https://anaconda.org/bioconda/comet-ms
   :alt:   (downloads)
.. |docker_comet-ms| image:: https://quay.io/repository/biocontainers/comet-ms/status
   :target: https://quay.io/repository/biocontainers/comet-ms
.. _`comet-ms/tags`: https://quay.io/repository/biocontainers/comet-ms?tab=tags


.. raw:: html

    <script>
        var package = "comet-ms";
        var versions = ["2023010","2023010","2023010","2021010","2021010"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comet-ms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comet-ms/README.html