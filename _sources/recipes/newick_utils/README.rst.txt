:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'newick_utils'
.. highlight: bash

newick_utils
============

.. conda:recipe:: newick_utils
   :replaces_section_title:
   :noindex:

   The Newick Utilities are a suite of Unix shell tools for processing phylogenetic trees. We distribute the package under the BSD License. Functions include re\-rooting\, extracting subtrees\, trimming\, pruning\, condensing\, drawing \(ASCII graphics or SVG\).

   :homepage: http://cegg.unige.ch/newick_utils
   :license: BSD License
   :recipe: /`newick_utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newick_utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/newick_utils/meta.yaml>`_

   


.. conda:package:: newick_utils

   |downloads_newick_utils| |docker_newick_utils|

   :versions:
      
      

      ``1.6-7``,  ``1.6-6``,  ``1.6-5``,  ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libxml2: ``2.9.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install newick_utils

   and update with::

      conda update newick_utils

   or use the docker container::

      docker pull quay.io/biocontainers/newick_utils:<tag>

   (see `newick_utils/tags`_ for valid values for ``<tag>``)


.. |downloads_newick_utils| image:: https://img.shields.io/conda/dn/bioconda/newick_utils.svg?style=flat
   :target: https://anaconda.org/bioconda/newick_utils
   :alt:   (downloads)
.. |docker_newick_utils| image:: https://quay.io/repository/biocontainers/newick_utils/status
   :target: https://quay.io/repository/biocontainers/newick_utils
.. _`newick_utils/tags`: https://quay.io/repository/biocontainers/newick_utils?tab=tags


.. raw:: html

    <script>
        var package = "newick_utils";
        var versions = ["1.6","1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/newick_utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/newick_utils/README.html