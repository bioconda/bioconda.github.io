:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cassiopee'
.. highlight: bash

cassiopee
=========

.. conda:recipe:: cassiopee
   :replaces_section_title:
   :noindex:

   scan an input genomic sequence \(dna\/rna\/protein\) and search for a subsequence with exact match or allowing substitutions \(Hamming distance\) and\/or insertion\/deletions

   :homepage: https://github.com/osallou/cassiopee-c
   :license: GPL-3+
   :recipe: /`cassiopee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassiopee/meta.yaml>`_

   


.. conda:package:: cassiopee

   |downloads_cassiopee| |docker_cassiopee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-7</code>,  <code>1.0.9-6</code>,  <code>1.0.9-5</code>,  <code>1.0.9-4</code>,  <code>1.0.9-3</code>,  <code>1.0.9-2</code>,  <code>1.0.9-1</code>,  <code>1.0.9-0</code>,  <code>1.0.5-2</code>,  </span></summary>
      

      ``1.0.9-7``,  ``1.0.9-6``,  ``1.0.9-5``,  ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends glog: ``>=0.6.0,<0.7.0a0``
   :depends icu: ``>=73.2,<74.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install cassiopee

   and update with::

      mamba update cassiopee

  To create a new environment, run::

      mamba create --name myenvname cassiopee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cassiopee:<tag>

   (see `cassiopee/tags`_ for valid values for ``<tag>``)


.. |downloads_cassiopee| image:: https://img.shields.io/conda/dn/bioconda/cassiopee.svg?style=flat
   :target: https://anaconda.org/bioconda/cassiopee
   :alt:   (downloads)
.. |docker_cassiopee| image:: https://quay.io/repository/biocontainers/cassiopee/status
   :target: https://quay.io/repository/biocontainers/cassiopee
.. _`cassiopee/tags`: https://quay.io/repository/biocontainers/cassiopee?tab=tags


.. raw:: html

    <script>
        var package = "cassiopee";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassiopee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassiopee/README.html