:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ont-modkit'
.. highlight: bash

ont-modkit
==========

.. conda:recipe:: ont-modkit
   :replaces_section_title:
   :noindex:

   A bioinformatics tool for working with modified bases in Oxford Nanopore sequencing data.

   :homepage: https://github.com/nanoporetech/modkit
   :documentation: https://nanoporetech.github.io/modkit/
   
   :license: PROPRIETARY / Oxford Nanopore Technologies PLC. Public License Version 1.0
   :recipe: /`ont-modkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-modkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-modkit/meta.yaml>`_

   


.. conda:package:: ont-modkit

   |downloads_ont-modkit| |docker_ont-modkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-0</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  </span></summary>
      

      ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install ont-modkit

   and update with::

      mamba update ont-modkit

  To create a new environment, run::

      mamba create --name myenvname ont-modkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ont-modkit:<tag>

   (see `ont-modkit/tags`_ for valid values for ``<tag>``)


.. |downloads_ont-modkit| image:: https://img.shields.io/conda/dn/bioconda/ont-modkit.svg?style=flat
   :target: https://anaconda.org/bioconda/ont-modkit
   :alt:   (downloads)
.. |docker_ont-modkit| image:: https://quay.io/repository/biocontainers/ont-modkit/status
   :target: https://quay.io/repository/biocontainers/ont-modkit
.. _`ont-modkit/tags`: https://quay.io/repository/biocontainers/ont-modkit?tab=tags


.. raw:: html

    <script>
        var package = "ont-modkit";
        var versions = ["0.4.2","0.4.1","0.4.1","0.4.0","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-modkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-modkit/README.html