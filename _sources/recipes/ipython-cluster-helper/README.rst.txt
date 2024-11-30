:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ipython-cluster-helper'
.. highlight: bash

ipython-cluster-helper
======================

.. conda:recipe:: ipython-cluster-helper
   :replaces_section_title:
   :noindex:

   Tool to easily start up an IPython cluster on different schedulers

   :homepage: https://github.com/roryk/ipython-cluster-helper
   :license: MIT
   :recipe: /`ipython-cluster-helper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipython-cluster-helper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ipython-cluster-helper/meta.yaml>`_

   


.. conda:package:: ipython-cluster-helper

   |downloads_ipython-cluster-helper| |docker_ipython-cluster-helper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.4-1</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-0</code>,  <code>0.5.7-1</code>,  </span></summary>
      

      ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-1``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends ipyparallel: ``>=6.0.2``
   :depends netifaces: 
   :depends python: 
   :depends pyzmq: 
   :depends zeromq: 
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

      mamba install ipython-cluster-helper

   and update with::

      mamba update ipython-cluster-helper

  To create a new environment, run::

      mamba create --name myenvname ipython-cluster-helper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ipython-cluster-helper:<tag>

   (see `ipython-cluster-helper/tags`_ for valid values for ``<tag>``)


.. |downloads_ipython-cluster-helper| image:: https://img.shields.io/conda/dn/bioconda/ipython-cluster-helper.svg?style=flat
   :target: https://anaconda.org/bioconda/ipython-cluster-helper
   :alt:   (downloads)
.. |docker_ipython-cluster-helper| image:: https://quay.io/repository/biocontainers/ipython-cluster-helper/status
   :target: https://quay.io/repository/biocontainers/ipython-cluster-helper
.. _`ipython-cluster-helper/tags`: https://quay.io/repository/biocontainers/ipython-cluster-helper?tab=tags


.. raw:: html

    <script>
        var package = "ipython-cluster-helper";
        var versions = ["0.6.4","0.6.4","0.6.3","0.6.2","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ipython-cluster-helper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ipython-cluster-helper/README.html