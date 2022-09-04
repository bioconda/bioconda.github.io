:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strobealign'
.. highlight: bash

strobealign
===========

.. conda:recipe:: strobealign
   :replaces_section_title:
   :noindex:

   Align short reads using dynamic seed size with strobemers

   :homepage: https://github.com/ksahlin/StrobeAlign
   :license: GPL
   :recipe: /`strobealign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobealign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strobealign/meta.yaml>`_

   


.. conda:package:: strobealign

   |downloads_strobealign| |docker_strobealign|

   :versions:
      
      

      ``0.7.1-1``,  ``0.7.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strobealign

   and update with::

      conda update strobealign

   or use the docker container::

      docker pull quay.io/biocontainers/strobealign:<tag>

   (see `strobealign/tags`_ for valid values for ``<tag>``)


.. |downloads_strobealign| image:: https://img.shields.io/conda/dn/bioconda/strobealign.svg?style=flat
   :target: https://anaconda.org/bioconda/strobealign
   :alt:   (downloads)
.. |docker_strobealign| image:: https://quay.io/repository/biocontainers/strobealign/status
   :target: https://quay.io/repository/biocontainers/strobealign
.. _`strobealign/tags`: https://quay.io/repository/biocontainers/strobealign?tab=tags


.. raw:: html

    <script>
        var package = "strobealign";
        var versions = ["0.7.1","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strobealign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strobealign/README.html