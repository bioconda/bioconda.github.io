:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia'
.. highlight: bash

bactopia
========

.. conda:recipe:: bactopia
   :replaces_section_title:
   :noindex:

   Bactopia is a flexible pipeline for complete analysis of bacterial genomes.

   :homepage: https://bactopia.github.io/
   :developer docs: https://github.com/bactopia/bactopia/
   :license: MIT
   :recipe: /`bactopia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia/meta.yaml>`_
   :links: biotools: :biotools:`bactopia`, doi: :doi:`10.1128/mSystems.00190-20`

   


.. conda:package:: bactopia

   |downloads_bactopia| |docker_bactopia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-1</code>,  </span></summary>
      

      ``3.0.1-0``,  ``3.0.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.5-1``,  ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-2``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.6-0``,  ``1.5.5-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.11-1``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bactopia-py: ``>=1.0.9``
   :depends conda: ``>=22.11.0``
   :depends coreutils: 
   :depends mamba: ``>=1.1.0``
   :depends nextflow: ``>=21.10.0``
   :depends python: ``>=3.9``
   :depends sed: 
   :depends wget: 
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

      mamba install bactopia

   and update with::

      mamba update bactopia

  To create a new environment, run::

      mamba create --name myenvname bactopia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bactopia:<tag>

   (see `bactopia/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia| image:: https://img.shields.io/conda/dn/bioconda/bactopia.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia
   :alt:   (downloads)
.. |docker_bactopia| image:: https://quay.io/repository/biocontainers/bactopia/status
   :target: https://quay.io/repository/biocontainers/bactopia
.. _`bactopia/tags`: https://quay.io/repository/biocontainers/bactopia?tab=tags


.. raw:: html

    <script>
        var package = "bactopia";
        var versions = ["3.0.1","3.0.0","2.2.0","2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia/README.html