:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'midsv'
.. highlight: bash

midsv
=====

.. conda:recipe:: midsv
   :replaces_section_title:
   :noindex:

   Python module to convert SAM to MIDSV format.

   :homepage: https://github.com/akikuno/mids
   :license: MIT
   :recipe: /`midsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/midsv/meta.yaml>`_

   


.. conda:package:: midsv

   |downloads_midsv| |docker_midsv|

   :versions:
      
      

      ``0.4.2-0``,  ``0.3.1-0``

      

   
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install midsv

   and update with::

      conda update midsv

   or use the docker container::

      docker pull quay.io/biocontainers/midsv:<tag>

   (see `midsv/tags`_ for valid values for ``<tag>``)


.. |downloads_midsv| image:: https://img.shields.io/conda/dn/bioconda/midsv.svg?style=flat
   :target: https://anaconda.org/bioconda/midsv
   :alt:   (downloads)
.. |docker_midsv| image:: https://quay.io/repository/biocontainers/midsv/status
   :target: https://quay.io/repository/biocontainers/midsv
.. _`midsv/tags`: https://quay.io/repository/biocontainers/midsv?tab=tags


.. raw:: html

    <script>
        var package = "midsv";
        var versions = ["0.4.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/midsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/midsv/README.html