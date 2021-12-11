:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'veryfasttree'
.. highlight: bash

veryfasttree
============

.. conda:recipe:: veryfasttree
   :replaces_section_title:
   :noindex:

   VeryFastTree \-\- speeding up the estimation of phylogenies for large alignments through parallelization and vectorization strategies

   :homepage: https://github.com/citiususc/veryfasttree
   :license: GNU v3
   :recipe: /`veryfasttree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/veryfasttree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/veryfasttree/meta.yaml>`_

   VeryFastTree is a highly\-tuned implementation of the FastTree\-2 tool that takes advantage of parallelization and vectorization strategies 
   to speed up the inference of phylogenies for huge alignments.



.. conda:package:: veryfasttree

   |downloads_veryfasttree| |docker_veryfasttree|

   :versions:
      
      

      ``3.1.0-0``,  ``3.0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgomp: 
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install veryfasttree

   and update with::

      conda update veryfasttree

   or use the docker container::

      docker pull quay.io/biocontainers/veryfasttree:<tag>

   (see `veryfasttree/tags`_ for valid values for ``<tag>``)


.. |downloads_veryfasttree| image:: https://img.shields.io/conda/dn/bioconda/veryfasttree.svg?style=flat
   :target: https://anaconda.org/bioconda/veryfasttree
   :alt:   (downloads)
.. |docker_veryfasttree| image:: https://quay.io/repository/biocontainers/veryfasttree/status
   :target: https://quay.io/repository/biocontainers/veryfasttree
.. _`veryfasttree/tags`: https://quay.io/repository/biocontainers/veryfasttree?tab=tags


.. raw:: html

    <script>
        var package = "veryfasttree";
        var versions = ["3.1.0","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/veryfasttree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/veryfasttree/README.html