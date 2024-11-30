:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-chado'
.. highlight: bash

python-chado
============

.. conda:recipe:: python-chado
   :replaces_section_title:
   :noindex:

   A Python library for interacting with Chado database.

   :homepage: https://github.com/galaxy-genome-annotation/python-chado
   :license: MIT / MIT
   :recipe: /`python-chado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-chado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-chado/meta.yaml>`_

   


.. conda:package:: python-chado

   |downloads_python-chado| |docker_python-chado|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.9-0</code>,  <code>2.3.8-0</code>,  <code>2.3.7-0</code>,  <code>2.3.6-0</code>,  <code>2.3.5-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-0</code>,  </span></summary>
      

      ``2.3.9-0``,  ``2.3.8-0``,  ``2.3.7-0``,  ``2.3.6-0``,  ``2.3.5-0``,  ``2.3.4-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-1``,  ``2.1.2-1``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: ``0.6.4``
   :depends biopython: 
   :depends click: 
   :depends future: 
   :depends psycopg2: 
   :depends python: 
   :depends pyyaml: 
   :depends sqlalchemy: 
   :depends wrapt: 
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

      mamba install python-chado

   and update with::

      mamba update python-chado

  To create a new environment, run::

      mamba create --name myenvname python-chado

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-chado:<tag>

   (see `python-chado/tags`_ for valid values for ``<tag>``)


.. |downloads_python-chado| image:: https://img.shields.io/conda/dn/bioconda/python-chado.svg?style=flat
   :target: https://anaconda.org/bioconda/python-chado
   :alt:   (downloads)
.. |docker_python-chado| image:: https://quay.io/repository/biocontainers/python-chado/status
   :target: https://quay.io/repository/biocontainers/python-chado
.. _`python-chado/tags`: https://quay.io/repository/biocontainers/python-chado?tab=tags


.. raw:: html

    <script>
        var package = "python-chado";
        var versions = ["2.3.9","2.3.8","2.3.7","2.3.6","2.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-chado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-chado/README.html