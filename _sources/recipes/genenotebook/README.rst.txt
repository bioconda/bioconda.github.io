:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genenotebook'
.. highlight: bash

genenotebook
============

.. conda:recipe:: genenotebook
   :replaces_section_title:
   :noindex:

   A colleborative notebook for comparative genomics

   :homepage: https://genenotebook.github.io
   :license: AGPL-3.0
   :recipe: /`genenotebook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genenotebook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genenotebook/meta.yaml>`_

   


.. conda:package:: genenotebook

   |downloads_genenotebook| |docker_genenotebook|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.2-2</code>,  <code>0.3.2-1</code>,  <code>0.3.2-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.1.16-4</code>,  <code>0.1.16-3</code>,  <code>0.1.15-4</code>,  </span></summary>
      

      ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.1.16-4``,  ``0.1.16-3``,  ``0.1.15-4``,  ``0.1.14-2``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-1``,  ``0.1.5-1``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mongodb: ``>=5.0``
   :depends nodejs: ``>=15,<16``
   :depends nodejs: ``>=15.14.0,<16.0a0``
   :depends python_abi: ``3.11.* *_cp311``
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

      mamba install genenotebook

   and update with::

      mamba update genenotebook

  To create a new environment, run::

      mamba create --name myenvname genenotebook

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genenotebook:<tag>

   (see `genenotebook/tags`_ for valid values for ``<tag>``)


.. |downloads_genenotebook| image:: https://img.shields.io/conda/dn/bioconda/genenotebook.svg?style=flat
   :target: https://anaconda.org/bioconda/genenotebook
   :alt:   (downloads)
.. |docker_genenotebook| image:: https://quay.io/repository/biocontainers/genenotebook/status
   :target: https://quay.io/repository/biocontainers/genenotebook
.. _`genenotebook/tags`: https://quay.io/repository/biocontainers/genenotebook?tab=tags


.. raw:: html

    <script>
        var package = "genenotebook";
        var versions = ["0.3.2","0.3.2","0.3.2","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genenotebook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genenotebook/README.html