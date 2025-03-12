:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eggnog-mapper'
.. highlight: bash

eggnog-mapper
=============

.. conda:recipe:: eggnog-mapper
   :replaces_section_title:
   :noindex:

   Fast genome\-wide functional annotation through orthology assignment.

   :homepage: https://github.com/eggnogdb/eggnog-mapper
   :documentation: https://github.com/eggnogdb/eggnog-mapper/wiki
   
   :license: GPL / AGPL-3.0-only
   :recipe: /`eggnog-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggnog-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eggnog-mapper/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gky1085`, usegalaxy-eu: :usegalaxy-eu:`eggnog_mapper`

   


.. conda:package:: eggnog-mapper

   |downloads_eggnog-mapper| |docker_eggnog-mapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.12-2</code>,  <code>2.1.12-1</code>,  <code>2.1.12-0</code>,  <code>2.1.11-0</code>,  <code>2.1.10-0</code>,  <code>2.1.9-0</code>,  <code>2.1.8-0</code>,  <code>2.1.7-0</code>,  <code>2.1.6-0</code>,  </span></summary>
      

      ``2.1.12-2``,  ``2.1.12-1``,  ``2.1.12-0``,  ``2.1.11-0``,  ``2.1.10-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.7-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.76``
   :depends diamond: ``>=2.0.11``
   :depends easel: 
   :depends hmmer: 
   :depends mmseqs2: 
   :depends prodigal: 
   :depends psutil: ``>=5.7.0``
   :depends python: ``>=3.7,<3.12``
   :depends wget: 
   :depends xlsxwriter: ``>=1.4.3``
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

      mamba install eggnog-mapper

   and update with::

      mamba update eggnog-mapper

  To create a new environment, run::

      mamba create --name myenvname eggnog-mapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/eggnog-mapper:<tag>

   (see `eggnog-mapper/tags`_ for valid values for ``<tag>``)


.. |downloads_eggnog-mapper| image:: https://img.shields.io/conda/dn/bioconda/eggnog-mapper.svg?style=flat
   :target: https://anaconda.org/bioconda/eggnog-mapper
   :alt:   (downloads)
.. |docker_eggnog-mapper| image:: https://quay.io/repository/biocontainers/eggnog-mapper/status
   :target: https://quay.io/repository/biocontainers/eggnog-mapper
.. _`eggnog-mapper/tags`: https://quay.io/repository/biocontainers/eggnog-mapper?tab=tags


.. raw:: html

    <script>
        var package = "eggnog-mapper";
        var versions = ["2.1.12","2.1.12","2.1.12","2.1.11","2.1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eggnog-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eggnog-mapper/README.html