:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ska2'
.. highlight: bash

ska2
====

.. conda:recipe:: ska2
   :replaces_section_title:
   :noindex:

   SKA \(Split Kmer Analysis\) version 2

   :homepage: https://github.com/bacpop/ska.rust
   :license: APACHE / Apache-2.0
   :recipe: /`ska2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ska2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ska2/meta.yaml>`_

   


.. conda:package:: ska2

   |downloads_ska2| |docker_ska2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.4-0</code>,  </span></summary>
      

      ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install ska2

   and update with::

      mamba update ska2

  To create a new environment, run::

      mamba create --name myenvname ska2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ska2:<tag>

   (see `ska2/tags`_ for valid values for ``<tag>``)


.. |downloads_ska2| image:: https://img.shields.io/conda/dn/bioconda/ska2.svg?style=flat
   :target: https://anaconda.org/bioconda/ska2
   :alt:   (downloads)
.. |docker_ska2| image:: https://quay.io/repository/biocontainers/ska2/status
   :target: https://quay.io/repository/biocontainers/ska2
.. _`ska2/tags`: https://quay.io/repository/biocontainers/ska2?tab=tags


.. raw:: html

    <script>
        var package = "ska2";
        var versions = ["0.3.7","0.3.6","0.3.5","0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ska2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ska2/README.html