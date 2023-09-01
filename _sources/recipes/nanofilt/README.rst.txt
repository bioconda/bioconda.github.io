:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanofilt'
.. highlight: bash

nanofilt
========

.. conda:recipe:: nanofilt
   :replaces_section_title:
   :noindex:

   Filtering and trimming of Oxford Nanopore Sequencing data

   :homepage: https://github.com/wdecoster/nanofilt
   :license: MIT / MIT License
   :recipe: /`nanofilt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanofilt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanofilt/meta.yaml>`_

   


.. conda:package:: nanofilt

   |downloads_nanofilt| |docker_nanofilt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  <code>2.6.0-0</code>,  <code>2.5.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.8.0-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.3.0-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.0.1-0``,  ``1.9.2-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends nanoget: ``>=0.15.0``
   :depends nanomath: ``>=0.13.3``
   :depends python: ``>=3``
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

      mamba install nanofilt

   and update with::

      mamba update nanofilt

  To create a new environment, run::

      mamba create --name myenvname nanofilt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanofilt:<tag>

   (see `nanofilt/tags`_ for valid values for ``<tag>``)


.. |downloads_nanofilt| image:: https://img.shields.io/conda/dn/bioconda/nanofilt.svg?style=flat
   :target: https://anaconda.org/bioconda/nanofilt
   :alt:   (downloads)
.. |docker_nanofilt| image:: https://quay.io/repository/biocontainers/nanofilt/status
   :target: https://quay.io/repository/biocontainers/nanofilt
.. _`nanofilt/tags`: https://quay.io/repository/biocontainers/nanofilt?tab=tags


.. raw:: html

    <script>
        var package = "nanofilt";
        var versions = ["2.8.0","2.7.1","2.7.0","2.6.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanofilt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanofilt/README.html