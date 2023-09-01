:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sketchy'
.. highlight: bash

sketchy
=======

.. conda:recipe:: sketchy
   :replaces_section_title:
   :noindex:

   Real\-time lineage hashing and genotyping of bacterial pathogens

   :homepage: https://github.com/esteinig/sketchy
   :license: MIT
   :recipe: /`sketchy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sketchy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sketchy/meta.yaml>`_

   


.. conda:package:: sketchy

   |downloads_sketchy| |docker_sketchy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-2</code>,  <code>0.6.0-1</code>,  <code>0.6.0-0</code>,  <code>0.4.5-2</code>,  <code>0.4.5-1</code>,  <code>0.4.5-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.3.1-0</code>,  </span></summary>
      

      ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.4.5-2``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3.1-0``,  ``0.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install sketchy

   and update with::

      mamba update sketchy

  To create a new environment, run::

      mamba create --name myenvname sketchy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sketchy:<tag>

   (see `sketchy/tags`_ for valid values for ``<tag>``)


.. |downloads_sketchy| image:: https://img.shields.io/conda/dn/bioconda/sketchy.svg?style=flat
   :target: https://anaconda.org/bioconda/sketchy
   :alt:   (downloads)
.. |docker_sketchy| image:: https://quay.io/repository/biocontainers/sketchy/status
   :target: https://quay.io/repository/biocontainers/sketchy
.. _`sketchy/tags`: https://quay.io/repository/biocontainers/sketchy?tab=tags


.. raw:: html

    <script>
        var package = "sketchy";
        var versions = ["0.6.0","0.6.0","0.6.0","0.4.5","0.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sketchy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sketchy/README.html