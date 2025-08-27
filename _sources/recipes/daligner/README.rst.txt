:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'daligner'
.. highlight: bash

daligner
========

.. conda:recipe:: daligner
   :replaces_section_title:
   :noindex:

   DALIGNER\: Find all significant local alignments between reads

   :homepage: https://github.com/thegenemyers/DALIGNER
   :license: Custom
   :recipe: /`daligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/daligner/meta.yaml>`_

   


.. conda:package:: daligner

   |downloads_daligner| |docker_daligner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.20230620-1</code>,  <code>1.0.20230620-0</code>,  <code>1.0.20200322-4</code>,  <code>1.0.20200322-3</code>,  <code>1.0.20200322-2</code>,  <code>1.0.20200322-1</code>,  <code>1.0.20200322-0</code>,  <code>1.0-0</code>,  <code>1.0p2-1</code>,  </span></summary>
      

      ``1.0.20230620-1``,  ``1.0.20230620-0``,  ``1.0.20200322-4``,  ``1.0.20200322-3``,  ``1.0.20200322-2``,  ``1.0.20200322-1``,  ``1.0.20200322-0``,  ``1.0-0``,  ``1.0p2-1``,  ``1.0p2-0``,  ``1.0p1-2``,  ``1.0p1-1``,  ``1.0p1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install daligner

   and update with::

      mamba update daligner

  To create a new environment, run::

      mamba create --name myenvname daligner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/daligner:<tag>

   (see `daligner/tags`_ for valid values for ``<tag>``)


.. |downloads_daligner| image:: https://img.shields.io/conda/dn/bioconda/daligner.svg?style=flat
   :target: https://anaconda.org/bioconda/daligner
   :alt:   (downloads)
.. |docker_daligner| image:: https://quay.io/repository/biocontainers/daligner/status
   :target: https://quay.io/repository/biocontainers/daligner
.. _`daligner/tags`: https://quay.io/repository/biocontainers/daligner?tab=tags


.. raw:: html

    <script>
        var package = "daligner";
        var versions = ["1.0.20230620","1.0.20230620","1.0.20200322","1.0.20200322","1.0.20200322"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/daligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/daligner/README.html