:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanotubes'
.. highlight: bash

bioconductor-nanotubes
======================

.. conda:recipe:: bioconductor-nanotubes
   :replaces_section_title:
   :noindex:

   Mouse nanotube CAGE data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/nanotubes.html
   :license: GPL-3
   :recipe: /`bioconductor-nanotubes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotubes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanotubes/meta.yaml>`_

   Cap Analysis of Gene Expression \(CAGE\) data from \"Identification of Gene Transcription Start Sites and Enhancers Responding to Pulmonary Carbon Nanotube Exposure in Vivo\" by Bornholdt et al. supplied as CAGE Transcription Start Sites \(CTSSs\).


.. conda:package:: bioconductor-nanotubes

   |downloads_bioconductor-nanotubes| |docker_bioconductor-nanotubes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-nanotubes

   and update with::

      mamba update bioconductor-nanotubes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nanotubes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanotubes:<tag>

   (see `bioconductor-nanotubes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanotubes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanotubes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanotubes
   :alt:   (downloads)
.. |docker_bioconductor-nanotubes| image:: https://quay.io/repository/biocontainers/bioconductor-nanotubes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanotubes
.. _`bioconductor-nanotubes/tags`: https://quay.io/repository/biocontainers/bioconductor-nanotubes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanotubes";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanotubes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanotubes/README.html