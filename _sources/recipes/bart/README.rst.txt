:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bart'
.. highlight: bash

bart
====

.. conda:recipe:: bart
   :replaces_section_title:
   :noindex:

   bart \- a bacterial read type

   :homepage: https://github.com/tomdstanton/bart
   :license: MIT
   :recipe: /`bart <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bart>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bart/meta.yaml>`_

   


.. conda:package:: bart

   |downloads_bart| |docker_bart|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends kma: 
   :depends python: ``>=3.7,<=3.10``
   :depends refseq_masher: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bart

   and update with::

      conda update bart

   or use the docker container::

      docker pull quay.io/biocontainers/bart:<tag>

   (see `bart/tags`_ for valid values for ``<tag>``)


.. |downloads_bart| image:: https://img.shields.io/conda/dn/bioconda/bart.svg?style=flat
   :target: https://anaconda.org/bioconda/bart
   :alt:   (downloads)
.. |docker_bart| image:: https://quay.io/repository/biocontainers/bart/status
   :target: https://quay.io/repository/biocontainers/bart
.. _`bart/tags`: https://quay.io/repository/biocontainers/bart?tab=tags


.. raw:: html

    <script>
        var package = "bart";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bart/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bart/README.html