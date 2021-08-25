:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mp3treesim'
.. highlight: bash

mp3treesim
==========

.. conda:recipe:: mp3treesim
   :replaces_section_title:
   :noindex:

   Triplet\-based similarity score for fully multi\-labeled trees with poly\-occurring labels

   :homepage: https://algolab.github.io/mp3treesim/
   :license: MIT
   :recipe: /`mp3treesim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp3treesim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mp3treesim/meta.yaml>`_

   


.. conda:package:: mp3treesim

   |downloads_mp3treesim| |docker_mp3treesim|

   :versions:
      
      

      ``1.0.6-0``,  ``1.0.1-0``

      

   
   :depends networkx: ``>=2.4``
   :depends numpy: ``>=1.18.1``
   :depends pygraphviz: ``>=1.5``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mp3treesim

   and update with::

      conda update mp3treesim

   or use the docker container::

      docker pull quay.io/biocontainers/mp3treesim:<tag>

   (see `mp3treesim/tags`_ for valid values for ``<tag>``)


.. |downloads_mp3treesim| image:: https://img.shields.io/conda/dn/bioconda/mp3treesim.svg?style=flat
   :target: https://anaconda.org/bioconda/mp3treesim
   :alt:   (downloads)
.. |docker_mp3treesim| image:: https://quay.io/repository/biocontainers/mp3treesim/status
   :target: https://quay.io/repository/biocontainers/mp3treesim
.. _`mp3treesim/tags`: https://quay.io/repository/biocontainers/mp3treesim?tab=tags


.. raw:: html

    <script>
        var package = "mp3treesim";
        var versions = ["1.0.6","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mp3treesim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mp3treesim/README.html