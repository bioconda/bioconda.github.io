:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coidb'
.. highlight: bash

coidb
=====

.. conda:recipe:: coidb
   :replaces_section_title:
   :noindex:

   A tool to obtain and maintain a database of COI metabarcode references

   :homepage: https://github.com/johnne/coidb
   :license: MIT
   :recipe: /`coidb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coidb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coidb/meta.yaml>`_

   


.. conda:package:: coidb

   |downloads_coidb| |docker_coidb|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.3-0``

      

   
   :depends biopython: 
   :depends importlib_resources: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends snakemake: 
   :depends tqdm: 
   :depends vsearch: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coidb

   and update with::

      conda update coidb

   or use the docker container::

      docker pull quay.io/biocontainers/coidb:<tag>

   (see `coidb/tags`_ for valid values for ``<tag>``)


.. |downloads_coidb| image:: https://img.shields.io/conda/dn/bioconda/coidb.svg?style=flat
   :target: https://anaconda.org/bioconda/coidb
   :alt:   (downloads)
.. |docker_coidb| image:: https://quay.io/repository/biocontainers/coidb/status
   :target: https://quay.io/repository/biocontainers/coidb
.. _`coidb/tags`: https://quay.io/repository/biocontainers/coidb?tab=tags


.. raw:: html

    <script>
        var package = "coidb";
        var versions = ["0.4.0","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coidb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coidb/README.html