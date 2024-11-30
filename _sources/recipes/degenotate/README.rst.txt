:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'degenotate'
.. highlight: bash

degenotate
==========

.. conda:recipe:: degenotate
   :replaces_section_title:
   :noindex:

   Annotation of degeneracy of sites in coding regions of a genome

   :homepage: https://github.com/harvardinformatics/degenotate
   :license: MIT
   :recipe: /`degenotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/degenotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/degenotate/meta.yaml>`_

   Annotation of degeneracy of sites in coding regions of a genome


.. conda:package:: degenotate

   |downloads_degenotate| |docker_degenotate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.3-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends networkx: 
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends scipy: 
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

      mamba install degenotate

   and update with::

      mamba update degenotate

  To create a new environment, run::

      mamba create --name myenvname degenotate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/degenotate:<tag>

   (see `degenotate/tags`_ for valid values for ``<tag>``)


.. |downloads_degenotate| image:: https://img.shields.io/conda/dn/bioconda/degenotate.svg?style=flat
   :target: https://anaconda.org/bioconda/degenotate
   :alt:   (downloads)
.. |docker_degenotate| image:: https://quay.io/repository/biocontainers/degenotate/status
   :target: https://quay.io/repository/biocontainers/degenotate
.. _`degenotate/tags`: https://quay.io/repository/biocontainers/degenotate?tab=tags


.. raw:: html

    <script>
        var package = "degenotate";
        var versions = ["1.3","1.2.4","1.2.3","1.2.2","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/degenotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/degenotate/README.html