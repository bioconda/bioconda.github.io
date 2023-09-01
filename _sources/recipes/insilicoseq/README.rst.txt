:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'insilicoseq'
.. highlight: bash

insilicoseq
===========

.. conda:recipe:: insilicoseq
   :replaces_section_title:
   :noindex:

   A sequencing simulator.

   :homepage: https://github.com/HadrienG/InSilicoSeq
   :license: MIT / MIT
   :recipe: /`insilicoseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicoseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/insilicoseq/meta.yaml>`_

   


.. conda:package:: insilicoseq

   |downloads_insilicoseq| |docker_insilicoseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-0</code>,  <code>1.5.4-1</code>,  <code>1.5.4-0</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.6-1</code>,  </span></summary>
      

      ``1.6.0-0``,  ``1.5.4-1``,  ``1.5.4-0``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.6-1``,  ``1.3.5-1``,  ``1.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.79``
   :depends future: 
   :depends joblib: 
   :depends numpy: 
   :depends pysam: ``>=0.15.1``
   :depends python: 
   :depends requests: 
   :depends scipy: 
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

      mamba install insilicoseq

   and update with::

      mamba update insilicoseq

  To create a new environment, run::

      mamba create --name myenvname insilicoseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/insilicoseq:<tag>

   (see `insilicoseq/tags`_ for valid values for ``<tag>``)


.. |downloads_insilicoseq| image:: https://img.shields.io/conda/dn/bioconda/insilicoseq.svg?style=flat
   :target: https://anaconda.org/bioconda/insilicoseq
   :alt:   (downloads)
.. |docker_insilicoseq| image:: https://quay.io/repository/biocontainers/insilicoseq/status
   :target: https://quay.io/repository/biocontainers/insilicoseq
.. _`insilicoseq/tags`: https://quay.io/repository/biocontainers/insilicoseq?tab=tags


.. raw:: html

    <script>
        var package = "insilicoseq";
        var versions = ["1.6.0","1.5.4","1.5.4","1.5.3","1.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/insilicoseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/insilicoseq/README.html