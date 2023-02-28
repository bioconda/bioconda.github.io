:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cansnper2'
.. highlight: bash

cansnper2
=========

.. conda:recipe:: cansnper2
   :replaces_section_title:
   :noindex:

   A toolkit for SNP\-typing bacterial genomes.

   :homepage: https://github.com/FOI-Bioinformatics/CanSNPer2
   :license: GPL3 / GPLv3
   :recipe: /`cansnper2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cansnper2/meta.yaml>`_

   


.. conda:package:: cansnper2

   |downloads_cansnper2| |docker_cansnper2|

   :versions:
      
      

      ``2.0.6-0``

      

   
   :depends ete3: 
   :depends flextaxd: ``>=0.2.1``
   :depends progressivemauve: 
   :depends python: ``>3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cansnper2

   and update with::

      conda update cansnper2

   or use the docker container::

      docker pull quay.io/biocontainers/cansnper2:<tag>

   (see `cansnper2/tags`_ for valid values for ``<tag>``)


.. |downloads_cansnper2| image:: https://img.shields.io/conda/dn/bioconda/cansnper2.svg?style=flat
   :target: https://anaconda.org/bioconda/cansnper2
   :alt:   (downloads)
.. |docker_cansnper2| image:: https://quay.io/repository/biocontainers/cansnper2/status
   :target: https://quay.io/repository/biocontainers/cansnper2
.. _`cansnper2/tags`: https://quay.io/repository/biocontainers/cansnper2?tab=tags


.. raw:: html

    <script>
        var package = "cansnper2";
        var versions = ["2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cansnper2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cansnper2/README.html