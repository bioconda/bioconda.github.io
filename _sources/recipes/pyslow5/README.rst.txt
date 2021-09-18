:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyslow5'
.. highlight: bash

pyslow5
=======

.. conda:recipe:: pyslow5
   :replaces_section_title:
   :noindex:

   slow5lib Python binding

   :homepage: https://github.com/hasindu2008/slow5lib
   :license: MIT
   :recipe: /`pyslow5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyslow5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyslow5/meta.yaml>`_

   


.. conda:package:: pyslow5

   |downloads_pyslow5| |docker_pyslow5|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyslow5

   and update with::

      conda update pyslow5

   or use the docker container::

      docker pull quay.io/biocontainers/pyslow5:<tag>

   (see `pyslow5/tags`_ for valid values for ``<tag>``)


.. |downloads_pyslow5| image:: https://img.shields.io/conda/dn/bioconda/pyslow5.svg?style=flat
   :target: https://anaconda.org/bioconda/pyslow5
   :alt:   (downloads)
.. |docker_pyslow5| image:: https://quay.io/repository/biocontainers/pyslow5/status
   :target: https://quay.io/repository/biocontainers/pyslow5
.. _`pyslow5/tags`: https://quay.io/repository/biocontainers/pyslow5?tab=tags


.. raw:: html

    <script>
        var package = "pyslow5";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyslow5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyslow5/README.html