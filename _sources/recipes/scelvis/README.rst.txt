:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scelvis'
.. highlight: bash

scelvis
=======

.. conda:recipe:: scelvis
   :replaces_section_title:
   :noindex:

   SCelVis \- web\-based visualization of single\-cell data

   :homepage: https://github.com/bihealth/scelvis
   :license: MIT / MIT
   :recipe: /`scelvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelvis/meta.yaml>`_

   


.. conda:package:: scelvis

   |downloads_scelvis| |docker_scelvis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.9-0</code>,  <code>0.8.7-0</code>,  <code>0.8.4-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-0</code>,  <code>0.8.0-0</code>,  <code>0.7.3-0</code>,  </span></summary>
      

      ``0.8.9-0``,  ``0.8.7-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.7.6``
   :depends attrs: ``>=21.2``
   :depends click: ``<8.0``
   :depends dash: 
   :depends dash-bootstrap-components: 
   :depends dash-core-components: ``>1.0,<2.0``
   :depends dash-html-components: ``>1.0,<2.0``
   :depends dash-renderer: ``>=1.9.1,<2.0``
   :depends dash-table: ``>=5.0``
   :depends flask: ``>=2.0``
   :depends flask-caching: ``>=1.10``
   :depends fs: ``>=2.4.11``
   :depends fs.sshfs: ``>=1.0.0``
   :depends htmllistparse: ``>=0.5``
   :depends logzero: ``>=1.7.0``
   :depends numpy: ``<1.21``
   :depends pandas: ``>=1.3.4``
   :depends plotly: ``>=5.3.1``
   :depends python: ``>=3.6``
   :depends python-irodsclient: ``>=1.1.0``
   :depends requests: ``>=2.26.0``
   :depends ruamel.yaml: ``>=0.17.17``
   :depends s3fs: ``>=2021.11.0``
   :depends scanpy: 
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

      mamba install scelvis

   and update with::

      mamba update scelvis

  To create a new environment, run::

      mamba create --name myenvname scelvis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scelvis:<tag>

   (see `scelvis/tags`_ for valid values for ``<tag>``)


.. |downloads_scelvis| image:: https://img.shields.io/conda/dn/bioconda/scelvis.svg?style=flat
   :target: https://anaconda.org/bioconda/scelvis
   :alt:   (downloads)
.. |docker_scelvis| image:: https://quay.io/repository/biocontainers/scelvis/status
   :target: https://quay.io/repository/biocontainers/scelvis
.. _`scelvis/tags`: https://quay.io/repository/biocontainers/scelvis?tab=tags


.. raw:: html

    <script>
        var package = "scelvis";
        var versions = ["0.8.9","0.8.7","0.8.4","0.8.3","0.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scelvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scelvis/README.html