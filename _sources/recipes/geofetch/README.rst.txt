:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geofetch'
.. highlight: bash

geofetch
========

.. conda:recipe:: geofetch
   :replaces_section_title:
   :noindex:

   Downloads data and metadata from GEO and SRA and creates standard PEPs.

   :homepage: https://github.com/pepkit/geofetch/
   :documentation: http://geofetch.databio.org/
   
   :license: BSD / BSD-2-Clause
   :recipe: /`geofetch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geofetch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geofetch/meta.yaml>`_

   


.. conda:package:: geofetch

   |downloads_geofetch| |docker_geofetch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.7-0</code>,  <code>0.12.6-0</code>,  <code>0.12.5-0</code>,  <code>0.12.4-0</code>,  <code>0.12.3-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.2-0</code>,  </span></summary>
      

      ``0.12.7-0``,  ``0.12.6-0``,  ``0.12.5-0``,  ``0.12.4-0``,  ``0.12.3-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends attmap: ``>=0.1.8``
   :depends colorama: ``>=0.3.9``
   :depends coloredlogs: ``>=15.0.1``
   :depends logmuse: ``>=0.2.6``
   :depends pandas: ``>=1.3.5``
   :depends peppy: ``>=0.35.1``
   :depends piper: ``>=0.12.3``
   :depends python: ``>=3.8``
   :depends requests: ``>=2.28.1``
   :depends rich: ``>=12.5.1``
   :depends ubiquerg: ``>=0.6.0``
   :depends xmltodict: ``>=0.13.0``
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

      mamba install geofetch

   and update with::

      mamba update geofetch

  To create a new environment, run::

      mamba create --name myenvname geofetch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/geofetch:<tag>

   (see `geofetch/tags`_ for valid values for ``<tag>``)


.. |downloads_geofetch| image:: https://img.shields.io/conda/dn/bioconda/geofetch.svg?style=flat
   :target: https://anaconda.org/bioconda/geofetch
   :alt:   (downloads)
.. |docker_geofetch| image:: https://quay.io/repository/biocontainers/geofetch/status
   :target: https://quay.io/repository/biocontainers/geofetch
.. _`geofetch/tags`: https://quay.io/repository/biocontainers/geofetch?tab=tags


.. raw:: html

    <script>
        var package = "geofetch";
        var versions = ["0.12.7","0.12.6","0.12.5","0.12.4","0.12.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geofetch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geofetch/README.html