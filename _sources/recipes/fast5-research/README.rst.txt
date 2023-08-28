:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5-research'
.. highlight: bash

fast5-research
==============

.. conda:recipe:: fast5-research
   :replaces_section_title:
   :noindex:

   ONT Research fast5 read\/write package

   :homepage: https://github.com/nanoporetech/fast5_research
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`fast5-research <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research/meta.yaml>`_

   


.. conda:package:: fast5-research

   |downloads_fast5-research| |docker_fast5-research|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.22-0</code>,  <code>1.2.20-1</code>,  <code>1.2.20-0</code>,  <code>1.2.19-0</code>,  <code>1.2.18-0</code>,  <code>1.2.17-0</code>,  <code>1.2.15-0</code>,  <code>1.2.11-0</code>,  <code>1.2.10-0</code>,  </span></summary>
      

      ``1.2.22-0``,  ``1.2.20-1``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.15-0``,  ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.8-0``,  ``1.0.9-1``,  ``1.0.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends futures: 
   :depends h5py: ``<2.9.0``
   :depends numpy: ``>=1.14``
   :depends progressbar2: 
   :depends python: 
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

      mamba install fast5-research

   and update with::

      mamba update fast5-research

  To create a new environment, run::

      mamba create --name myenvname fast5-research

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fast5-research:<tag>

   (see `fast5-research/tags`_ for valid values for ``<tag>``)


.. |downloads_fast5-research| image:: https://img.shields.io/conda/dn/bioconda/fast5-research.svg?style=flat
   :target: https://anaconda.org/bioconda/fast5-research
   :alt:   (downloads)
.. |docker_fast5-research| image:: https://quay.io/repository/biocontainers/fast5-research/status
   :target: https://quay.io/repository/biocontainers/fast5-research
.. _`fast5-research/tags`: https://quay.io/repository/biocontainers/fast5-research?tab=tags


.. raw:: html

    <script>
        var package = "fast5-research";
        var versions = ["1.2.22","1.2.20","1.2.20","1.2.19","1.2.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5-research/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5-research/README.html