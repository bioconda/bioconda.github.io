:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phykit'
.. highlight: bash

phykit
======

.. conda:recipe:: phykit
   :replaces_section_title:
   :noindex:

   PhyKIT is a UNIX shell toolkit for processing and analyzing phylogenomic data.

   :homepage: https://github.com/jlsteenwyk/phykit
   :license: MIT
   :recipe: /`phykit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phykit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phykit/meta.yaml>`_

   


.. conda:package:: phykit

   |downloads_phykit| |docker_phykit|

   :versions:
      
      

      ``1.11.14-0``,  ``1.11.13-0``,  ``1.11.12-0``,  ``1.11.10-0``,  ``1.11.7-0``,  ``1.11.5-0``

      

   
   :depends biopython: ``>=1.79``
   :depends numpy: ``>=1.18.2``
   :depends python: ``>=3``
   :depends scipy: ``>=1.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phykit

   and update with::

      conda update phykit

   or use the docker container::

      docker pull quay.io/biocontainers/phykit:<tag>

   (see `phykit/tags`_ for valid values for ``<tag>``)


.. |downloads_phykit| image:: https://img.shields.io/conda/dn/bioconda/phykit.svg?style=flat
   :target: https://anaconda.org/bioconda/phykit
   :alt:   (downloads)
.. |docker_phykit| image:: https://quay.io/repository/biocontainers/phykit/status
   :target: https://quay.io/repository/biocontainers/phykit
.. _`phykit/tags`: https://quay.io/repository/biocontainers/phykit?tab=tags


.. raw:: html

    <script>
        var package = "phykit";
        var versions = ["1.11.14","1.11.13","1.11.12","1.11.10","1.11.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phykit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phykit/README.html