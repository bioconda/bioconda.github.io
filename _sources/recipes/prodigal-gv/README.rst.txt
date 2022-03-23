:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prodigal-gv'
.. highlight: bash

prodigal-gv
===========

.. conda:recipe:: prodigal-gv
   :replaces_section_title:
   :noindex:

   A fork of Prodigal meant to improve gene calling for giant viruses

   :homepage: https://github.com/apcamargo/prodigal-gv
   :license: GPL v3
   :recipe: /`prodigal-gv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal-gv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prodigal-gv/meta.yaml>`_

   


.. conda:package:: prodigal-gv

   |downloads_prodigal-gv| |docker_prodigal-gv|

   :versions:
      
      

      ``2.7.0-0``,  ``2.6.3-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prodigal-gv

   and update with::

      conda update prodigal-gv

   or use the docker container::

      docker pull quay.io/biocontainers/prodigal-gv:<tag>

   (see `prodigal-gv/tags`_ for valid values for ``<tag>``)


.. |downloads_prodigal-gv| image:: https://img.shields.io/conda/dn/bioconda/prodigal-gv.svg?style=flat
   :target: https://anaconda.org/bioconda/prodigal-gv
   :alt:   (downloads)
.. |docker_prodigal-gv| image:: https://quay.io/repository/biocontainers/prodigal-gv/status
   :target: https://quay.io/repository/biocontainers/prodigal-gv
.. _`prodigal-gv/tags`: https://quay.io/repository/biocontainers/prodigal-gv?tab=tags


.. raw:: html

    <script>
        var package = "prodigal-gv";
        var versions = ["2.7.0","2.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prodigal-gv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prodigal-gv/README.html