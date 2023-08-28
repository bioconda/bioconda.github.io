:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-variation-recall'
.. highlight: bash

bcbio-variation-recall
======================

.. conda:recipe:: bcbio-variation-recall
   :replaces_section_title:
   :noindex:

   Parallel merging\, squaring off and ensemble calling for genomic variants

   :homepage: https://github.com/chapmanb/bcbio.variation.recall
   :license: MIT
   :recipe: /`bcbio-variation-recall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-variation-recall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-variation-recall/meta.yaml>`_

   


.. conda:package:: bcbio-variation-recall

   |downloads_bcbio-variation-recall| |docker_bcbio-variation-recall|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.6-1</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.1.9-1</code>,  <code>0.1.8-1</code>,  </span></summary>
      

      ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.1.9-1``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: 
   :depends zlib: 
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

      mamba install bcbio-variation-recall

   and update with::

      mamba update bcbio-variation-recall

  To create a new environment, run::

      mamba create --name myenvname bcbio-variation-recall

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bcbio-variation-recall:<tag>

   (see `bcbio-variation-recall/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio-variation-recall| image:: https://img.shields.io/conda/dn/bioconda/bcbio-variation-recall.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-variation-recall
   :alt:   (downloads)
.. |docker_bcbio-variation-recall| image:: https://quay.io/repository/biocontainers/bcbio-variation-recall/status
   :target: https://quay.io/repository/biocontainers/bcbio-variation-recall
.. _`bcbio-variation-recall/tags`: https://quay.io/repository/biocontainers/bcbio-variation-recall?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-variation-recall";
        var versions = ["0.2.6","0.2.6","0.2.5","0.2.4","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-variation-recall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-variation-recall/README.html