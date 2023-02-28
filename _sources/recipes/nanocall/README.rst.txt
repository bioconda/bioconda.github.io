:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanocall'
.. highlight: bash

nanocall
========

.. conda:recipe:: nanocall
   :replaces_section_title:
   :noindex:

   An Oxford Nanopore Basecaller

   :homepage: https://github.com/mateidavid/nanocall
   :license: MIT
   :recipe: /`nanocall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanocall/meta.yaml>`_

   


.. conda:package:: nanocall

   |downloads_nanocall| |docker_nanocall|

   :versions:
      
      

      ``v0.7.4-4``,  ``v0.7.4-3``,  ``v0.7.4-2``,  ``v0.7.4-1``,  ``v0.7.4-0``,  ``v0.6.14-0``,  ``v0.6.13-0``,  ``v0.6.5-0``

      

   
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanocall

   and update with::

      conda update nanocall

   or use the docker container::

      docker pull quay.io/biocontainers/nanocall:<tag>

   (see `nanocall/tags`_ for valid values for ``<tag>``)


.. |downloads_nanocall| image:: https://img.shields.io/conda/dn/bioconda/nanocall.svg?style=flat
   :target: https://anaconda.org/bioconda/nanocall
   :alt:   (downloads)
.. |docker_nanocall| image:: https://quay.io/repository/biocontainers/nanocall/status
   :target: https://quay.io/repository/biocontainers/nanocall
.. _`nanocall/tags`: https://quay.io/repository/biocontainers/nanocall?tab=tags


.. raw:: html

    <script>
        var package = "nanocall";
        var versions = ["v0.7.4","v0.7.4","v0.7.4","v0.7.4","v0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanocall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanocall/README.html