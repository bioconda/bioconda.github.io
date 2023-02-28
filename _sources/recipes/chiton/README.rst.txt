:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chiton'
.. highlight: bash

chiton
======

.. conda:recipe:: chiton
   :replaces_section_title:
   :noindex:

   Chiton provides a Python wrapper to commonly used bioinformatics programs.

   :homepage: https://github.com/aaronmussig/chiton
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`chiton <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiton>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chiton/meta.yaml>`_

   


.. conda:package:: chiton

   |downloads_chiton| |docker_chiton|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends python: ``>=3.6``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chiton

   and update with::

      conda update chiton

   or use the docker container::

      docker pull quay.io/biocontainers/chiton:<tag>

   (see `chiton/tags`_ for valid values for ``<tag>``)


.. |downloads_chiton| image:: https://img.shields.io/conda/dn/bioconda/chiton.svg?style=flat
   :target: https://anaconda.org/bioconda/chiton
   :alt:   (downloads)
.. |docker_chiton| image:: https://quay.io/repository/biocontainers/chiton/status
   :target: https://quay.io/repository/biocontainers/chiton
.. _`chiton/tags`: https://quay.io/repository/biocontainers/chiton?tab=tags


.. raw:: html

    <script>
        var package = "chiton";
        var versions = ["1.1.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chiton/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chiton/README.html