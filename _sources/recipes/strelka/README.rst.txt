:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strelka'
.. highlight: bash

strelka
=======

.. conda:recipe:: strelka
   :replaces_section_title:
   :noindex:

   Strelka calls somatic and germline small variants from mapped sequencing reads

   :homepage: https://github.com/Illumina/strelka
   :license: GPL / GPL-3.0
   :recipe: /`strelka <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strelka>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strelka/meta.yaml>`_
   :links: biotools: :biotools:`strelka`

   


.. conda:package:: strelka

   |downloads_strelka| |docker_strelka|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9.10-2</code>,  <code>2.9.10-1</code>,  <code>2.9.10-0</code>,  <code>2.9.7-0</code>,  <code>2.9.4-0</code>,  <code>2.9.3-0</code>,  <code>2.9.2-0</code>,  <code>2.8.4-0</code>,  <code>2.8.2-0</code>,  </span></summary>
      

      ``2.9.10-2``,  ``2.9.10-1``,  ``2.9.10-0``,  ``2.9.7-0``,  ``2.9.4-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.8.4-0``,  ``2.8.2-0``,  ``2.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``2.7.*``
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

      mamba install strelka

   and update with::

      mamba update strelka

  To create a new environment, run::

      mamba create --name myenvname strelka

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strelka:<tag>

   (see `strelka/tags`_ for valid values for ``<tag>``)


.. |downloads_strelka| image:: https://img.shields.io/conda/dn/bioconda/strelka.svg?style=flat
   :target: https://anaconda.org/bioconda/strelka
   :alt:   (downloads)
.. |docker_strelka| image:: https://quay.io/repository/biocontainers/strelka/status
   :target: https://quay.io/repository/biocontainers/strelka
.. _`strelka/tags`: https://quay.io/repository/biocontainers/strelka?tab=tags


.. raw:: html

    <script>
        var package = "strelka";
        var versions = ["2.9.10","2.9.10","2.9.10","2.9.7","2.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strelka/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strelka/README.html