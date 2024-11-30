:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flaimapper'
.. highlight: bash

flaimapper
==========

.. conda:recipe:: flaimapper
   :replaces_section_title:
   :noindex:

   FlaiMapper\: Detecting small ncRNA derived fragments in small RNA\-Seq data

   :homepage: https://github.com/yhoogstrate/flaimapper/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`flaimapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flaimapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flaimapper/meta.yaml>`_

   


.. conda:package:: flaimapper

   |downloads_flaimapper| |docker_flaimapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-2</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.5.0-1</code>,  <code>2.5.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.3.4-0</code>,  <code>2.3.3-0</code>,  </span></summary>
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.3.4-0``,  ``2.3.3-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends pysam: ``>=0.14.1``
   :depends python: ``>=3``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install flaimapper

   and update with::

      mamba update flaimapper

  To create a new environment, run::

      mamba create --name myenvname flaimapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flaimapper:<tag>

   (see `flaimapper/tags`_ for valid values for ``<tag>``)


.. |downloads_flaimapper| image:: https://img.shields.io/conda/dn/bioconda/flaimapper.svg?style=flat
   :target: https://anaconda.org/bioconda/flaimapper
   :alt:   (downloads)
.. |docker_flaimapper| image:: https://quay.io/repository/biocontainers/flaimapper/status
   :target: https://quay.io/repository/biocontainers/flaimapper
.. _`flaimapper/tags`: https://quay.io/repository/biocontainers/flaimapper?tab=tags


.. raw:: html

    <script>
        var package = "flaimapper";
        var versions = ["3.0.0","3.0.0","3.0.0","2.5.0","2.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flaimapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flaimapper/README.html