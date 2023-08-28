:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypeflow'
.. highlight: bash

pypeflow
========

.. conda:recipe:: pypeflow
   :replaces_section_title:
   :noindex:

   Light weight and reusable make \/ flow data process library written in Python

   :homepage: https://github.com/PacificBiosciences/pypeFLOW
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`pypeflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypeflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypeflow/meta.yaml>`_

   


.. conda:package:: pypeflow

   |downloads_pypeflow| |docker_pypeflow|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>2.1.1-0</code>,  <code>2.0.4-0</code>,  <code>2.0.2-1</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``2.2.0-0``,  ``2.1.1-0``,  ``2.0.4-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends future: ``>=0.16.0``
   :depends networkx: ``>=1.7,<=1.11``
   :depends python: ``<3``
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

      mamba install pypeflow

   and update with::

      mamba update pypeflow

  To create a new environment, run::

      mamba create --name myenvname pypeflow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypeflow:<tag>

   (see `pypeflow/tags`_ for valid values for ``<tag>``)


.. |downloads_pypeflow| image:: https://img.shields.io/conda/dn/bioconda/pypeflow.svg?style=flat
   :target: https://anaconda.org/bioconda/pypeflow
   :alt:   (downloads)
.. |docker_pypeflow| image:: https://quay.io/repository/biocontainers/pypeflow/status
   :target: https://quay.io/repository/biocontainers/pypeflow
.. _`pypeflow/tags`: https://quay.io/repository/biocontainers/pypeflow?tab=tags


.. raw:: html

    <script>
        var package = "pypeflow";
        var versions = ["2.2.0","2.1.1","2.0.4","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypeflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypeflow/README.html