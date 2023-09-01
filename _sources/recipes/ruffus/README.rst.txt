:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ruffus'
.. highlight: bash

ruffus
======

.. conda:recipe:: ruffus
   :replaces_section_title:
   :noindex:

   Light\-weight Python Computational Pipeline Management

   :homepage: http://www.ruffus.org.uk/
   :license: MIT
   :recipe: /`ruffus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruffus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ruffus/meta.yaml>`_

   


.. conda:package:: ruffus

   |downloads_ruffus| |docker_ruffus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.4-1</code>,  <code>2.8.4-0</code>,  <code>2.8.3-0</code>,  <code>2.8.2-0</code>,  <code>2.8.1-1</code>,  <code>2.8.1-0</code>,  <code>2.8-0</code>,  <code>2.7-0</code>,  <code>2.6.3-1</code>,  </span></summary>
      

      ``2.8.4-1``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-1``,  ``2.8.1-0``,  ``2.8-0``,  ``2.7-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.4.1-1``,  ``2.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: 
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

      mamba install ruffus

   and update with::

      mamba update ruffus

  To create a new environment, run::

      mamba create --name myenvname ruffus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ruffus:<tag>

   (see `ruffus/tags`_ for valid values for ``<tag>``)


.. |downloads_ruffus| image:: https://img.shields.io/conda/dn/bioconda/ruffus.svg?style=flat
   :target: https://anaconda.org/bioconda/ruffus
   :alt:   (downloads)
.. |docker_ruffus| image:: https://quay.io/repository/biocontainers/ruffus/status
   :target: https://quay.io/repository/biocontainers/ruffus
.. _`ruffus/tags`: https://quay.io/repository/biocontainers/ruffus?tab=tags


.. raw:: html

    <script>
        var package = "ruffus";
        var versions = ["2.8.4","2.8.4","2.8.3","2.8.2","2.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ruffus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ruffus/README.html