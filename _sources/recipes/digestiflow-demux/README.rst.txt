:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'digestiflow-demux'
.. highlight: bash

digestiflow-demux
=================

.. conda:recipe:: digestiflow-demux
   :replaces_section_title:
   :noindex:

   Digestiflow Command Line Client.

   :homepage: https://github.com/bihealth/digestiflow-demux
   :license: MIT
   :recipe: /`digestiflow-demux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-demux/meta.yaml>`_

   A command line client tool to perform semiautomatic demultiplexing of Illumina
   flowcells using data from Digestiflow Server.


.. conda:package:: digestiflow-demux

   |downloads_digestiflow-demux| |docker_digestiflow-demux|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: ``>=18.2.0``
   :depends coloredlogs: ``>=10.0``
   :depends git: 
   :depends python: ``>=3.5``
   :depends requests: 
   :depends snakemake: ``>=5.4.0``
   :depends toml: ``>=0.10.0``
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

      mamba install digestiflow-demux

   and update with::

      mamba update digestiflow-demux

  To create a new environment, run::

      mamba create --name myenvname digestiflow-demux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/digestiflow-demux:<tag>

   (see `digestiflow-demux/tags`_ for valid values for ``<tag>``)


.. |downloads_digestiflow-demux| image:: https://img.shields.io/conda/dn/bioconda/digestiflow-demux.svg?style=flat
   :target: https://anaconda.org/bioconda/digestiflow-demux
   :alt:   (downloads)
.. |docker_digestiflow-demux| image:: https://quay.io/repository/biocontainers/digestiflow-demux/status
   :target: https://quay.io/repository/biocontainers/digestiflow-demux
.. _`digestiflow-demux/tags`: https://quay.io/repository/biocontainers/digestiflow-demux?tab=tags


.. raw:: html

    <script>
        var package = "digestiflow-demux";
        var versions = ["0.5.2","0.5.1","0.5.0","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digestiflow-demux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digestiflow-demux/README.html