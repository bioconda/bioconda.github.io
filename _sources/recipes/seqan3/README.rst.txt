:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqan3'
.. highlight: bash

seqan3
======

.. conda:recipe:: seqan3
   :replaces_section_title:
   :noindex:

   SeqAn3 is the new version of the popular SeqAn template library for the analysis of biological sequences.

   :homepage: https://www.seqan.de
   :documentation: https://docs.seqan.de/seqan/3-master-user/
   
   :developer docs: https://github.com/seqan/seqan3
   :license: BSD / BSD-3-Clause
   :recipe: /`seqan3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan3/meta.yaml>`_

   


.. conda:package:: seqan3

   |downloads_seqan3| |docker_seqan3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.0-1</code>,  <code>3.3.0-0</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-1</code>,  </span></summary>
      

      ``3.3.0-1``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-1``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: 
   :depends zlib: 
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

      mamba install seqan3

   and update with::

      mamba update seqan3

  To create a new environment, run::

      mamba create --name myenvname seqan3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seqan3:<tag>

   (see `seqan3/tags`_ for valid values for ``<tag>``)


.. |downloads_seqan3| image:: https://img.shields.io/conda/dn/bioconda/seqan3.svg?style=flat
   :target: https://anaconda.org/bioconda/seqan3
   :alt:   (downloads)
.. |docker_seqan3| image:: https://quay.io/repository/biocontainers/seqan3/status
   :target: https://quay.io/repository/biocontainers/seqan3
.. _`seqan3/tags`: https://quay.io/repository/biocontainers/seqan3?tab=tags


.. raw:: html

    <script>
        var package = "seqan3";
        var versions = ["3.3.0","3.3.0","3.2.0","3.1.0","3.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan3/README.html