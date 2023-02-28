:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwise'
.. highlight: bash

bwise
=====

.. conda:recipe:: bwise
   :replaces_section_title:
   :noindex:

   BWISE is a de Bruijn assembly Workflow using Integral information of Short paired\-End reads

   :homepage: https://github.com/Malfoy/BWISE
   :license: AGPL-3.0
   :recipe: /`bwise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwise/meta.yaml>`_

   


.. conda:package:: bwise

   |downloads_bwise| |docker_bwise|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bcalm: 
   :depends bgreat: 
   :depends btrim: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends python: ``>=3``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwise

   and update with::

      conda update bwise

   or use the docker container::

      docker pull quay.io/biocontainers/bwise:<tag>

   (see `bwise/tags`_ for valid values for ``<tag>``)


.. |downloads_bwise| image:: https://img.shields.io/conda/dn/bioconda/bwise.svg?style=flat
   :target: https://anaconda.org/bioconda/bwise
   :alt:   (downloads)
.. |docker_bwise| image:: https://quay.io/repository/biocontainers/bwise/status
   :target: https://quay.io/repository/biocontainers/bwise
.. _`bwise/tags`: https://quay.io/repository/biocontainers/bwise?tab=tags


.. raw:: html

    <script>
        var package = "bwise";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwise/README.html