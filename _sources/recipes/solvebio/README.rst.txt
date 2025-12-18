:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'solvebio'
.. highlight: bash

solvebio
========

.. conda:recipe:: solvebio
   :replaces_section_title:
   :noindex:

   The SolveBio Python client.

   :homepage: https://github.com/solvebio/solvebio-python
   :documentation: https://docs.solvebio.com
   
   :license: MIT / MIT
   :recipe: /`solvebio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/solvebio/meta.yaml>`_

   


.. conda:package:: solvebio

   |downloads_solvebio| |docker_solvebio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.33.0-0</code>,  <code>2.32.0-0</code>,  <code>2.31.2-0</code>,  <code>2.31.1-0</code>,  <code>2.31.0-0</code>,  <code>2.30.1-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.33.0-0``,  ``2.32.0-0``,  ``2.31.2-0``,  ``2.31.1-0``,  ``2.31.0-0``,  ``2.30.1-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.29.2-0``,  ``2.29.1-0``,  ``2.29.0-0``,  ``2.28.0-0``,  ``2.27.0-0``,  ``2.26.0-0``,  ``2.25.0-0``,  ``2.24.2-0``,  ``2.24.1-0``,  ``2.24.0-0``,  ``2.21.0-0``,  ``2.20.0-0``,  ``2.19.0-0``,  ``2.18.1-0``,  ``2.18.0-0``,  ``2.17.1-0``,  ``2.16.0-0``,  ``2.15.0-0``,  ``2.14.1-0``,  ``2.14.0-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.0-0``,  ``2.8.9-0``,  ``2.8.8-0``,  ``2.8.7-0``,  ``2.8.6-0``,  ``2.8.5-0``,  ``2.8.4-0``,  ``2.8.0-0``,  ``2.7.0-0``,  ``2.6.1-0``,  ``2.5.1-2``,  ``2.5.1-0``,  ``2.4.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends dash-auth: ``<2``
   :depends dash-core-components: 
   :depends dash-html-components: 
   :depends flask: 
   :depends flask-seasurf: 
   :depends pycurl: ``>=7.0.0``
   :depends pyprind: 
   :depends python: 
   :depends requests: ``>=2.0.0``
   :depends six: 
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

      mamba install solvebio

   and update with::

      mamba update solvebio

  To create a new environment, run::

      mamba create --name myenvname solvebio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/solvebio:<tag>

   (see `solvebio/tags`_ for valid values for ``<tag>``)


.. |downloads_solvebio| image:: https://img.shields.io/conda/dn/bioconda/solvebio.svg?style=flat
   :target: https://anaconda.org/bioconda/solvebio
   :alt:   (downloads)
.. |docker_solvebio| image:: https://quay.io/repository/biocontainers/solvebio/status
   :target: https://quay.io/repository/biocontainers/solvebio
.. _`solvebio/tags`: https://quay.io/repository/biocontainers/solvebio?tab=tags


.. raw:: html

    <script>
        var package = "solvebio";
        var versions = ["2.34.0","2.33.0","2.32.0","2.31.2","2.31.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/solvebio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/solvebio/README.html