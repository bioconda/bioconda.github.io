:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicmatrix'
.. highlight: bash

hicmatrix
=========

.. conda:recipe:: hicmatrix
   :replaces_section_title:
   :noindex:

   Library to manage Hi\-C matrices for HiCExplorer and pyGenomeTracks

   :homepage: https://github.com/deeptools/HiCMatrix
   :license: GPL3
   :recipe: /`hicmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicmatrix/meta.yaml>`_

   


.. conda:package:: hicmatrix

   |downloads_hicmatrix| |docker_hicmatrix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>17-0</code>,  <code>16-0</code>,  <code>15-0</code>,  <code>14-0</code>,  <code>13-0</code>,  <code>12-0</code>,  <code>11-0</code>,  <code>10-1</code>,  <code>10-0</code>,  </span></summary>
      

      ``17-0``,  ``16-0``,  ``15-0``,  ``14-0``,  ``13-0``,  ``12-0``,  ``11-0``,  ``10-1``,  ``10-0``,  ``9-0``,  ``8-0``,  ``7-0``,  ``6-1``,  ``6-0``,  ``5-0``,  ``4-0``,  ``3-0``,  ``2.2-1``,  ``2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends cooler: ``>=0.8.10``
   :depends intervaltree: ``>=3.0.*``
   :depends numpy: ``>=1.20``
   :depends pandas: ``>=0.25.*``
   :depends pytables: ``>=3.5.*``
   :depends python: ``>=3.7``
   :depends scipy: ``>=1.2.*``
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

      mamba install hicmatrix

   and update with::

      mamba update hicmatrix

  To create a new environment, run::

      mamba create --name myenvname hicmatrix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hicmatrix:<tag>

   (see `hicmatrix/tags`_ for valid values for ``<tag>``)


.. |downloads_hicmatrix| image:: https://img.shields.io/conda/dn/bioconda/hicmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/hicmatrix
   :alt:   (downloads)
.. |docker_hicmatrix| image:: https://quay.io/repository/biocontainers/hicmatrix/status
   :target: https://quay.io/repository/biocontainers/hicmatrix
.. _`hicmatrix/tags`: https://quay.io/repository/biocontainers/hicmatrix?tab=tags


.. raw:: html

    <script>
        var package = "hicmatrix";
        var versions = ["17","16","15","14","13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicmatrix/README.html