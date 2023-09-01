:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transabyss'
.. highlight: bash

transabyss
==========

.. conda:recipe:: transabyss
   :replaces_section_title:
   :noindex:

   de novo assembly of RNA\-Seq data using ABySS

   :homepage: https://github.com/bcgsc/transabyss
   :license: GPL-3.0
   :recipe: /`transabyss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transabyss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transabyss/meta.yaml>`_

   


.. conda:package:: transabyss

   |downloads_transabyss| |docker_transabyss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-7</code>,  <code>2.0.1-6</code>,  <code>2.0.1-5</code>,  <code>2.0.1-4</code>,  <code>2.0.1-3</code>,  <code>1.5.5-3</code>,  <code>1.5.5-2</code>,  <code>1.5.5-1</code>,  <code>1.5.4-1</code>,  </span></summary>
      

      ``2.0.1-7``,  ``2.0.1-6``,  ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``1.5.5-3``,  ``1.5.5-2``,  ``1.5.5-1``,  ``1.5.4-1``,  ``1.5.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends abyss: ``2.0.*``
   :depends blat: 
   :depends icu: ``58.*``
   :depends python: 
   :depends python-igraph: ``0.7.*``
   :depends samtools: 
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

      mamba install transabyss

   and update with::

      mamba update transabyss

  To create a new environment, run::

      mamba create --name myenvname transabyss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transabyss:<tag>

   (see `transabyss/tags`_ for valid values for ``<tag>``)


.. |downloads_transabyss| image:: https://img.shields.io/conda/dn/bioconda/transabyss.svg?style=flat
   :target: https://anaconda.org/bioconda/transabyss
   :alt:   (downloads)
.. |docker_transabyss| image:: https://quay.io/repository/biocontainers/transabyss/status
   :target: https://quay.io/repository/biocontainers/transabyss
.. _`transabyss/tags`: https://quay.io/repository/biocontainers/transabyss?tab=tags


.. raw:: html

    <script>
        var package = "transabyss";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transabyss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transabyss/README.html