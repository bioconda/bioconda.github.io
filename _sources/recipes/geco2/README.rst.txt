:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geco2'
.. highlight: bash

geco2
=====

.. conda:recipe:: geco2
   :replaces_section_title:
   :noindex:

   A fast tool to compress DNA sequences

   :homepage: https://github.com/cobilab/geco2
   :license: GPL / GPL3
   :recipe: /`geco2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geco2/meta.yaml>`_

   


.. conda:package:: geco2

   |downloads_geco2| |docker_geco2|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install geco2

   and update with::

      conda update geco2

   or use the docker container::

      docker pull quay.io/biocontainers/geco2:<tag>

   (see `geco2/tags`_ for valid values for ``<tag>``)


.. |downloads_geco2| image:: https://img.shields.io/conda/dn/bioconda/geco2.svg?style=flat
   :target: https://anaconda.org/bioconda/geco2
   :alt:   (downloads)
.. |docker_geco2| image:: https://quay.io/repository/biocontainers/geco2/status
   :target: https://quay.io/repository/biocontainers/geco2
.. _`geco2/tags`: https://quay.io/repository/biocontainers/geco2?tab=tags


.. raw:: html

    <script>
        var package = "geco2";
        var versions = ["1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geco2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geco2/README.html