:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-py'
.. highlight: bash

bactopia-py
===========

.. conda:recipe:: bactopia-py
   :replaces_section_title:
   :noindex:

   A Python package for working with Bactopia

   :homepage: https://bactopia.github.io/
   :license: MIT
   :recipe: /`bactopia-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-py/meta.yaml>`_

   


.. conda:package:: bactopia-py

   |downloads_bactopia-py| |docker_bactopia-py|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends executor: 
   :depends nextflow: ``>=21.10.0``
   :depends pandas: ``>=1.5.3,<2.0.0``
   :depends python: ``>=3.8,<3.12``
   :depends pyyaml: 
   :depends rauth: 
   :depends requests: 
   :depends rich-click: ``>=1.6.0``
   :depends tqdm: 
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

      mamba install bactopia-py

   and update with::

      mamba update bactopia-py

  To create a new environment, run::

      mamba create --name myenvname bactopia-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bactopia-py:<tag>

   (see `bactopia-py/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-py| image:: https://img.shields.io/conda/dn/bioconda/bactopia-py.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-py
   :alt:   (downloads)
.. |docker_bactopia-py| image:: https://quay.io/repository/biocontainers/bactopia-py/status
   :target: https://quay.io/repository/biocontainers/bactopia-py
.. _`bactopia-py/tags`: https://quay.io/repository/biocontainers/bactopia-py?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-py";
        var versions = ["1.4.0","1.3.0","1.2.1","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-py/README.html