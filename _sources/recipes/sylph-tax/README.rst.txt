:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sylph-tax'
.. highlight: bash

sylph-tax
=========

.. conda:recipe:: sylph-tax
   :replaces_section_title:
   :noindex:

   Integrating taxonomic information into the sylph metagenome profiler.

   :homepage: https://github.com/bluenote-1577/sylph-tax
   :documentation: https://github.com/bluenote-1577/sylph-tax/blob/v1.8.0/README.md
   
   :license: MIT / MIT
   :recipe: /`sylph-tax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sylph-tax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sylph-tax/meta.yaml>`_

   


.. conda:package:: sylph-tax

   |downloads_sylph-tax| |docker_sylph-tax|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.0-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.8.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends requests: 
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

      mamba install sylph-tax

   and update with::

      mamba update sylph-tax

  To create a new environment, run::

      mamba create --name myenvname sylph-tax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sylph-tax:<tag>

   (see `sylph-tax/tags`_ for valid values for ``<tag>``)


.. |downloads_sylph-tax| image:: https://img.shields.io/conda/dn/bioconda/sylph-tax.svg?style=flat
   :target: https://anaconda.org/bioconda/sylph-tax
   :alt:   (downloads)
.. |docker_sylph-tax| image:: https://quay.io/repository/biocontainers/sylph-tax/status
   :target: https://quay.io/repository/biocontainers/sylph-tax
.. _`sylph-tax/tags`: https://quay.io/repository/biocontainers/sylph-tax?tab=tags


.. raw:: html

    <script>
        var package = "sylph-tax";
        var versions = ["1.8.0","1.7.1","1.7.0","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sylph-tax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sylph-tax/README.html