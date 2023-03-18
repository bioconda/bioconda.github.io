:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pastrami'
.. highlight: bash

pastrami
========

.. conda:recipe:: pastrami
   :replaces_section_title:
   :noindex:

   Pastrami is a novel\, scalable computational algorithm for rapid human ancestry estimation

   :homepage: https://github.com/healthdisparities/pastrami
   :license: CC BY-NC-SA 4.0
   :recipe: /`pastrami <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastrami>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pastrami/meta.yaml>`_

   


.. conda:package:: pastrami

   |downloads_pastrami| |docker_pastrami|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pastrami

   and update with::

      conda update pastrami

   or use the docker container::

      docker pull quay.io/biocontainers/pastrami:<tag>

   (see `pastrami/tags`_ for valid values for ``<tag>``)


.. |downloads_pastrami| image:: https://img.shields.io/conda/dn/bioconda/pastrami.svg?style=flat
   :target: https://anaconda.org/bioconda/pastrami
   :alt:   (downloads)
.. |docker_pastrami| image:: https://quay.io/repository/biocontainers/pastrami/status
   :target: https://quay.io/repository/biocontainers/pastrami
.. _`pastrami/tags`: https://quay.io/repository/biocontainers/pastrami?tab=tags


.. raw:: html

    <script>
        var package = "pastrami";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pastrami/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pastrami/README.html