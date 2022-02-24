:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minigraph'
.. highlight: bash

minigraph
=========

.. conda:recipe:: minigraph
   :replaces_section_title:
   :noindex:

   Proof\-of\-concept seq\-to\-graph mapper and graph generator

   :homepage: https://github.com/lh3/minigraph
   :license: MIT
   :recipe: /`minigraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minigraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minigraph/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02168-z`

   


.. conda:package:: minigraph

   |downloads_minigraph| |docker_minigraph|

   :versions:
      
      

      ``0.16-0``,  ``0.15-1``,  ``0.15-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install minigraph

   and update with::

      conda update minigraph

   or use the docker container::

      docker pull quay.io/biocontainers/minigraph:<tag>

   (see `minigraph/tags`_ for valid values for ``<tag>``)


.. |downloads_minigraph| image:: https://img.shields.io/conda/dn/bioconda/minigraph.svg?style=flat
   :target: https://anaconda.org/bioconda/minigraph
   :alt:   (downloads)
.. |docker_minigraph| image:: https://quay.io/repository/biocontainers/minigraph/status
   :target: https://quay.io/repository/biocontainers/minigraph
.. _`minigraph/tags`: https://quay.io/repository/biocontainers/minigraph?tab=tags


.. raw:: html

    <script>
        var package = "minigraph";
        var versions = ["0.16","0.15","0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minigraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minigraph/README.html