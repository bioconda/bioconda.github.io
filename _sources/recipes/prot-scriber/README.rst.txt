:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prot-scriber'
.. highlight: bash

prot-scriber
============

.. conda:recipe:: prot-scriber
   :replaces_section_title:
   :noindex:

   Assigns short human readable descriptions \(HRD\) to query biological sequences using reference candidate descriptions.

   :homepage: https://github.com/usadellab/prot-scriber
   :license: GPL-3
   :recipe: /`prot-scriber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prot-scriber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prot-scriber/meta.yaml>`_

   


.. conda:package:: prot-scriber

   |downloads_prot-scriber| |docker_prot-scriber|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prot-scriber

   and update with::

      conda update prot-scriber

   or use the docker container::

      docker pull quay.io/biocontainers/prot-scriber:<tag>

   (see `prot-scriber/tags`_ for valid values for ``<tag>``)


.. |downloads_prot-scriber| image:: https://img.shields.io/conda/dn/bioconda/prot-scriber.svg?style=flat
   :target: https://anaconda.org/bioconda/prot-scriber
   :alt:   (downloads)
.. |docker_prot-scriber| image:: https://quay.io/repository/biocontainers/prot-scriber/status
   :target: https://quay.io/repository/biocontainers/prot-scriber
.. _`prot-scriber/tags`: https://quay.io/repository/biocontainers/prot-scriber?tab=tags


.. raw:: html

    <script>
        var package = "prot-scriber";
        var versions = ["0.1.3","0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prot-scriber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prot-scriber/README.html