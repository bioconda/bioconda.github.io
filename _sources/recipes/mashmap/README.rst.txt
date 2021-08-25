:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mashmap'
.. highlight: bash

mashmap
=======

.. conda:recipe:: mashmap
   :replaces_section_title:
   :noindex:

   A fast approximate aligner for long DNA sequences

   :homepage: https://github.com/marbl/MashMap
   :license: Custom
   :recipe: /`mashmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashmap/meta.yaml>`_

   


.. conda:package:: mashmap

   |downloads_mashmap| |docker_mashmap|

   :versions:
      
      

      ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends openblas: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mashmap

   and update with::

      conda update mashmap

   or use the docker container::

      docker pull quay.io/biocontainers/mashmap:<tag>

   (see `mashmap/tags`_ for valid values for ``<tag>``)


.. |downloads_mashmap| image:: https://img.shields.io/conda/dn/bioconda/mashmap.svg?style=flat
   :target: https://anaconda.org/bioconda/mashmap
   :alt:   (downloads)
.. |docker_mashmap| image:: https://quay.io/repository/biocontainers/mashmap/status
   :target: https://quay.io/repository/biocontainers/mashmap
.. _`mashmap/tags`: https://quay.io/repository/biocontainers/mashmap?tab=tags


.. raw:: html

    <script>
        var package = "mashmap";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mashmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mashmap/README.html