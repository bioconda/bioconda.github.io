:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'digestiflow-cli'
.. highlight: bash

digestiflow-cli
===============

.. conda:recipe:: digestiflow-cli
   :replaces_section_title:
   :noindex:

   Command line client for Digestiflow.


   :homepage: https://github.com/bihealth/digestiflow-cli
   :license: MIT
   :recipe: /`digestiflow-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/digestiflow-cli/meta.yaml>`_

   


.. conda:package:: digestiflow-cli

   |downloads_digestiflow-cli| |docker_digestiflow-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.8-6</code>,  <code>0.5.8-5</code>,  <code>0.5.8-4</code>,  <code>0.5.8-3</code>,  <code>0.5.8-2</code>,  <code>0.5.8-1</code>,  <code>0.5.8-0</code>,  <code>0.5.7-0</code>,  <code>0.5.6-0</code>,  </span></summary>
      

      ``0.5.8-6``,  ``0.5.8-5``,  ``0.5.8-4``,  ``0.5.8-3``,  ``0.5.8-2``,  ``0.5.8-1``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends openssl: ``>=3.3.1,<4.0a0``
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

      mamba install digestiflow-cli

   and update with::

      mamba update digestiflow-cli

  To create a new environment, run::

      mamba create --name myenvname digestiflow-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/digestiflow-cli:<tag>

   (see `digestiflow-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_digestiflow-cli| image:: https://img.shields.io/conda/dn/bioconda/digestiflow-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/digestiflow-cli
   :alt:   (downloads)
.. |docker_digestiflow-cli| image:: https://quay.io/repository/biocontainers/digestiflow-cli/status
   :target: https://quay.io/repository/biocontainers/digestiflow-cli
.. _`digestiflow-cli/tags`: https://quay.io/repository/biocontainers/digestiflow-cli?tab=tags


.. raw:: html

    <script>
        var package = "digestiflow-cli";
        var versions = ["0.5.8","0.5.8","0.5.8","0.5.8","0.5.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/digestiflow-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/digestiflow-cli/README.html