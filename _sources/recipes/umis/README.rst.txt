:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'umis'
.. highlight: bash

umis
====

.. conda:recipe:: umis
   :replaces_section_title:
   :noindex:

   Tools for processing UMI RNA\-tag data

   :homepage: https://github.com/vals/umis
   :license: MIT
   :recipe: /`umis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/umis/meta.yaml>`_

   


.. conda:package:: umis

   |downloads_umis| |docker_umis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-4</code>,  <code>1.0.9-3</code>,  <code>1.0.9-2</code>,  <code>1.0.9-0</code>,  <code>1.0.8-0</code>,  <code>1.0.7-3</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  </span></summary>
      

      ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.9.0b-2``,  ``0.9.0b-1``,  ``0.9.0b-0``,  ``0.9.0a-0``,  ``0.7.0-1``,  ``0.7.0a-1``,  ``0.6.0a-2``,  ``0.6.0a-1``,  ``0.6.0a-0``,  ``0.5.0a-3``,  ``0.5.0a-2``,  ``0.5.0a-1``,  ``0.5.0a-0``,  ``0.4.0a-0``,  ``0.3.1a0-2``,  ``0.3.1a0-1``,  ``0.3.1a0-0``,  ``0.2.2a0-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends libgcc: ``>=13``
   :depends pandas: 
   :depends pysam: ``>=0.8.3``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends regex: 
   :depends scipy: 
   :depends toolz: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install umis

   and update with::

      mamba update umis

  To create a new environment, run::

      mamba create --name myenvname umis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/umis:<tag>

   (see `umis/tags`_ for valid values for ``<tag>``)


.. |downloads_umis| image:: https://img.shields.io/conda/dn/bioconda/umis.svg?style=flat
   :target: https://anaconda.org/bioconda/umis
   :alt:   (downloads)
.. |docker_umis| image:: https://quay.io/repository/biocontainers/umis/status
   :target: https://quay.io/repository/biocontainers/umis
.. _`umis/tags`: https://quay.io/repository/biocontainers/umis?tab=tags


.. raw:: html

    <script>
        var package = "umis";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/umis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/umis/README.html