:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanolyse'
.. highlight: bash

nanolyse
========

.. conda:recipe:: nanolyse
   :replaces_section_title:
   :noindex:

   Removing lambda DNA control reads from fastq dataset

   :homepage: https://github.com/wdecoster/NanoLyse
   :license: MIT / MIT
   :recipe: /`nanolyse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanolyse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanolyse/meta.yaml>`_

   


.. conda:package:: nanolyse

   |downloads_nanolyse| |docker_nanolyse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.1-0``,  ``0.4.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends mappy: ``>=2.2``
   :depends python: ``>=3``
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

      mamba install nanolyse

   and update with::

      mamba update nanolyse

  To create a new environment, run::

      mamba create --name myenvname nanolyse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanolyse:<tag>

   (see `nanolyse/tags`_ for valid values for ``<tag>``)


.. |downloads_nanolyse| image:: https://img.shields.io/conda/dn/bioconda/nanolyse.svg?style=flat
   :target: https://anaconda.org/bioconda/nanolyse
   :alt:   (downloads)
.. |docker_nanolyse| image:: https://quay.io/repository/biocontainers/nanolyse/status
   :target: https://quay.io/repository/biocontainers/nanolyse
.. _`nanolyse/tags`: https://quay.io/repository/biocontainers/nanolyse?tab=tags


.. raw:: html

    <script>
        var package = "nanolyse";
        var versions = ["1.2.1","1.2.0","1.1.4","1.1.3","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanolyse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanolyse/README.html