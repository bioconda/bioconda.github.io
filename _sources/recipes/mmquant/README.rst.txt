:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmquant'
.. highlight: bash

mmquant
=======

.. conda:recipe:: mmquant
   :replaces_section_title:
   :noindex:

   RNA\-Seq quantification tool\, with special handling on multi\-mapping reads.

   :homepage: https://bitbucket.org/mzytnicki/multi-mapping-counter/
   :license: GPL3/LGPL3
   :recipe: /`mmquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmquant/meta.yaml>`_

   


.. conda:package:: mmquant

   |downloads_mmquant| |docker_mmquant|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends libcxx: ``>=12.0.1``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends make: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mmquant

   and update with::

      conda update mmquant

   or use the docker container::

      docker pull quay.io/biocontainers/mmquant:<tag>

   (see `mmquant/tags`_ for valid values for ``<tag>``)


.. |downloads_mmquant| image:: https://img.shields.io/conda/dn/bioconda/mmquant.svg?style=flat
   :target: https://anaconda.org/bioconda/mmquant
   :alt:   (downloads)
.. |docker_mmquant| image:: https://quay.io/repository/biocontainers/mmquant/status
   :target: https://quay.io/repository/biocontainers/mmquant
.. _`mmquant/tags`: https://quay.io/repository/biocontainers/mmquant?tab=tags


.. raw:: html

    <script>
        var package = "mmquant";
        var versions = ["1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmquant/README.html