:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treebest'
.. highlight: bash

treebest
========

.. conda:recipe:: treebest
   :replaces_section_title:
   :noindex:

   TreeBeST\: Tree Building guided by Species Tree\, used in the Ensembl Compara pipeline.

   :homepage: http://treesoft.sourceforge.net/treebest.shtml
   :license: GPLv2
   :recipe: /`treebest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treebest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treebest/meta.yaml>`_

   


.. conda:package:: treebest

   |downloads_treebest| |docker_treebest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.2.post1-5</code>,  <code>1.9.2.post1-4</code>,  <code>1.9.2.post1-3</code>,  <code>1.9.2.post1-2</code>,  <code>1.9.2.post1-1</code>,  <code>1.9.2.post1-0</code>,  <code>1.9.2.post0-0</code>,  <code>1.9.2_ep78-2</code>,  <code>1.9.2_ep78-1</code>,  </span></summary>
      

      ``1.9.2.post1-5``,  ``1.9.2.post1-4``,  ``1.9.2.post1-3``,  ``1.9.2.post1-2``,  ``1.9.2.post1-1``,  ``1.9.2.post1-0``,  ``1.9.2.post0-0``,  ``1.9.2_ep78-2``,  ``1.9.2_ep78-1``,  ``1.9.2_ep78-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install treebest

   and update with::

      conda update treebest

   or use the docker container::

      docker pull quay.io/biocontainers/treebest:<tag>

   (see `treebest/tags`_ for valid values for ``<tag>``)


.. |downloads_treebest| image:: https://img.shields.io/conda/dn/bioconda/treebest.svg?style=flat
   :target: https://anaconda.org/bioconda/treebest
   :alt:   (downloads)
.. |docker_treebest| image:: https://quay.io/repository/biocontainers/treebest/status
   :target: https://quay.io/repository/biocontainers/treebest
.. _`treebest/tags`: https://quay.io/repository/biocontainers/treebest?tab=tags


.. raw:: html

    <script>
        var package = "treebest";
        var versions = ["1.9.2.post1","1.9.2.post1","1.9.2.post1","1.9.2.post1","1.9.2.post1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treebest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treebest/README.html