:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flextaxd'
.. highlight: bash

flextaxd
========

.. conda:recipe:: flextaxd
   :replaces_section_title:
   :noindex:

   Script that allows the creation of custom kraken databases from various sources \(NCBI\, QIIME\, CanSNPer\)

   :homepage: https://github.com/FOI-Bioinformatics/flextaxd
   :license: GPL3 / GPLv3
   :recipe: /`flextaxd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flextaxd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flextaxd/meta.yaml>`_

   


.. conda:package:: flextaxd

   |downloads_flextaxd| |docker_flextaxd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install flextaxd

   and update with::

      mamba update flextaxd

  To create a new environment, run::

      mamba create --name myenvname flextaxd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flextaxd:<tag>

   (see `flextaxd/tags`_ for valid values for ``<tag>``)


.. |downloads_flextaxd| image:: https://img.shields.io/conda/dn/bioconda/flextaxd.svg?style=flat
   :target: https://anaconda.org/bioconda/flextaxd
   :alt:   (downloads)
.. |docker_flextaxd| image:: https://quay.io/repository/biocontainers/flextaxd/status
   :target: https://quay.io/repository/biocontainers/flextaxd
.. _`flextaxd/tags`: https://quay.io/repository/biocontainers/flextaxd?tab=tags


.. raw:: html

    <script>
        var package = "flextaxd";
        var versions = ["0.4.4","0.4.3","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flextaxd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flextaxd/README.html