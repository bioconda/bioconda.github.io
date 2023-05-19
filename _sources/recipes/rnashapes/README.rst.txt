:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnashapes'
.. highlight: bash

rnashapes
=========

.. conda:recipe:: rnashapes
   :replaces_section_title:
   :noindex:

   RNAshape abstraction maps structures to a tree\-like domain of shapes\, retaining adjacency and nesting of structural features\, but disregarding helix lengths. Shape abstraction integrates well with dynamic programming algorithms\, and hence it can be applied during structure prediction rather than afterwards. This avoids exponential explosion and can still give us a non\-heuristic and complete account of properties of the molecule\'s folding space.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnashapes
   :license: GPLv3+
   :recipe: /`rnashapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: rnashapes

   |downloads_rnashapes| |docker_rnashapes|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.2-3</code>,  <code>3.3.2-2</code>,  <code>3.3.2-1</code>,  <code>3.3.2-0</code>,  <code>3.3.0-7</code>,  <code>3.3.0-6</code>,  <code>3.3.0-5</code>,  <code>3.3.0-4</code>,  <code>3.3.0-3</code>,  </span></summary>
      

      ``3.3.2-3``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3.0-7``,  ``3.3.0-6``,  ``3.3.0-5``,  ``3.3.0-4``,  ``3.3.0-3``,  ``3.3.0-0``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bellmans-gapc: ``>=2021.04.28``
   :depends libcxx: ``>=15.0.7``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnashapes

   and update with::

      conda update rnashapes

   or use the docker container::

      docker pull quay.io/biocontainers/rnashapes:<tag>

   (see `rnashapes/tags`_ for valid values for ``<tag>``)


.. |downloads_rnashapes| image:: https://img.shields.io/conda/dn/bioconda/rnashapes.svg?style=flat
   :target: https://anaconda.org/bioconda/rnashapes
   :alt:   (downloads)
.. |docker_rnashapes| image:: https://quay.io/repository/biocontainers/rnashapes/status
   :target: https://quay.io/repository/biocontainers/rnashapes
.. _`rnashapes/tags`: https://quay.io/repository/biocontainers/rnashapes?tab=tags


.. raw:: html

    <script>
        var package = "rnashapes";
        var versions = ["3.3.2","3.3.2","3.3.2","3.3.2","3.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnashapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnashapes/README.html