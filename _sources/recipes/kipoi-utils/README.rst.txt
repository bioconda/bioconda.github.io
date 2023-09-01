:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi-utils'
.. highlight: bash

kipoi-utils
===========

.. conda:recipe:: kipoi-utils
   :replaces_section_title:
   :noindex:

   kipoi\-utils\: utils used in various packages related to kipoi

   :homepage: https://github.com/kipoi/kipoi-utils
   :license: MIT / MIT
   :recipe: /`kipoi-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi-utils/meta.yaml>`_

   kipoi\-utils\: utils used in various packages related to kipoi


.. conda:package:: kipoi-utils

   |downloads_kipoi-utils| |docker_kipoi-utils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.7-0</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.3.8-1</code>,  <code>0.3.8-0</code>,  </span></summary>
      

      ``0.7.7-0``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.3.8-1``,  ``0.3.8-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.1.12-2``,  ``0.1.12-1``,  ``0.1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: 
   :depends numpy: 
   :depends pandas: ``>=0.21.0``
   :depends python: 
   :depends pyyaml: ``>=5.1.0``
   :depends related: 
   :depends six: 
   :depends tqdm: 
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

      mamba install kipoi-utils

   and update with::

      mamba update kipoi-utils

  To create a new environment, run::

      mamba create --name myenvname kipoi-utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kipoi-utils:<tag>

   (see `kipoi-utils/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoi-utils| image:: https://img.shields.io/conda/dn/bioconda/kipoi-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoi-utils
   :alt:   (downloads)
.. |docker_kipoi-utils| image:: https://quay.io/repository/biocontainers/kipoi-utils/status
   :target: https://quay.io/repository/biocontainers/kipoi-utils
.. _`kipoi-utils/tags`: https://quay.io/repository/biocontainers/kipoi-utils?tab=tags


.. raw:: html

    <script>
        var package = "kipoi-utils";
        var versions = ["0.7.7","0.7.6","0.7.5","0.7.2","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi-utils/README.html