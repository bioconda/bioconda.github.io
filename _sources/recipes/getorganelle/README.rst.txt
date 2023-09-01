:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'getorganelle'
.. highlight: bash

getorganelle
============

.. conda:recipe:: getorganelle
   :replaces_section_title:
   :noindex:

   Get organelle genomes from genome skimming data

   :homepage: http://github.com/Kinggerm/GetOrganelle
   :license: GPL3
   :recipe: /`getorganelle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/getorganelle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/getorganelle/meta.yaml>`_

   


.. conda:package:: getorganelle

   |downloads_getorganelle| |docker_getorganelle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.7.0-0</code>,  <code>1.7.6.1-0</code>,  <code>1.7.5.3-0</code>,  <code>1.7.5.0-1</code>,  <code>1.7.5.0-0</code>,  <code>1.7.4.1-0</code>,  <code>1.7.4-0</code>,  <code>1.7.3.5-0</code>,  <code>1.7.3.4-0</code>,  </span></summary>
      

      ``1.7.7.0-0``,  ``1.7.6.1-0``,  ``1.7.5.3-0``,  ``1.7.5.0-1``,  ``1.7.5.0-0``,  ``1.7.4.1-0``,  ``1.7.4-0``,  ``1.7.3.5-0``,  ``1.7.3.4-0``,  ``1.7.3.2-0``,  ``1.7.3.1-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.4-1``,  ``1.6.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: ``>=2.3``
   :depends bowtie2: ``>=2.3``
   :depends numpy: ``>=1.16.4``
   :depends perl: 
   :depends pigz: 
   :depends python: 
   :depends requests: 
   :depends scipy: ``>=1.3.0``
   :depends spades: ``>=3.9``
   :depends sympy: ``>=1.4``
   :depends tbb: ``<=2020.2``
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

      mamba install getorganelle

   and update with::

      mamba update getorganelle

  To create a new environment, run::

      mamba create --name myenvname getorganelle

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/getorganelle:<tag>

   (see `getorganelle/tags`_ for valid values for ``<tag>``)


.. |downloads_getorganelle| image:: https://img.shields.io/conda/dn/bioconda/getorganelle.svg?style=flat
   :target: https://anaconda.org/bioconda/getorganelle
   :alt:   (downloads)
.. |docker_getorganelle| image:: https://quay.io/repository/biocontainers/getorganelle/status
   :target: https://quay.io/repository/biocontainers/getorganelle
.. _`getorganelle/tags`: https://quay.io/repository/biocontainers/getorganelle?tab=tags


.. raw:: html

    <script>
        var package = "getorganelle";
        var versions = ["1.7.7.0","1.7.6.1","1.7.5.3","1.7.5.0","1.7.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/getorganelle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/getorganelle/README.html